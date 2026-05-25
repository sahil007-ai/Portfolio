# LangGraph Game Generator - Complete Project Plan

## 🎯 Project Overview
**Goal:** Interactive web app where users describe a game and LangGraph agents generate playable mini-games

**Tech Stack:**
- **Backend (YOU CODE):** Python + LangGraph + FastAPI
- **Frontend (I BUILD):** Next.js + TailwindCSS + Framer Motion
- **Database (I SETUP):** Supabase (PostgreSQL)
- **Deployment:** Vercel (Frontend) + Railway/Render (Backend)

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────┐
│          FRONTEND (Next.js)                   │
│  ┌────────────────────────────────────────┐  │
│  │  /games/create - Game Creation Form    │  │
│  │  - Creator Name Input                  │  │
│  │  - Game Title Input                    │  │
│  │  - Game Description Textarea           │  │
│  │  - Generate Button                     │  │
│  └────────────────────────────────────────┘  │
│                                               │
│  ┌────────────────────────────────────────┐  │
│  │  /games/library - Game Gallery         │  │
│  │  - Grid of generated games             │  │
│  │  - Filter by game type                 │  │
│  │  - Search functionality                │  │
│  └────────────────────────────────────────┘  │
│                                               │
│  ┌────────────────────────────────────────┐  │
│  │  /games/[id] - Individual Game Page    │  │
│  │  - Playable game iframe/component      │  │
│  │  - Creator info                        │  │
│  │  - Game details                        │  │
│  └────────────────────────────────────────┘  │
└───────────────┬──────────────────────────────┘
                │ REST API calls
                ↓
┌──────────────────────────────────────────────┐
│       BACKEND (FastAPI - YOU BUILD)           │
│  ┌────────────────────────────────────────┐  │
│  │  POST /api/games/generate              │  │
│  │  Input: {creator, title, description}  │  │
│  │  Output: {game_id, game_config}        │  │
│  └────────────────────────────────────────┘  │
│                                               │
│  ┌────────────────────────────────────────┐  │
│  │  LangGraph Agent Workflow              │  │
│  │  1. Parse prompt → extract intent      │  │
│  │  2. Select game type (Tic/Snake/Memory)│  │
│  │  3. Generate game config               │  │
│  │  4. Validate & return                  │  │
│  └────────────────────────────────────────┘  │
│                                               │
│  ┌────────────────────────────────────────┐  │
│  │  GET /api/games                        │  │
│  │  GET /api/games/{id}                   │  │
│  │  POST /api/games/{id}/approve          │  │
│  └────────────────────────────────────────┘  │
└───────────────┬──────────────────────────────┘
                │
                ↓
┌──────────────────────────────────────────────┐
│          DATABASE (Supabase)                  │
│  Table: games                                 │
│  - id (uuid)                                  │
│  - creator_name (text)                        │
│  - game_title (text)                          │
│  - description (text)                         │
│  - game_type (enum: tictactoe/snake/memory)  │
│  - game_config (jsonb)                        │
│  - status (enum: pending/approved/rejected)  │
│  - created_at (timestamp)                     │
└──────────────────────────────────────────────┘
```

---

## 📂 Folder Structure

```
portfolio/
├── frontend/                      # Next.js app (I BUILD)
│   ├── app/
│   │   ├── games/
│   │   │   ├── create/
│   │   │   │   └── page.tsx      # Game creation form
│   │   │   ├── library/
│   │   │   │   └── page.tsx      # Game gallery
│   │   │   └── [id]/
│   │   │       └── page.tsx      # Individual game page
│   │   └── api/                   # API route handlers (proxy to backend)
│   ├── components/
│   │   ├── GameRenderer.tsx       # Renders Tic/Snake/Memory
│   │   ├── GameCard.tsx           # Gallery card component
│   │   └── CreateGameForm.tsx     # Form component
│   └── lib/
│       └── supabase.ts            # Database client
│
├── backend/                       # FastAPI app (YOU BUILD)
│   ├── main.py                    # FastAPI server entry point
│   ├── routers/
│   │   └── games.py               # Game API endpoints
│   ├── agents/
│   │   ├── game_generator.py     # LangGraph workflow
│   │   ├── game_validator.py     # Validation logic
│   │   └── nodes/
│   │       ├── parse_prompt.py   # Parse user input
│   │       ├── select_game.py    # Choose game type
│   │       └── generate_config.py # Create game config
│   ├── models/
│   │   └── game.py                # Pydantic models
│   └── requirements.txt
│
└── database/
    └── schema.sql                 # Database schema (I CREATE)
```

---

## 🔧 YOUR TASKS (Python Backend)

### Phase 1: Basic FastAPI Setup
```python
# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Game Generator API"}
```

### Phase 2: LangGraph Agent (Core Logic)
```python
# agents/game_generator.py
from langgraph.graph import StateGraph, END
from typing import TypedDict, Literal

class GameState(TypedDict):
    user_prompt: str
    game_type: Literal["tictactoe", "snake", "memory"] | None
    game_config: dict | None
    error: str | None

def parse_prompt(state: GameState) -> GameState:
    """Extract intent from user description"""
    prompt = state["user_prompt"].lower()
    
    # Simple keyword matching (you can use LLM here)
    if "tic" in prompt or "tac" in prompt or "x and o" in prompt:
        state["game_type"] = "tictactoe"
    elif "snake" in prompt or "eat" in prompt:
        state["game_type"] = "snake"
    elif "memory" in prompt or "match" in prompt or "cards" in prompt:
        state["game_type"] = "memory"
    else:
        # Default or use LLM to decide
        state["game_type"] = "tictactoe"
    
    return state

def generate_config(state: GameState) -> GameState:
    """Generate game configuration"""
    game_type = state["game_type"]
    
    if game_type == "tictactoe":
        state["game_config"] = {
            "type": "tictactoe",
            "grid_size": 3,
            "theme": "classic",
            "difficulty": "medium"
        }
    elif game_type == "snake":
        state["game_config"] = {
            "type": "snake",
            "grid_size": 20,
            "speed": 150,
            "obstacles": False
        }
    elif game_type == "memory":
        state["game_config"] = {
            "type": "memory",
            "pairs": 8,
            "theme": "emoji",
            "difficulty": "easy"
        }
    
    return state

# Build LangGraph
workflow = StateGraph(GameState)
workflow.add_node("parse", parse_prompt)
workflow.add_node("generate", generate_config)

workflow.set_entry_point("parse")
workflow.add_edge("parse", "generate")
workflow.add_edge("generate", END)

game_generator = workflow.compile()
```

### Phase 3: API Endpoints
```python
# routers/games.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from agents.game_generator import game_generator, GameState

router = APIRouter(prefix="/api/games")

class GenerateRequest(BaseModel):
    creator_name: str
    game_title: str
    description: str

@router.post("/generate")
async def generate_game(request: GenerateRequest):
    """Generate a game based on user description"""
    
    # Run LangGraph agent
    result = game_generator.invoke({
        "user_prompt": request.description,
        "game_type": None,
        "game_config": None,
        "error": None
    })
    
    if result.get("error"):
        raise HTTPException(status_code=400, detail=result["error"])
    
    # Save to database (I'll provide the database client)
    game_data = {
        "creator_name": request.creator_name,
        "game_title": request.game_title,
        "description": request.description,
        "game_type": result["game_type"],
        "game_config": result["game_config"],
        "status": "pending"
    }
    
    # TODO: Insert into Supabase (I'll give you the code)
    
    return {
        "game_id": "abc-123",  # Generated from DB
        "game_config": result["game_config"]
    }

@router.get("/")
async def list_games(status: str = "approved"):
    """Get list of games"""
    # TODO: Query Supabase
    return {"games": []}

@router.get("/{game_id}")
async def get_game(game_id: str):
    """Get specific game details"""
    # TODO: Query Supabase
    return {"game": {}}
```

---

## 🎨 MY TASKS (Frontend)

### 1. Game Creation Page
- Form with 3 inputs (creator, title, description)
- "Generate Game" button with loading state
- Terms & conditions checkbox (ownership clause)
- Preview generated game config

### 2. Game Library
- Grid layout with game cards
- Filter by game type
- Search by title/creator
- "Play" button → navigates to game page

### 3. Game Renderer
- Tic-Tac-Toe component (React)
- Snake game component (Canvas API)
- Memory Match component (React)
- Game controls & score display

### 4. Database Integration
- Supabase client setup
- CRUD operations
- Real-time updates (optional)

---

## 📊 Data Models

### Game Schema
```sql
CREATE TABLE games (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  creator_name TEXT NOT NULL,
  game_title TEXT NOT NULL,
  description TEXT NOT NULL,
  game_type TEXT NOT NULL CHECK (game_type IN ('tictactoe', 'snake', 'memory')),
  game_config JSONB NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  approved_at TIMESTAMP WITH TIME ZONE,
  
  -- Indexes for performance
  INDEX idx_status ON games(status),
  INDEX idx_created_at ON games(created_at DESC)
);
```

---

## 🚦 Rate Limiting & Cost Control

```python
# utils/rate_limiter.py
from datetime import datetime, timedelta
from collections import defaultdict

class SimpleRateLimiter:
    def __init__(self):
        self.requests = defaultdict(list)
    
    def check_rate_limit(self, ip: str, max_requests: int = 3, window_hours: int = 24):
        """Check if IP has exceeded rate limit"""
        now = datetime.now()
        cutoff = now - timedelta(hours=window_hours)
        
        # Remove old requests
        self.requests[ip] = [
            req_time for req_time in self.requests[ip]
            if req_time > cutoff
        ]
        
        # Check limit
        if len(self.requests[ip]) >= max_requests:
            return False, "Rate limit exceeded. Try again tomorrow."
        
        # Add current request
        self.requests[ip].append(now)
        return True, None

rate_limiter = SimpleRateLimiter()

# In your endpoint:
@router.post("/generate")
async def generate_game(request: GenerateRequest, client_ip: str = Depends(get_client_ip)):
    allowed, error = rate_limiter.check_rate_limit(client_ip)
    if not allowed:
        raise HTTPException(status_code=429, detail=error)
    
    # ... rest of code
```

---

## 📝 Legal/Ownership Notice (Frontend)

```tsx
// components/OwnershipNotice.tsx
export default function OwnershipNotice() {
  return (
    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 my-4">
      <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
        📜 Content License Agreement
      </h4>
      <p className="text-sm text-yellow-800 dark:text-yellow-200">
        By creating a game, you grant a perpetual, royalty-free, worldwide license 
        to display your game in this public gallery. Your creator name will be shown 
        with attribution. API costs are covered by the project maintainer, who 
        reserves the right to moderate and approve submissions.
      </p>
      <label className="flex items-center gap-2 mt-3">
        <input type="checkbox" required className="rounded" />
        <span className="text-sm text-yellow-900 dark:text-yellow-100">
          I agree to these terms
        </span>
      </label>
    </div>
  );
}
```

---

## 🎯 MVP Scope (Start Simple)

### V1 Features (Launch)
- ✅ Generate 3 game types (Tic-Tac-Toe, Snake, Memory)
- ✅ Public game library
- ✅ Basic creator attribution
- ✅ Admin approval system (manual for now)
- ✅ Rate limiting (3 games/day/IP)

### V2 Features (Later)
- 🔄 More game types (Chess, Sudoku, etc.)
- 🔄 AI-powered difficulty adjustment
- 🔄 Custom themes/colors
- 🔄 User accounts (GitHub OAuth)
- 🔄 Leaderboards
- 🔄 Game sharing (social links)

---

## 🚀 Development Workflow

### YOU (Python Backend):
1. ✅ Complete LangGraph course
2. ✅ Set up FastAPI project structure
3. ✅ Build LangGraph game generator workflow
4. ✅ Create API endpoints
5. ✅ Test with Postman/Thunder Client
6. ✅ Share API documentation with me

### ME (Frontend):
1. ✅ Set up Next.js project
2. ✅ Build UI components
3. ✅ Integrate with your API
4. ✅ Set up Supabase database
5. ✅ Deploy frontend to Vercel
6. ✅ Help you deploy backend to Railway

---

## 📞 Integration Points

### What I Need From You:
1. **API Base URL** (e.g., `https://your-api.railway.app`)
2. **API Endpoints Documentation** (request/response formats)
3. **Environment Variables** (OpenAI API key, etc.)

### What You Need From Me:
1. **Supabase credentials** (database connection)
2. **Frontend API route handlers** (how to call your backend)
3. **Game config schemas** (what format games expect)

---

## 🔥 NEXT STEPS

### This Week:
1. ✅ Finish LangGraph course
2. ✅ Review this document
3. ✅ Set up basic FastAPI project
4. ✅ Build simple LangGraph workflow (just Tic-Tac-Toe)

### Next Week:
1. Connect to my frontend
2. Test end-to-end flow
3. Add Snake & Memory games
4. Deploy MVP

---

## 💬 Questions to Clarify

1. **LLM Choice:** OpenAI API or local model (Ollama)?
2. **Deployment:** Do you have Railway/Render account? Need help setting up?
3. **Game Complexity:** Should games save state (user progress)?
4. **Admin Panel:** Do you want a UI to approve/reject games, or manual database updates?

---

**Ready to start building?** Let me know when you finish the LangGraph course, and I'll begin the frontend setup! 🚀

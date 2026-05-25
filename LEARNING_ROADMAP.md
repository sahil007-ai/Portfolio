# GenAI Internship Roadmap — Sahil

> A staged plan from "just finished LangChain Academy intro" to "competitive applicant for GenAI internships in India and abroad."
>
> Written by treating this like an engineering project, not a syllabus. Each phase has explicit goals, **specific** resources, and a project you must ship before moving on. If you finish a phase and have nothing on GitHub to show for it, you didn't finish the phase.

---

## The honest framing first

Three things to internalize before reading the rest:

1. **Knowing things doesn't matter to recruiters. Building things does.** Every resource below is in service of a specific project. If you find yourself watching tutorials for 6 hours and writing 0 lines of code, stop and start coding.
2. **The LangChain Academy course is the floor, not the ceiling.** A competent recruiter will recognize the Wikipedia Assistant pattern in 30 seconds (you noticed I did). Everyone serious about GenAI takes that course. **Differentiation comes from what you build with it after.**
3. **Production concerns matter more than model concerns.** A student who can talk about retrieval evals, latency, cost, hallucination measurement, and prompt iteration is a stronger candidate than one who has memorized transformer math. Your math is fine; your "I shipped this and measured it" stories aren't there yet. That's the gap to close.

---

## Where you are now (rough estimate)

- ✅ Python, classical ML basics (scikit-learn, XGBoost, SHAP)
- ✅ Computer vision basics (OpenCV, MediaPipe)
- ✅ Web stack (Next.js, FastAPI)
- 🟡 LangChain Academy: Intro to LangGraph (in progress)
- ❌ Deep LLM fundamentals (transformers, tokenization, attention)
- ❌ RAG with real evaluation
- ❌ Vector databases hands-on
- ❌ Agent design patterns beyond the LangGraph intro examples
- ❌ Production concerns: cost, latency, observability, guardrails
- ❌ Open source contributions
- ❌ Technical writing

That's a realistic 6–9 months of focused work to close, assuming ~10 hours/week.

---

## Phase 1 — LLM Fundamentals (Weeks 1–4)

**Goal:** When a senior engineer asks "how does this actually work under the hood," you can answer without bullshitting.

### What to learn

- Transformer architecture: attention, self-attention, multi-head attention
- Tokenization: BPE, why "strawberry" has 3 r's but tokenizers see 1 token
- Embeddings: semantic similarity, why cosine distance, dimensionality
- Encoder-only vs decoder-only vs encoder-decoder (BERT vs GPT vs T5)
- Sampling: temperature, top-p, top-k — what each actually does
- Context windows, KV cache, why long context is expensive

### Where to learn (in this exact order)

1. **Andrej Karpathy — "Intro to Large Language Models" (1 hr YouTube)** — the one-shot orientation, free.
2. **3Blue1Brown — "But what is a GPT?" + "Attention in transformers" (~50 min, YouTube)** — best visual explanation that exists.
3. **Andrej Karpathy — "Let's build GPT: from scratch, in code" (2 hrs YouTube)** — code along. Yes, all 2 hours. This is the single highest-ROI video on the internet for LLM understanding.
4. **Karpathy — "Let's build the GPT Tokenizer" (~2 hrs)** — most students skip this. Don't.
5. **Hugging Face NLP Course — chapters 1–3** (free, https://huggingface.co/learn/nlp-course) — fills in BERT/T5 if Karpathy didn't.

### Phase 1 ship gate

A repo called something like `nano-gpt-replication` containing your version of Karpathy's micro-GPT, with a README that explains attention in your own words and shows your loss curve. **Push it to GitHub.** Add it to your portfolio under a "Learning Notes" section, not Projects.

---

## Phase 2 — Application Layer (Weeks 5–12)

**Goal:** Build production-shaped LLM apps — RAG, agents, tool use — with at least one real metric per project.

### What to learn

- LangChain: chains, runnables (LCEL), output parsers, structured output (Pydantic, `with_structured_output`)
- LangGraph (deeper than the intro): subgraphs, interrupt/resume, persistence, human-in-the-loop, streaming
- Vector databases: at minimum **Chroma** (local) and **pgvector** or **Pinecone** (hosted)
- Embedding models: `text-embedding-3-small`, `text-embedding-3-large`, BGE, sentence-transformers — and how to pick
- Document processing: chunking strategies (fixed, recursive, semantic, parent-document), metadata filtering
- Retrieval strategies: dense, sparse (BM25), hybrid, re-ranking with Cohere or BGE-reranker
- Agent patterns: ReAct, Plan-and-Execute, multi-agent supervision, tool calling
- Function/tool calling: OpenAI function calling, Anthropic tool use, structured tools

### Where to learn

These are **all free** unless noted. Audit them on Coursera if asked to pay.

1. **DeepLearning.AI Short Courses** — do these in this order, ~1.5 hrs each:
   - ChatGPT Prompt Engineering for Developers
   - LangChain for LLM Application Development
   - LangChain: Chat with Your Data
   - Functions, Tools and Agents with LangChain
   - **Building and Evaluating Advanced RAG**
   - Multi AI Agent Systems with crewAI (compare against LangGraph)
   - AI Agentic Design Patterns with AutoGen (same — comparison is the point)

2. **LangChain Academy** (your current spot — finish in order):
   - ✅ Introduction to LangGraph (you're on this)
   - Long-Term Memory with LangGraph
   - Building Ambient Agents with LangGraph

3. **James Briggs YouTube channel** — best practical RAG channel that exists. Watch his "Advanced RAG" series.

4. **LangChain official cookbook** (https://github.com/langchain-ai/langchain/tree/master/cookbook) — read 5 random notebooks per week.

5. **Read these 3 papers** (with Yannic Kilcher's YouTube explainers as backup):
   - Lewis et al., "Retrieval-Augmented Generation" (the original RAG paper)
   - Yao et al., "ReAct: Synergizing Reasoning and Acting"
   - Wei et al., "Chain-of-Thought Prompting"

### Phase 2 ship gates (build all 3 — these go on the resume)

**Project A — RAG with real evaluation (replaces the Wikipedia assistant as your headline project).**
- Pick a domain you actually know: your college's syllabus PDFs, the Indian constitution, your favorite book series — something specific.
- Build the RAG with Chroma + a real embedding model.
- **Build a 50-question evaluation set yourself.** Compute retrieval@5 and answer faithfulness with RAGAS.
- Write a README with a numbers table: chunk size 256 vs 512 vs semantic, retrieval@5 = X%, Y%, Z%. **This kind of table is what a recruiter dreams of seeing on a student resume.**

**Project B — A LangGraph agent that does ONE thing well, not everything badly.**
- Examples that work: "PR description writer that reads a git diff and produces a CHANGELOG entry"; "Resume tailor that reads a JD and reorders bullets"; "Daily research digest agent that summarizes 3 chosen arXiv papers."
- Must use tool calling, must persist state, must be deployed somewhere (Modal Labs free tier, Railway, Render — pick one).
- 1-minute Loom demo embedded in the README.

**Project C — Replace the Customer Churn project with something more recent that includes an LLM step.**
- e.g., a churn predictor where the LLM generates a personalized retention email per high-risk customer, with grounding from a CRM-shaped CSV. Same XGBoost model, but now there's a GenAI surface on top.
- Keeps your classical ML cred and shows you can stitch the two together.

---

## Phase 3 — Production GenAI (Weeks 13–20)

**Goal:** Move from "I can build a demo" to "I can ship something that doesn't fall over." This is where you start beating other interns.

### What to learn

- **Evaluation:** RAGAS (faithfulness, context precision, answer relevancy), LangSmith evals, custom evals with LLM-as-judge
- **Observability:** LangSmith (free tier), Langfuse (open source), Helicone — pick one and instrument every project
- **Cost optimization:** model routing (Haiku for cheap, Sonnet for hard), caching (semantic cache, prompt cache), batching
- **Latency optimization:** streaming, async, parallel tool calls, prefetching
- **Hallucination defense:** grounded prompting, citation enforcement, structured output, refusal tuning
- **Guardrails:** prompt injection defense (Lakera, Guardrails AI), content moderation (OpenAI moderation API), PII detection
- **Structured output:** `instructor` library, Pydantic schemas, JSON mode, repair loops

### Where to learn

1. **DeepLearning.AI:**
   - Quality and Safety for LLM Applications
   - Automated Testing for LLMOps
   - Building Agentic RAG with LlamaIndex (LlamaIndex perspective for breadth)

2. **Eugene Yan's blog** (https://eugeneyan.com) — best practitioner writing on GenAI evals, period. Read everything tagged `llm`.

3. **Lilian Weng's blog** (OpenAI lead, https://lilianweng.github.io) — read "Prompt Engineering," "LLM Powered Autonomous Agents," "Adversarial Attacks on LLMs." Dense but worth it.

4. **Anthropic's prompt engineering interactive tutorial** (https://github.com/anthropics/prompt-eng-interactive-tutorial) — free, hands-on, the best prompt engineering material that exists.

5. **LangSmith documentation** — actually read it cover-to-cover. Most people don't, which is why most people can't talk about evals.

### Phase 3 ship gates

**Project D — Take Project A (RAG) and add a full eval + monitoring layer.**
- LangSmith instrumentation
- Cost dashboard (per query: tokens, $, latency)
- A/B test of two embedding models on your eval set, with significance test
- Write a blog post: "What I learned building evals for my own RAG system"

**Blog post #1 — first real technical write-up.**
- Topic: anything from Phase 1–3 you understand well now.
- 1500–2500 words, hosted on `sahil.page/blog/` (add a blog route to your Next.js app).
- Cross-post to dev.to and your LinkedIn.

---

## Phase 4 — Differentiation (Weeks 21+, ongoing)

**Goal:** Stop being a "student who took the GenAI courses" and become someone with a tiny but real public presence.

By here, "top applicants" diverge based on what they want. Pick **two** of the following directions, not all of them:

### Direction A — Open Source

Make 3+ contributions to LangChain, LlamaIndex, or Hugging Face. Even **docs fixes count for the first one** — get past your fear of someone else's repo. Aim for one actual code PR by the end of this phase.

How: subscribe to the "good first issue" RSS for `langchain-ai/langchain`. Pick one. Spend a week understanding the codebase before touching it.

### Direction B — Fine-Tuning & Open Models

- Hugging Face PEFT + TRL libraries
- LoRA / QLoRA on a small open model (Qwen-2.5-0.5B is your friend — small enough to train on Colab free)
- Quantization (GGUF, AWQ) for local inference
- Inference engines: vLLM, llama.cpp, Ollama (you've already used Ollama — go deeper)

Resources:
- Hugging Face NLP course chapters 7–8
- Sebastian Raschka's blog (https://sebastianraschka.com) — best fine-tuning writing
- "Build a Large Language Model (From Scratch)" by Sebastian Raschka (the only book worth buying)

Project: Fine-tune Qwen-2.5-0.5B with LoRA on a niche task (e.g., generating Marathi product descriptions, or grading homework problems in your domain). Evaluate against the base model. Push the LoRA adapter to Hugging Face Hub. Write about it.

### Direction C — Agentic Systems (the current frontier)

- LangGraph deep-dive: subgraphs, interrupt-resume, multi-agent orchestration
- CrewAI, AutoGen comparison (you'll have done this in Phase 2)
- MCP (Model Context Protocol) — Anthropic's recent agent protocol, becoming the standard
- Voice agents (Pipecat, LiveKit Agents)
- Browser agents (Playwright + LLM, Steel.dev)

Project: Build something that's actually useful in your daily life and wasn't possible before agents. Examples: a "homework help" agent that browses, takes screenshots, and explains; a "JD-to-cover-letter" agent that scrapes a careers page and tailors per-job. Deploy it. Use it. Tell people about it.

### Direction D — Research Replication

Pick one paper from the last 12 months that you can replicate in a weekend. Write up your replication.

Good candidates:
- "Self-RAG"
- "Corrective RAG"
- "GraphRAG" (Microsoft)
- "Reflection Agents"
- "Tree of Thoughts"

This is the path that maps to "research engineer intern" roles at places like Anthropic, DeepMind, etc.

---

## Always-on practices (start today)

These aren't "phases" — they're habits you maintain throughout.

### 1. Hackathons (target 1 per quarter)

- **Smart India Hackathon** (SIH) — annual, has GenAI tracks
- **Devpost** (https://devpost.com) — search "GenAI" or "LLM," there are usually 3+ active each month
- **AWS / Google / OpenAI / Anthropic** hackathons — usually have remote tracks
- **Hugging Face hackathons** — community-run, very welcoming

A top-3 finish on a Devpost GenAI hackathon beats most college wins on a resume.

### 2. Twitter/X presence (low effort, high signal)

Follow these and read what they retweet. You don't need to post much; reading is the whole point.

- @karpathy (Andrej Karpathy)
- @swyx (Latent Space podcast host)
- @hwchase17 (LangChain CEO)
- @AndrewYNg
- @ylecun (Yann LeCun)
- @rasbt (Sebastian Raschka)
- @LangChainAI (official)
- @huggingface
- @AnthropicAI
- @OpenAI

**One post a week** with a short reflection on something you learned. That's enough. Don't shitpost; don't argue.

### 3. Newsletters / podcasts

- **The Batch** by DeepLearning.AI — weekly, free, the only one you can't skip
- **Latent Space** podcast — practitioner-focused, currently the best in the space
- **Sebastian Raschka's "Ahead of AI"** — paper roundups, monthly

### 4. GitHub presence

- A green-square commit graph reads as "active." Aim for ~3 commit days per week minimum.
- Pin your top 6 repos. Make sure each has a real README with screenshots/GIFs.
- Add a profile README. (Search "GitHub profile README templates.")

### 5. The "publish or die" rule

Every project gets a README that's longer than the code. Every blog post is announced on LinkedIn. Every demo gets a tweet. **A project that exists only in a private repo doesn't exist.** This is the single biggest mistake students make.

---

## Anti-patterns to avoid

Things I've seen kill student applications:

1. **Spending 3 months building one "perfect" project instead of 6 small shipped ones.** Recruiters hire for shipping velocity, not perfectionism.
2. **Listing every library you've heard of in skills.** I covered this in the resume review. Don't.
3. **Calling yourself an "AI Engineer" / "GenAI Specialist" before you've shipped 3 things.** Use student framing. The senior framing reads as overconfident, not impressive.
4. **Tutorial replication without commentary.** A `langchain-tutorials/` repo is a red flag, not a strength. Always add your own twist + a "what I'd do differently" section.
5. **Ignoring evaluation entirely.** "It seems to work" is not an answer. If you can't measure it, you didn't build it; you stumbled into it.
6. **Conflating LinkedIn-busy with actually-busy.** Posting "I just completed the X certificate!" 5x a week ≠ value. One project demo per month ≠ a lot, but it's worth more than 50 certificate posts.
7. **Sticking to one cloud / one framework / one provider.** Try OpenAI **and** Anthropic **and** an open model. Try LangGraph **and** CrewAI. Knowing trade-offs is the actual skill.

---

## A realistic 6-month timeline

If you're starting today (May 2026) with internship apps in November–February for summer 2027:

| Month | Focus | Output |
|---|---|---|
| May | Phase 1 | nano-GPT replica + LangChain Academy intro finished |
| June | Phase 2A | RAG with evals project shipped, deployed |
| July | Phase 2B | LangGraph agent project shipped, deployed |
| Aug | Phase 2C + Phase 3 | Churn-with-LLM project + LangSmith on everything |
| Sep | Phase 3 | First blog post live; Devpost hackathon entered |
| Oct | Phase 4 (pick 2) | First open-source PR merged; fine-tuning experiment |
| **Nov** | **Apply.** | Resume v3, second blog post, polish, **start applying.** |

Six months. Every month has a deliverable. Every deliverable goes on the resume.

---

## How to know you're "ready"

You're a competitive applicant when:

- You have 3 deployed GenAI projects, each with a metric in the README.
- You've written 2 technical blog posts that aren't tutorial regurgitation.
- You have at least 1 open-source PR merged anywhere.
- You can answer "how would you reduce hallucinations in this system" with 4 specific techniques and their trade-offs.
- You can answer "how would you decide between RAG and fine-tuning for this problem" with a real cost-and-quality argument.
- Your GitHub graph is consistently green.

That profile gets you to **first-round interview** at most Indian GenAI startups and a fair shot at the global ones (Cohere, Hugging Face, smaller labs). You won't compete with PhD applicants for DeepMind — that's a different track entirely — but everywhere else is on the table.

---

## TL;DR for the impatient

> Finish LangChain Academy intro this week. Then: 4 weeks of fundamentals (Karpathy + 3B1B + HF NLP). Then 8 weeks of building 3 production-shaped projects with real metrics on each README. Then 8 weeks of evals + observability + 1 blog post. Then pick two of {open source, fine-tuning, agents, research replication} and dig in. Apply in month 6+. **Ship publicly the entire time.**

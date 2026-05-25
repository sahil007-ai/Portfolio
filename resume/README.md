# Resume — GenAI Edition

This folder holds the source files for Sahil's GenAI-targeted resume. The previously-existing `public/Sahil_Somyani_Resume.pdf` was a Data Science resume that didn't mention any LLM / GenAI work; this version is rewritten from the ground up to apply for GenAI internships.

## Files

| File | Purpose |
|---|---|
| `Sahil_Somyani_Resume_GenAI.tex` | LaTeX source (Jake Gutierrez template style) — best-looking output, recommended for final use. |
| `Sahil_Somyani_Resume_GenAI.html` | HTML source — used to generate the included PDF locally, also useful for previewing in a browser. |
| `Sahil_Somyani_Resume_GenAI.pdf` | Compiled PDF, ready to send to recruiters today. Single page, ATS-friendly. |

## Before you send it

Open `Sahil_Somyani_Resume_GenAI.tex` (or the HTML) and fix these placeholders / verify these facts. Don't skip this step.

- [ ] Replace `+91-XXXXXXXXXX` with your actual phone number (or remove the line if you don't want it on the resume).
- [ ] Verify the education dates (`Aug 2024 – May 2028`). Adjust if your batch started in a different month or you joined late.
- [ ] Verify the college name. The original PDF said "JD College of Engineering"; the most common public name is "JD College of Engineering and Management". Use whichever matches your transcript.
- [ ] Verify the certification line. I changed it from "Machine Learning Specialization – Kaggle" (which is misleading — Kaggle Learn doesn't have a "Specialization") to "Kaggle Learn — Intro to Machine Learning + Intermediate Machine Learning". If those are not the courses you actually took, edit accordingly.
- [ ] Confirm the "Customer Churn" project is your own end-to-end work and not a tutorial walkthrough. If it is a tutorial dataset (e.g., the IBM Telco Churn set on Kaggle), that's fine — just be ready to defend in an interview what was *yours* vs the tutorial's baseline (e.g., "I beat the baseline F1 of 0.78 with my SMOTE + XGBoost setup at 0.88").
- [ ] The Customer Churn GitHub link currently points to your profile (`github.com/sahil007-ai`) because there's no specific repo on the portfolio. If you have a repo for it, update the link. If you don't, push your churn notebook to a public repo and link it.
- [ ] Add `DeepLearning.AI – ChatGPT Prompt Engineering for Developers` to the Certifications section once you finish it (free, ~1.5 hours, search the course name on Coursera). Then add `DeepLearning.AI – LangChain for LLM Application Development`. Two free certifications get you closer to a 7+ rating.

## How to compile to PDF

### Option A — Overleaf (recommended, no install)

1. Go to [overleaf.com](https://www.overleaf.com) → sign up free.
2. Click **New Project → Upload Project**.
3. Upload `Sahil_Somyani_Resume_GenAI.tex`.
4. Click **Recompile**.
5. Click **Download PDF**.

### Option B — Local LaTeX (if you have it installed)

```bash
pdflatex Sahil_Somyani_Resume_GenAI.tex
```

### Option C — Regenerate from the HTML (Python)

This is what was used to generate the bundled `Sahil_Somyani_Resume_GenAI.pdf`. Useful if you don't want to use LaTeX at all.

```bash
pip install weasyprint
python -c "from weasyprint import HTML; HTML('Sahil_Somyani_Resume_GenAI.html').write_pdf('Sahil_Somyani_Resume_GenAI.pdf')"
```

## Note on the portfolio site

The portfolio's Hero "Download Resume" button (added in the previous PR) points to `/Sahil_Somyani_Resume.pdf`. That same PDF in `/public/` has been swapped to this new GenAI version, so visitors clicking the button will get the GenAI resume.

The previous Data Science resume has been preserved at `/public/Sahil_Somyani_Resume_DS.pdf` in case you want to apply for any DS roles separately.

## Two-resume strategy

For competitive internship applications, send the resume that matches the role description's keywords:

- **Roles mentioning** *LLM, GenAI, RAG, agents, prompt engineering, LangChain, AI engineer* → **Send the GenAI resume.**
- **Roles mentioning** *data scientist, ML engineer, classical ML, predictive modeling, analytics* → **Send the DS resume.**

If a role mentions both, send whichever the *first* skill in the JD aligns with — that's usually the role's true center of gravity.

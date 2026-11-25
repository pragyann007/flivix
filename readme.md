# Flivix

### Turn your knowledge into something worth publishing.

**Flivix** is an AI-powered publishing platform built for educational and informational content creators. It transforms existing content, rough ideas, personal knowledge and expertise into highly personalized, visually rich digital publications.

Instead of generating generic AI-written ebooks, Flivix learns how creators communicate, organizes their knowledge, researches their ideas and transforms them into professionally designed, illustrated ebooks that reflect their unique perspective and voice.

> Dump your thoughts. Let your knowledge take shape.

---

## The Idea

Thousands of educational content creators already have valuable knowledge distributed across YouTube videos, blogs, scripts, social media posts, research materials and personal notes.

They have an audience. They have expertise. They have ideas worth sharing.

But turning that knowledge into a professionally written, researched and designed digital publication requires considerable time, writing expertise and design skills.

Flivix aims to bridge that gap.

Creators provide their existing content and rough ideas. Flivix builds a persistent digital representation of their knowledge, writing style and preferences, then uses specialized AI workflows to transform their ideas into concise, engaging and visually compelling publications.

**The goal isn't to generate another generic ebook. It's to help creators publish something that genuinely feels like their work.**

## Who is Flivix for?

Flivix is primarily designed for independent educational and informational content creators, particularly those with established niche audiences.

Some of the intended creator categories include:

- **Health & Wellness:** Nutrition educators, fitness creators and wellness coaches.
- **Science & Education:** Physics educators, science communicators and independent teachers.
- **Relationships & Parenting:** Relationship coaches, marriage educators and parenting creators.
- **Food & Cooking:** Chefs, cooking educators and culinary content creators.
- **Dental & Healthcare Education:** Professionals creating educational and awareness content.
- **Personal Development:** Productivity educators, self-improvement creators and coaches.

Flivix is particularly interested in helping emerging and mid-sized creators turn their existing audience trust and intellectual work into independent digital products.

---

## Core Features

### 1. Knowledge Ingestion

Creators shouldn't have to start from a blank page.

Flivix provides a workspace where users can contribute their existing knowledge and ideas in their original, unstructured forms.

- Upload existing documents and resources.
- Provide raw thoughts and rough ideas.
- Import blog posts, scripts and written content.
- Extract and organize information from uploaded documents.
- Maintain a reusable personal knowledge collection.

**Supported initial formats:** PDF, DOCX and TXT, alongside direct text input.

### 2. Digital Persona

Every creator has a distinctive way of explaining things, communicating ideas and approaching their subject.

Flivix builds a structured digital persona from the creator's existing content.

The persona can capture:

- Writing style and communication patterns.
- Preferred tone and vocabulary.
- Subject expertise and knowledge domains.
- Common perspectives and viewpoints.
- Content and formatting preferences.
- Intended audience and complexity level.

The persona is persisted and reused across future generations, allowing publications to maintain a consistent creator identity.

Creators can review and update their persona as their knowledge and preferences evolve.

### 3. Agentic Ebook Generation

Flivix uses a coordinated AI workflow to transform rough ideas into structured digital publications.

Rather than relying on a single prompt to generate an entire book, the generation process is divided into specialized stages.

| Agent / Stage | Responsibility |
|---|---|
| Idea Architect | Refines rough ideas and proposes titles and positioning. |
| Editorial Planner | Develops the publication's scope, audience and chapter structure. |
| Editorial Guardian | Establishes content boundaries, requirements and quality criteria. |
| Research Agent | Investigates relevant topics and collects supporting sources. |
| Writing Agent | Produces structured chapters using creator knowledge and research. |
| Art Direction Agent | Establishes the visual identity, typography and design tokens. |
| Design Agent | Composes publication layouts and visual elements. |
| Quality Agent | Reviews content consistency, accuracy, completeness and presentation. |

These are logical responsibilities within a coordinated workflow, not necessarily independent services.

### 4. Human-in-the-Loop Workflow

AI-generated content should not automatically become a published product.

Flivix incorporates human approval checkpoints throughout the generation process.

Creators can:

- Review and approve proposed ideas.
- Modify chapter outlines.
- Provide additional context.
- Request revisions.
- Correct research and content.
- Approve the final publication.

The workflow can pause at approval checkpoints, preserve its state and resume after receiving creator feedback.

### 5. Visual Publication Engine

Flivix treats visual presentation as an essential part of educational publishing.

Publications are designed to be more than plain text placed on white pages.

The visual composition engine aims to support:

- Custom editorial illustrations.
- SVG diagrams and vector graphics.
- Infographics and data visualizations.
- Comparison cards.
- Process diagrams and timelines.
- Highlighted insights and statistics.
- Custom typography systems.
- Chapter illustrations and visual summaries.

The rendering system combines structured content, reusable visual components, HTML, CSS, SVG and generated imagery to produce cohesive publication layouts.

### 6. Design Studio

Creators can customize the appearance of their publications before publishing.

- Multiple predefined design themes.
- Theme-specific CSS variables.
- Typography and color customization.
- Editable chapter content.
- AI-assisted content revisions.
- Live publication preview.

The initial release focuses on a small collection of carefully designed themes rather than unrestricted page design.

### 7. Real-Time Generation Updates

Ebook generation can involve multiple long-running research, writing and design operations.

Flivix aims to provide a live generation experience through WebSockets.

Creators can see:

- Current workflow stage.
- Completed generation stages.
- Current processing status.
- User-facing progress updates.
- Generation failures and retry status.
- Completion notifications.

The workflow remains persistent, allowing users to return to their projects without losing their generation progress.

### 8. PDF Publishing

Once a creator approves the publication, Flivix renders the final ebook.

The publishing pipeline uses HTML and CSS layouts to produce a consistent PDF containing:

- Professionally designed covers.
- Chapter structures.
- Custom illustrations and graphics.
- Typography and color themes.
- Page numbers and publication formatting.

The final PDF is stored and made available for download.

**Initial publication target: approximately 10–40 pages**, depending on the topic, content depth and intended reading experience.

---

## How It Works

```text
          CREATOR
             |
             v
     Knowledge Ingestion
             |
             v
       Digital Persona
             |
             v
       Raw Idea Input
             |
             v
      Idea Refinement
             |
             v
      Editorial Planning
             |
             v
       Human Approval
             |
             v
          Research
             |
             v
       Content Drafting
             |
             v
       Human Approval
             |
             v
       Visual Direction
             |
             v
     Design Composition
             |
             v
       Quality Review
             |
             v
       Creator Approval
             |
             v
       Publication Editor
             |
             v
         PDF Export
```

The workflow is designed to be stateful, checkpointed and resumable, rather than a sequence of disconnected LLM calls.

---

## Technical Architecture

Flivix follows a modular monolithic architecture with a dedicated AI orchestration layer.

The initial architecture separates product APIs, background processing, agent execution, real-time communication and publication rendering.

### Technology Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js, TypeScript |
| UI Components | shadcn/ui |
| Styling | Tailwind CSS |
| State Management | Zustand |
| Backend | Python, Django |
| API Layer | Django REST Framework |
| AI Integration | LangChain |
| Agent Orchestration | LangGraph |
| Background Tasks | Celery |
| Message Broker | Redis |
| Real-Time Communication | Django Channels, WebSockets |
| Database | PostgreSQL |
| Vector Search | pgvector |
| Document Processing | Python document extraction libraries |
| Publication Rendering | HTML, CSS, SVG, Playwright |
| File Storage | S3-compatible object storage |

### High-Level Architecture

```text
                  NEXT.JS FRONTEND
                         |
              REST API / WEBSOCKETS
                         |
                         v
                 DJANGO + DRF
                         |
             -----------------------
             |          |          |
             v          v          v
         PostgreSQL   Redis    File Storage
                        |
                        v
                  CELERY WORKERS
                        |
                        v
                  LANGGRAPH
                        |
          ---------------------------
          |       |        |        |
          v       v        v        v
        Idea   Research  Writing  Design
          |       |        |        |
          ---------------------------
                        |
                        v
                  QUALITY REVIEW
                        |
                        v
                HUMAN APPROVAL
                        |
                        v
                HTML/CSS RENDERER
                        |
                        v
                   PLAYWRIGHT
                        |
                        v
                    PDF EXPORT
```

### Architectural Principles

- **Modular monolith:** Keep the initial system manageable without introducing unnecessary microservices.
- **Persistent workflows:** Store generation state and checkpoints so interrupted workflows can resume.
- **Structured agent outputs:** Use validated schemas for outlines, chapters, design specifications and review results.
- **Asynchronous processing:** Run expensive document processing and generation outside HTTP request-response cycles.
- **Source traceability:** Preserve research references and associate generated claims with their supporting sources.
- **Versioned artifacts:** Maintain distinct versions of generated content, designs and publication snapshots.
- **Deterministic rendering:** Render approved content using controlled templates and themes.

---

## Project Structure

An initial proposed repository structure:

```text
flivix/
│
├── backend/
│   ├── config/
│   │   ├── settings/
│   │   ├── urls.py
│   │   ├── asgi.py
│   │   └── celery.py
│   │
│   ├── apps/
│   │   ├── accounts/
│   │   ├── projects/
│   │   ├── knowledge/
│   │   ├── personas/
│   │   ├── ebooks/
│   │   ├── generation/
│   │   ├── publishing/
│   │   └── realtime/
│   │
│   ├── ai/
│   │   ├── graphs/
│   │   ├── nodes/
│   │   ├── prompts/
│   │   ├── tools/
│   │   └── schemas/
│   │
│   ├── templates/
│   └── manage.py
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── stores/
│   └── styles/
│
├── docs/
│
└── README.md
```

---

## Development Roadmap

The initial development target is a seven-day MVP.

| Day | Focus | Expected Outcome |
|---|---|---|
| 01 | Foundation | Authentication, project management and database setup |
| 02 | Knowledge | Document ingestion, extraction and persona generation |
| 03 | Orchestration | LangGraph workflow, idea refinement and editorial planning |
| 04 | Generation | Research, chapter writing and quality review |
| 05 | Real-time | Celery execution, Redis and WebSocket progress |
| 06 | Design | Visual components, themes, editor and preview |
| 07 | Publishing | PDF generation, integration testing and deployment |

The first release prioritizes one complete creator journey over an unnecessarily large collection of features.

---

## Product Philosophy

Flivix is built around a few principles:

**Creator identity matters.** Publications should reflect the creator's knowledge, perspective and communication style.

**Knowledge should be reusable.** Existing content should become a foundation for future digital products, not something creators repeatedly upload and explain.

**Visual communication matters.** Educational content should be designed to make information easier to understand, remember and apply.

**AI should assist, not replace judgment.** Creators should remain involved in important editorial decisions and final publication approval.

**Quality over volume.** A concise, well-researched and beautifully designed 20-page publication is more valuable than an unnecessarily long, generic ebook.

---

## Current Status

🚧 **Early-stage development**

Flivix is currently being developed as a seven-day MVP experiment.

The initial focus is on building the complete pipeline:

Knowledge Ingestion → Digital Persona → Agentic Generation → Visual Composition → Human Review → PDF Publishing.

Features and architectural decisions may evolve as development progresses.

---

## Future Possibilities

Potential directions beyond the initial MVP:

- YouTube channel and social content ingestion.
- Automatic content repurposing.
- Multiple digital personas.
- Creator-specific publication libraries.
- Advanced memory and knowledge management.
- More sophisticated visual generation.
- Multiple publication formats.
- Creator storefronts and digital product distribution.
- Sales analytics and monetization integrations.

---

## Building Flivix

Flivix is an exploration of agentic AI systems, persistent knowledge, workflow orchestration and automated visual publishing.

The central question behind the project:

**What if creators could turn everything they've learned, taught and shared into a beautifully designed publication without having to become writers, researchers and designers themselves?**

That's what we're trying to build.

---

*Flivix — Your knowledge deserves more than a social media post.*
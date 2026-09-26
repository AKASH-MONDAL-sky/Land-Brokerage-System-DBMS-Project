# ScholarGrid — Project Progress

## Project Status

**Project:** ScholarGrid  
**Current Focus:** Layer 7 — Developer Tools & Algorithmic Integration  
**Status:** 🟡 Implemented / Requires Full Runtime & E2E Verification

---

## Layer 7 Features

### 1. Drop-In REST API Node
**Status:** 🟢 Implemented

- Formula validation is available.
- Formulas can be registered.
- API Nodes can be created from formulas.
- Nodes have unique execution endpoints.
- JSON variables can be submitted for execution.
- Sandbox execution is implemented.
- Execution history is stored in PostgreSQL.
- Rust sandbox is included in the project.
- Frontend UI is available under `/formulas` and `/nodes`.

**Verification:** Static code review completed. Full production E2E test still required.

---

### 2. Git-Integrated Code Linker
**Status:** 🟢 Implemented

- Git repositories can be registered.
- Repository access tokens are supported.
- Tokens are encrypted when the production encryption key is configured.
- Manuscript sections can be linked to:
  - Repository
  - File path
  - Start line
  - End line
  - Commit SHA
  - Target type
  - Target reference
  - Description
- Code-link verification is implemented.
- Linked code can be fetched from GitHub.
- PDF ↔ Code audit navigation is available.
- Frontend UI is available under `/git` and `/manuscripts`.

**Verification:** Static code review completed. Live GitHub/E2E verification still required.

---

### 3. Double-Blind Manuscript Diff Engine
**Status:** 🟡 Partially Implemented

Implemented:

- Unified manuscript diff.
- Structured manuscript diff.
- PDF structural diff.
- Metadata/text scrubbing.
- Double-blind related quality tools.
- Frontend controls under `/quality`.

Limitations to verify:

- Structured diff is not a full semantic manuscript comparison.
- PDF structural comparison focuses on measurable document properties rather than complete visual/semantic equivalence.
- Full blind-review workflow should be E2E tested.

---

### 4. BibTeX / LaTeX Citation Validator
**Status:** 🟡 Implemented / Needs Deeper Validation

Implemented:

- BibTeX validation.
- Citation validation.
- DOI validation support.
- arXiv/URL validation support.
- Citation cross-validation.
- Validation reports.
- Frontend quality interface.

Database support includes:

- `bibliography_references`
- `citations`
- `citation_validation_reports`

**Important:** PostgreSQL reserved-word issue was fixed by using `bibliography_references` instead of `references`.

---

### 5. Publisher Compliance Check
**Status:** 🟢 Mostly Implemented

Implemented with PyMuPDF:

- PDF page count.
- Word count.
- Page geometry.
- Margin checks.
- Font analysis.
- Image analysis / DPI checks.
- Column/layout-related checks.
- Publisher compliance report.
- PDF-specific compliance endpoint.
- Frontend interface under `/quality`.

**Verification:** Static implementation reviewed. Real sample-PDF E2E testing is still required.

---

# Frontend Progress

## Layer 7 Routes

| Route | Purpose | Status |
|---|---|---|
| `/formulas` | Formula validation & registration | 🟢 |
| `/nodes` | API Node creation & execution | 🟢 |
| `/git` | Git repositories & Code Linker | 🟢 |
| `/manuscripts` | Manuscript upload & PDF ↔ Code audit | 🟢 |
| `/quality` | Diff, Citation, Compliance, Scrub | 🟢 |

The frontend is connected to the FastAPI backend and contains dedicated UI for the major Layer 7 features.

---

# Backend Progress

## Python FastAPI

Implemented routers:

- Authentication
- Projects
- Manuscripts
- Formulas
- Nodes
- Git
- Quality
- Math
- Health

## Node.js Worker

- Express
- BullMQ
- Redis/Valkey queue
- Background PDF/compliance processing

## Rust Sandbox

- Rust sandbox project included.
- Release binary can be built with Cargo.
- Python sandbox executor can use the Rust binary.
- Mock fallback exists for development when the binary is unavailable.

---

# Database Progress

PostgreSQL + pgvector schema includes:

- `users`
- `research_projects`
- `manuscripts`
- `manuscript_versions`
- `formulas`
- `api_nodes`
- `api_executions`
- `bibliography_references`
- `citations`
- `citation_validation_reports`
- `git_repositories`
- `code_links`
- `publisher_templates`
- `compliance_checks`
- `processing_jobs`
- `document_chunks`
- `math_evaluator_states`

Supporting extensions:

- `uuid-ossp`
- `vector`
- `pg_trgm`

---

# Storage & Infrastructure

Implemented:

- PostgreSQL 16 + pgvector
- Valkey/Redis
- MinIO S3-compatible object storage
- FastAPI backend
- Node.js worker
- Next.js frontend
- Rust sandbox

Docker Compose configuration is included.

---

# Security / Production Notes

Before production deployment:

- Change the development JWT secret.
- Set a strong PostgreSQL password.
- Set a strong MinIO password.
- Configure a strong `ENCRYPTION_KEY`.
- Keep `ALLOW_MOCK_SANDBOX=false`.
- Use production environment configuration.
- Do not use development credentials in production.
- Verify Git token encryption.
- Verify authentication and ownership checks through E2E tests.

---

# Testing Status

## Static Review
**Status:** 🟢 Completed

The project structure, frontend routes, backend routes, database schema, Layer 7 components, and major feature implementations have been inspected.

## Runtime Testing
**Status:** 🟡 Pending

A complete Docker-based runtime test has not yet been performed in the review environment.

## Existing Smoke Test
The project contains:

`scripts/smoke-layer7.sh`

It checks several important endpoints/features including:

- Health
- Database readiness
- Structured diff
- Unified diff
- BibTeX validation
- Formula validation
- Unsafe formula rejection

It does not fully cover every Layer 7 feature.

---

# Remaining Work

## High Priority

- [ ] Start complete Docker environment.
- [ ] Run database initialization.
- [ ] Start FastAPI backend.
- [ ] Start Node/BullMQ worker.
- [ ] Start frontend.
- [ ] Build and test Rust sandbox.
- [ ] Run Layer 7 smoke tests.
- [ ] Test complete frontend → backend → database flow.
- [ ] Test PDF upload and MinIO storage.
- [ ] Test API Node execution with real Rust sandbox.
- [ ] Test GitHub Code Linker with a real repository.
- [ ] Test publisher compliance using real PDFs.
- [ ] Test citation/BibTeX validation with real bibliography data.
- [ ] Test double-blind scrubbing and manuscript diff end-to-end.

---

# Current Overall Assessment

| Area | Status |
|---|---|
| Layer 7 feature presence | 🟢 |
| Frontend UI | 🟢 |
| FastAPI backend | 🟢 |
| Database schema | 🟢 |
| Git Code Linker | 🟢 |
| REST API Nodes | 🟢 |
| Publisher Compliance | 🟢 |
| Citation Validator | 🟡 |
| Double-Blind Diff | 🟡 |
| Runtime E2E verification | 🟡 |
| Production hardening | 🟡 |

**Overall:** The current codebase contains the requested Layer 7 features and corresponding frontend/backend components. The next major step is **full runtime and end-to-end verification**, rather than adding the basic feature structure.

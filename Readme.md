ScholarGrid Layer 7 – Full Backend (Complete)

Hybrid modern backend that implements all original ScholarGrid features + new capabilities.

Tech Stack

Layer| Technology
Main API| FastAPI + PyMuPDF + SQLAlchemy async
Background Jobs| Node.js + Express + BullMQ
Database| PostgreSQL 16 + pgvector
Queue / Cache| Valkey (Redis)
Object Storage| MinIO (S3)

All Features (Complete)

From Original ScholarGrid

- ✅ User Auth (JWT register / login / me)
- ✅ Research Projects CRUD
- ✅ Manuscripts (upload, versioning support)
- ✅ Formulas – create, validate, list
- ✅ API Nodes – create from formula, execute via sandbox
- ✅ Citations validation (DOI, arXiv, URL)
- ✅ Manuscript Diff (unified + structured)
- ✅ Publisher Compliance checks
- ✅ Git Repositories + Code Links

New / Enhanced

- ✅ PyMuPDF – real PDF page/word count, text, margins, images
- ✅ BullMQ background jobs for heavy PDF processing
- ✅ pgvector – embedding columns ready for semantic search / RAG
- ✅ Async Python stack
- ✅ MinIO file storage

Quick Start

Recommended (one command installs everything):

./scripts/setup.sh
./scripts/verify-env.sh

Or step by step:

# 1. Infrastructure only
docker compose up -d postgres redis minio

# 2. Python API
cd backend-python
python3 -m venv .venv && source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
python -c "import asyncpg, fastapi, fitz"
cp -n .env.example .env
uvicorn app.main:app --reload --port 8000

# 3. Node Worker
cd ../backend-node
npm install && cp -n .env.example .env
npm start

# 4. Frontend
cd ../frontend
npm install && npm run dev

URL| Service
http://localhost:3000| Frontend
http://localhost:8000/docs| API docs
http://localhost:4000| Node worker
http://localhost:9001| MinIO console

"make setup" / "make verify" / "make api" / "make worker" / "make frontend" are also available.

API Overview

Prefix| Features
"/api/v1/auth"| register, login, me
"/api/v1/projects"| CRUD projects
"/api/v1/manuscripts"| upload PDF, list, get, trigger analysis
"/api/v1/formulas"| validate, create, list by manuscript
"/api/v1/nodes"| create, list, execute (sandbox)
"/api/v1/quality"| diff, citations/validate, publisher/check
"/api/v1/git"| repos + code links
Node ":4000/jobs"| enqueue PDF / compliance jobs, job status

Project Structure

scholargrid-full/
├── docker-compose.yml
├── database/init.sql
├── backend-python/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── models/
│   │   ├── services/
│   │   └── main.py
│   └── requirements.txt
└── backend-node/

Rust Sandbox (Layer 7 Drop-In Node)

Safe algebraic evaluator used by APIvdvhdvssxdhfhf Nodes.

cd sandbox-rust
cargo build --release

Binary:

sandbox-rust/target/release/scholargrid-sandbox

Python automatically detects the binary.

Override with:

export SCHOLARGRID_SANDBOX_BIN=/absolute/path/to/scholargrid-sandbox

Test:

echo '{"expression":"2*x+1","variables":{"x":10}}' | ./sandbox-rust/target/release/scholargrid-sandbox

If the binary is absent, the Python mock fallback is used automatically.

Frontend (Layer 7 Workable UI)

cd frontend
cp .env.example .env.local
npm install
npm run dev

Frontend:

http://localhost:3000

Connects to FastAPI on port "8000".

Includes:

- Drop-In Nodes execute UI
- Formulas
- Git Code Linker
- Quality Suite (Diff, BibTeX, Compliance)
- Math Evaluator (state_data)
- Projects & Manuscripts upload

Tests (P2)

cd backend-python
./scripts/run_tests.sh

Or:

export PYTHONPATH=.
pytest tests/ -q

Tests cover:

- Sandbox policy
- Citation validator
- Scrubber
- Diff
- Health
- Structured errors
- Layer-7 chain (when DB is up)

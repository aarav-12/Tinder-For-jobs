Tinder for Jobs 🔥💼

A swipe-based hiring platform that cuts hiring spam by allowing applications only after mutual interest between candidates and recruiters.

Why this exists

Traditional job portals are broken:

Candidates spam-apply

Recruiters filter endlessly

No clear intent → ghosting everywhere

This fixes that by introducing swiping + intent + skill matching.

Core Idea

Candidates and recruiters swipe instead of apply

Skills and intent are visible before swiping

AI shows a match signal (not a decision)

Only mutual right swipe unlocks applying

No match = no application = no spam.

User Roles
👩‍💻 Candidate

Sign up & authenticate

Complete profile (skills, intent, resume)

View job cards with match signal

Swipe left / right

Apply only after match

🧑‍💼 Jobs
job postings

Define required skills(JD)

How the System Works
1️⃣ Authentication & Profile Gate
User Signup/Login
      ↓
Authentication
      ↓
Profile Creation
      ↓
Profile Complete?
   YES → Swipe Enabled
   NO  → Block Swiping


Rule: No profile, no swiping.

2️⃣ Resume & JD Matching (AI-assisted)
Candidate uploads resume
        ↓
Resume parsing (skills extracted)
        ↓
Job description skill matching
        ↓
Match signal generated


Displayed as:

Match Confidence (e.g. 76%)

Skill Overlap (High / Medium / Low)

⚠️ AI does not auto-match or auto-swipe.

3️⃣ Swipe → Match Flow
User swipes RIGHT
      ↓
Swipe stored
      ↓
Check opposite swipe
      ↓
Mutual RIGHT?
   YES → Match created → Apply unlocked
   NO  → Continue swiping


Swipe LEFT = gone forever.

Swipe Rules (V1)

Swipe Right → shows interest

Swipe Left → never shown again

No undo

No super-like

No chat without match

Strict rules keep the system clean.

Core Data Models (High Level)
User
 ├─ CandidateProfile (skills, intent, resume)
 └─ JobProfile (company)

Job
 └─ required_skills

Swipe
 └─ left | right

Match
 └─ candidate_id + job_id


Simple, intentional, scalable.

Tech Stack

Frontend

Next.js

Tailwind CSS

shadcn/ui

Backend

Node.js

REST APIs

Database

PostgreSQL

Prisma ORM

Auth

NextAuth / Clerk

AI

Resume parsing

Skill extraction

JD matching

Match score generation

Infra

Vercel

Managed PostgreSQL

What’s NOT in V1 (on purpose)

Chat system

Admin dashboards

Recommendation engine

Payments



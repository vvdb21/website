# Instructions: Update Internship Scanner Project Page

**File to edit:** `app/projects/internship-bot/page.tsx` (or whichever file renders the route `/projects/internship-bot`)

**Task:** Replace the existing page body content with the updated structure and copy below. Keep the existing site layout, navigation, header/footer, and tag/badge components — only the page body content changes.

---

## Page Metadata

- **Title:** Internship Scanner
- **Tags:** `Python` · `Google Cloud Functions` · `Telegram API` · `Perplexity API`
- **Category:** Coding
- **Status:** `Active` *(change from current "Completed")*
- **Institution:** Independent Project

---

## Images

The existing three images should be retained in their current positions as described below. No new images are required.

| Image file | Where it appears |
|---|---|
| `Internship bot.jpeg` | Hero image at top of page |
| `database.jpeg` | In the "Data & Storage" section |
| `telegram.jpeg` | In the "System Architecture" section |
| `internship prompt.png` | In the "Scanning Engine" section |

---

## Page Structure & Content

Implement the following sections in order. Use the existing site's component/styling conventions.

---

### 1. Back Link
Retain the existing "← Back to Projects" link at the top.

---

### 2. Page Header

**Heading (h1):**
> Internship Scanner

**Tag row:** `Python` · `Google Cloud Functions` · `Telegram API` · `Perplexity API`

**Status badge:** `Active`

---

### 3. Introduction paragraph

> A fully automated, cloud-native pipeline that continuously scans the web for finance, consulting, and aerospace engineering internship opportunities across eight European countries — with a deliberate focus on boutique and lesser-known firms where competition is lower. Built on Google Cloud Functions with Perplexity AI search and a Telegram bot interface, the system has surfaced over 200 opportunities since launch at a total infrastructure cost of $0.82.

---

### 4. Stats Row

Display these three figures prominently as a row of stat cards (matching the style used on the FSOC page if that convention exists, otherwise use a simple highlighted row):

- **200+** internships found
- **8** countries covered
- **$0.82** total cost since March 2025

---

### 5. Project Overview

**Section heading:** Project Overview

**Body text:**

> Manual internship hunting is slow, repetitive, and biased towards well-known firms — because those are the ones that show up in generic searches. This project replaces that process with an intelligent monitoring system that runs continuously in the background, proactively identifying and delivering relevant opportunities without any manual effort.
>
> The bot covers management consulting, strategy consulting, investment banking, asset management, private equity, venture capital, hedge funds, and aerospace engineering roles across the UK, Belgium, Netherlands, France, Germany, Spain, Switzerland, and Italy. It targets penultimate-year undergraduate positions specifically, and deliberately prioritises boutique and SME firms alongside household names — the ones that are often overlooked but are significantly less competitive to apply to.

---

### 6. System Architecture

**Section heading:** System Architecture

**Insert image:** `telegram.jpeg`
**Caption:** *The Telegram bot interface — users receive alerts and interact with the system entirely from their phones.*

**Body text:**

> The system follows a modular, serverless design built on Google Cloud Functions. Five discrete endpoints handle different parts of the pipeline:
>
> - **`/scan`** — the core scheduled function, triggered every three days by Cloud Scheduler. It queries the Perplexity AI API to search for new internship opportunities across the target sectors and geographies, processes the results, deduplicates against the existing database, and pushes alerts to all subscribers via Telegram.
> - **`/scan_firms`** — an admin-triggered endpoint used at the start of each internship cycle to seed the database with opportunities from specific named firms. This bulk-seeds well-known large firms upfront, so that subsequent scheduled scans can focus on surfacing boutique and lesser-known opportunities not already in the system.
> - **`/reply`** — handles all inbound Telegram messages. Users reply YES or NO to each alert to save or dismiss an opportunity, type APPLIED to retrieve their full saved list, and LEAVE or JOIN to manage their subscription.
> - **`/remind`** — checks the database daily and sends personalised opening date reminders to relevant subscribers, both one week before and on the day an application window opens.
> - **`/broadcast`** — an admin endpoint for sending a manual message to all subscribers.
>
> All endpoints are secured with environment variables. The entire system runs idle between scheduled triggers, keeping infrastructure costs near zero.

---

### 7. Scanning Engine

**Section heading:** Scanning Engine

**Insert image:** `internship prompt.png`
**Caption:** *The structured prompt sent to Perplexity AI on each scan cycle, requesting a strict JSON response with all required opportunity fields.*

**Body text:**

> Each scan queries Perplexity AI's `sonar-pro` model with a structured prompt that requests a strict JSON response — no markdown, no preamble. The prompt specifies the target sectors, geographies, firm sizes, degree level, and year group, and instructs the model to source directly from company career pages, LinkedIn, Glassdoor, and Indeed. The system prompt enforces JSON-only output, and the response is parsed and validated before any data is written.
>
> Each opportunity is returned with: firm name, role title, CV and cover letter requirements, application open and close dates, a direct URL to the application page, location, and firm size classification (large / boutique / SME).

---

### 8. Deduplication & Data Storage

**Section heading:** Deduplication & Data Storage

**Insert image:** `database.jpeg`
**Caption:** *The Google Sheets backend, which serves as both the opportunity database and the admin dashboard.*

**Body text:**

> Because the system scans every three days, it frequently encounters listings that were already found in a previous cycle. A deduplication layer checks every incoming result against the full history of recorded entries in the Google Sheets database, matching on firm name and role title. Only genuinely new opportunities trigger a Telegram alert and a new database row.
>
> Google Sheets serves as the persistent backend — storing opportunity IDs, firm and role details, application requirements, dates, URLs, firm size, status, and a per-opportunity record of which subscribers have saved it. This doubles as a lightweight admin dashboard, giving a live view of everything the system has found.

---

### 9. Future Improvements

**Section heading:** Future Improvements

**Render as a bulleted list:**

- **Intelligent fit filtering:** Integrating NLP to score job descriptions against a target profile, allowing the system to rank and filter opportunities by cultural or technical fit before sending alerts.
- **Custom web dashboard:** Replacing the Google Sheets interface with a purpose-built dashboard offering application funnel analytics and deadline visualisation.
- **Expanded scope:** Extending the search parameters to cover graduate schemes and entry-level full-time roles, making the system useful beyond the internship lifecycle.
- **Improved reliability:** Adding structured logging and error handling to provide proactive monitoring and automatic recovery from failed API calls or sync interruptions.

---

### 10. Project Details Sidebar (or footer block)

Update as follows:

| Field | Value |
|---|---|
| Technologies | Python, Google Cloud Functions, Telegram API, Perplexity API |
| Category | Coding |
| Status | Active |
| Institution | Independent Project |
| GitHub | Link to Viktor's GitHub profile (https://github.com/vvdb21) |

---

## Notes for the Agent

- Change the status badge from `Completed` to `Active`.
- The GitHub link currently mentioned in "Key Features" as plain text ("Code on my GitHub") should be replaced with a proper hyperlink to `https://github.com/vvdb21` in the Project Details block. Remove the plain-text mention from the features list.
- The three stat figures (200+ internships, 8 countries, $0.82) should be displayed prominently — ideally as visual stat cards rather than buried in prose.
- The "Key Features" bullet list from the current page is being replaced by the more detailed section structure above. Do not retain the old bullet list.
- Keep the page responsive; the Telegram and database screenshots should scale appropriately on mobile.

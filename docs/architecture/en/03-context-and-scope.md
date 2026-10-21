---
chapter: 3
title: Context and Scope
---

# 3 Context and Scope

> TODO (Phase 2): C4 level 1 context diagram (visitor, website, hosting provider, GitHub). The notation (Mermaid C4 syntax or flowchart with C4 conventions) is decided before the first diagram, see ADR-0001.

## Business Context

| Partner         | Exchange                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------- |
| Invited visitor | Opens the invitation link, reads content, downloads the CV                                        |
| Max Brinkema    | Creates invitation links with the invite CLI, maintains content in the private content repository |

## Technical Context

| Partner                                 | Channel             | Purpose                                                |
| --------------------------------------- | ------------------- | ------------------------------------------------------ |
| Browser of the visitor                  | HTTPS               | Pages, session cookie                                  |
| GitHub                                  | Git, GitHub Actions | Code and content repositories, CI, deploy              |
| Hosting provider (proposal: Cloudflare) | Deploy API          | Hosting, secrets, denylist storage; decided in Phase 2 |

---
chapter: 2
title: Architecture Constraints
---

# 2 Architecture Constraints

| Constraint                   | Background                                           | Consequence                                                                                                                                                        |
| ---------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Not discoverable             | The site is meant only for people who receive a link | Real server-side auth as the only boundary; `X-Robots-Tag: noindex, nofollow` on all routes; protected paths not listed in `robots.txt`                            |
| NDA                          | Client projects are subject to NDAs                  | Case studies only anonymized and abstracted: no client names, screenshots, code or identifying numbers. Release per case study by the employer or legal department |
| Costs near zero              | Private project                                      | No CMS, free-tier hosting                                                                                                                                          |
| Rare changes                 | Content changes rarely                               | Maintenance directly in the private content repository, no editor UI                                                                                               |
| No analytics                 | Privacy and trust                                    | No tracking, no third-party scripts or fonts                                                                                                                       |
| Public code, private content | The code is part of the showcase                     | Separate repositories (ADR-0006); the code repository builds with example content only                                                                             |
| Bilingual                    | German and English audience                          | Every text, page, ADR and arc42 chapter exists in both languages                                                                                                   |
| AI-assisted development      | Large parts are implemented by a coding agent        | Guardrails and sensors in the repository (`AGENTS.md`, `.claude/settings.json`, ruleset on `main`, `pnpm verify`)                                                  |

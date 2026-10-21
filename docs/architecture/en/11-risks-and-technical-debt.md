---
chapter: 11
title: Risks and Technical Debt
---

# 11 Risks and Technical Debt

> TODO (Phase 7): threat model (STRIDE light). For each threat: countermeasure and, where possible, the test that secures it. The threat model names measures, never secrets or key details.

## Known Risks

| Risk                                     | Handling                                                                         |
| ---------------------------------------- | -------------------------------------------------------------------------------- |
| Forwarded invitation link                | Accepted residual risk, limited by short lifetimes and revocation via a denylist |
| NDA breach through identifying details   | Anonymization and release per case study before publication                      |
| Leaked root secret                       | Emergency runbook: rotate the root secret, redeploy, re-invite recipients        |
| Compromised dependency                   | Pinned versions and actions, frozen lockfile, Renovate, scheduled audit          |
| Vendor lock-in with the hosting provider | Exit strategy in the hosting ADR (Phase 2)                                       |

## Technical Debt

| Item                                                   | Background                                          |
| ------------------------------------------------------ | --------------------------------------------------- |
| Two ways to draw diagrams (Mermaid and hand-built SVG) | See ADR-0001; a better approach is an open decision |
| Font license texts missing next to the font files      | To be added from the official sources in Phase 4    |

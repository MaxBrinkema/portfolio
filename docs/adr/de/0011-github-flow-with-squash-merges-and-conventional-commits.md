---
number: 11
title: GitHub Flow mit Squash-Merges und Conventional Commits nutzen
summary: main plus kurzlebige PR-Branches ohne dev-Branch; nur Squash-Merges; Conventional Commits mit Pflicht-Scope.
area: Workflow
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# GitHub Flow mit Squash-Merges und Conventional Commits nutzen

## Kontext und Problemstellung

Änderungen sind selten und kommen überwiegend von einer Person, die mit einem Coding Agent arbeitet. Der Agent legt Branches an, committet und erstellt Pull Requests; nur der Betreiber reviewt und mergt. Welches Branching-Modell und welche Commit-Konventionen nutzen wir?

## Entscheidungstreiber

- Seltene Änderungen, keine parallelen Release-Stränge
- Jede Änderung wird geprüft, bevor sie `main` erreicht
- Eine lesbare Historie auf `main`
- Der Agent darf weder mergen noch auf `main` pushen

## Betrachtete Optionen

- GitHub Flow (`main` plus PR-Branches)
- Git Flow mit einem `dev`-Branch als Staging
- Trunk-based Development mit direkten Commits auf `main`

## Entscheidung

Gewählte Option: „GitHub Flow“, weil seltene Änderungen und ein geschütztes Preview pro Pull Request einen Staging-Branch überflüssig machen.

- Branch-Namen `feat/…`, `fix/…`, `docs/…`, `refactor/…`, `chore/…`, `ci/…`; kurz, englisch, kebab-case.
- Jede Änderung läuft über einen Pull Request nach `main`, gemergt ausschließlich per Squash; der PR-Titel wird zum Commit auf `main`.
- Conventional Commits `type(scope): subject` mit Pflicht-Scope; Typen und Scopes stehen in `commitlint.config.ts`.
- Atomare Commits auf dem Branch, Tests im selben Commit.
- Rollen: Der Betreiber reviewt und mergt; der Agent legt Branches an, committet und erstellt Pull Requests, mergt aber nie.

### Konsequenzen

- Gut, weil `main` immer deploybar ist und einen Commit pro Pull Request hat.
- Gut, weil Commit-Typen und Scopes die Historie durchsuchbar machen.
- Schlecht, weil größere Änderungen auf mehrere Pull Requests aufgeteilt werden müssen.

### Bestätigung

- Ruleset auf `main`: Pull Request Pflicht, Pflicht-Checks `Verify` und `Conventional commits`, nur Squash, kein Force-Push, keine Löschung, keine Ausnahmen (aktiv seit Phase 1).
- commitlint als `commit-msg`-Hook und in der CI für den PR-Titel und jeden Commit des PRs (aktiv seit Phase 1).
- `.claude/settings.json` verbietet dem Agent Merges und Pushes auf `main`; das ist eine Leitplanke, die eigentliche Grenze ist das Ruleset (aktiv seit Phase 1).

## Vor- und Nachteile der Optionen

### GitHub Flow

- Gut, weil es das einfachste Modell ist, das trotzdem alles prüft.
- Schlecht, weil es keinen Ort gibt, um mehrere Features für ein gemeinsames Release zu bündeln.

### Git Flow mit `dev`-Branch

- Gut, weil sich Releases bündeln und gemeinsam testen lassen.
- Schlecht, weil ein weiterer Branch gepflegt werden muss, ohne dass es bei dieser Änderungsrate einen Bedarf gibt.

### Trunk-based mit direkten Commits

- Gut, weil der Aufwand am geringsten ist.
- Schlecht, weil Änderungen ohne Review und Checks auf `main` landen würden. Das widerspricht der Kontrolle über Agent-Output.

## Weitere Informationen

Neu bewerten, wenn mehrere Features parallel entstehen oder Releases gebündelt werden sollen; dann `dev` als Staging-Branch einführen.

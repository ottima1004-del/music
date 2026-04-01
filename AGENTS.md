# AGENTS

## Working Context

- The developer son set up this repository, but the primary future user is a non-developer father.
- Optimize the project for ease of use, clarity, and low-maintenance workflows for a non-technical user.
- Prefer simple commands, safe defaults, clear labels, and minimal manual steps.
- Respect existing setup choices unless there is a clear usability or maintenance reason to change them.
- When changing setup or workflow, explain the change plainly and document exactly how the father should use it.

## Project Overview

- App type: basic Next.js App Router project
- Package manager: `npm`
- Local dev command: `npm run dev`
- Production build command: `npm run build`
- Production start command: `npm run start`

## Repository

- GitHub repository: `https://github.com/ottima1004-del/music.git`
- Default branch: `main`

## Vercel Deployment

- Vercel project name: `music`
- Vercel project ID: `prj_33emSYU4hQhazclw3dP91zAYxF1k`
- Vercel team ID: `team_lpmztsAcU9uqCe0KcJSzotzD`
- GitHub repository is connected to Vercel.
- Pushes to `main` should trigger automatic Vercel deployments.
- Current production URL: `https://music-sandy-eta.vercel.app`

## Deployment Workflow

1. Make changes locally.
2. Run the relevant checks if the change affects behavior.
3. Commit to Git.
4. Push to `main` to trigger Vercel deployment.
5. Verify the deployed URL after production changes.

## Documentation Rules

- Any meaningful product, UI, architecture, setup, deployment, or workflow change must be documented in the repository.
- When behavior changes, update user-facing or developer-facing docs in the same task whenever possible.
- At minimum, consider whether `README.md`, `AGENTS.md`, environment setup notes, deployment notes, or feature-specific docs need updates.
- Do not leave documentation as a follow-up task if the code change already changed how the project works.
- If a change affects setup, commands, configuration, deployment, or integration behavior, update the relevant docs before finishing.
- If the user changes code, structure, scripts, deployment settings, or developer workflow, document those changes clearly and promptly.
- Documentation should help a non-developer continue using the project with confidence.
- Prefer concise, practical documentation with exact commands, file paths, workflow notes, and plain-language explanations.
- When possible, include step-by-step instructions for anything the father may need to do directly.

## Agent Instructions

- Prefer small, reviewable commits.
- Keep `.vercel`, local logs, build output, and temporary files out of Git.
- Before closing a task, check whether documentation should change along with the code.
- If deployment settings, URLs, Git remotes, or project ownership change, update this file.
- Optimize for non-developer usability first, then developer convenience.
- Explain non-obvious changes in plain language so the father can still understand how to use the project after updates.
- If you add tooling, scripts, or config, also document when to use them and why they exist.
- Avoid unnecessary churn in configuration that would make the environment harder to understand.
- Favor interfaces and workflows that are forgiving, obvious, and easy to recover if something goes wrong.

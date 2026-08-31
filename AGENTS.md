# AGENTS.md

## Project Overview

This project is a Next.js application converted from an older website that originally used:
- HTML
- CSS
- JavaScript
- jQuery
- Bootstrap

The application is now being migrated and maintained as a Next.js project.

The project uses JavaScript, NOT TypeScript.

## Critical Instructions

Before making ANY code changes:

1. First inspect the project structure.
2. Read all relevant files related to the requested change.
3. Search the entire repository for references to the components, functions, classes, IDs, CSS selectors, API calls, routes, or variables involved.
4. Understand how the existing implementation works before modifying it.
5. Check whether functionality was carried over from the original jQuery/Bootstrap website.
6. Do not assume a file is unused without searching for its references.
7. Do not make changes until you understand the impact on the rest of the project.

## Repository Analysis

When working on this project for the first time, inspect the repository before implementing changes.

Pay particular attention to:

- `package.json`
- Next.js configuration
- `app/` or `pages/`
- `components/`
- `public/`
- CSS files
- JavaScript utilities
- API/service files
- layouts
- navigation
- imported scripts
- Bootstrap dependencies
- jQuery dependencies
- external libraries
- environment variable usage

Understand how these parts connect before modifying them.

## JavaScript Only

This project does NOT use TypeScript.

Do NOT:

- create `.ts` files
- create `.tsx` files
- introduce TypeScript types
- introduce TypeScript interfaces
- convert existing JavaScript to TypeScript

Use:

- `.js`
- `.jsx`

Follow the existing project's JavaScript conventions.

## Next.js Guidelines

Follow the Next.js architecture already used by the project.

Before creating a new component:

1. Search for an existing component that provides similar functionality.
2. Reuse existing components where practical.
3. Follow the project's existing folder structure.
4. Follow existing import patterns.
5. Preserve Server Component / Client Component boundaries where applicable.

Do not add `"use client"` unless the component actually requires client-side functionality.

## Converted Legacy Website

Because this project was converted from jQuery/Bootstrap, some functionality may still depend on:

- Bootstrap classes
- Bootstrap JavaScript
- jQuery
- DOM manipulation
- legacy CSS
- global scripts
- IDs and data attributes
- third-party plugins

Before removing or rewriting legacy code, determine why it exists and whether another part of the website depends on it.

Do not remove legacy functionality simply because it appears unnecessary.

## Styling

Preserve the existing website design unless explicitly asked to redesign something.

Before changing styles:

1. Find the existing CSS responsible for the element.
2. Check whether the CSS selector is used elsewhere.
3. Check responsive behavior.
4. Check Bootstrap classes and overrides.
5. Avoid creating duplicate CSS rules.

Do not make unrelated visual changes.

## Responsive Design

Any UI change should be checked for:

- Desktop
- Tablet
- Mobile

Preserve the existing responsive behavior unless explicitly asked to change it.

## Dependencies

Do not install new npm packages unless they are genuinely necessary.

Before adding a dependency:

1. Check whether the project already contains functionality that solves the problem.
2. Check existing dependencies in `package.json`.
3. Prefer existing project libraries.

Do not upgrade existing packages unless explicitly requested.

## Scope of Changes

Make the smallest reasonable change necessary to complete the requested task.

Do NOT:

- refactor unrelated code
- rename unrelated variables
- reorganize folders unnecessarily
- change formatting across unrelated files
- replace working implementations without a reason
- modify unrelated UI
- remove code without verifying its usage

If you notice unrelated problems, mention them instead of automatically fixing them.

## Before Editing

For every requested change:

1. Identify the relevant files.
2. Search the repository for related code.
3. Understand the current implementation.
4. Determine what other components/pages depend on it.
5. Make the minimum required change.

## After Editing

After making changes:

1. Review the changed files.
2. Check imports and references.
3. Check for obvious JavaScript/React errors.
4. Run available lint/build checks when appropriate.
5. Verify that unrelated functionality was not changed.
6. Summarize which files were changed and why.

## Important

Never blindly rewrite a file.

Preserve existing working functionality unless the requested task specifically requires changing it.

When uncertain about how something works, investigate the repository first instead of guessing.
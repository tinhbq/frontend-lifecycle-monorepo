# Frontend Lifecycle Monorepo

This learning project simulates the development lifecycle of a modern frontend application: organizing source code as a monorepo, reusing internal packages, enforcing quality checks, running CI, and preparing release and deployment workflows.

The current sample application is `customer-portal`, built with React, TypeScript, and Vite.

## Learning Objectives

- Organize multiple applications and libraries in a monorepo.
- Share UI components, utilities, and configurations across workspaces.
- Set up linting, type-checking, unit tests, and code coverage.
- Build quality gates with GitHub Actions.
- Integrate SonarCloud for static code analysis.
- Learn about Conventional Commits, semantic versioning, and semantic-release.

## Tech Stack

| Category | Technologies |
| --- | --- |
| Frontend | React 19, TypeScript, Vite |
| Monorepo | pnpm workspaces, Lerna |
| Testing | Jest, Testing Library, ts-jest |
| Code quality | ESLint, TypeScript strict mode, SonarCloud |
| CI/CD | GitHub Actions, semantic-release |

## Project Structure

```text
.
├── apps/
│   └── customer-portal/       # React + TypeScript + Vite application
├── packages/
│   ├── eslint-config/         # Shared ESLint configuration
│   ├── jest-config/           # Shared Jest configuration
│   ├── typescript-config/     # Shared TypeScript configuration
│   ├── ui/                    # Shared React components
│   └── utils/                 # Shared utilities
├── .github/workflows/         # GitHub Actions quality gates
├── lerna.json
├── pnpm-workspace.yaml
└── sonar-project.properties
```

### Available Workspaces

| Workspace | Purpose |
| --- | --- |
| `customer-portal` | Sample application that consumes the internal packages |
| `@repo/ui` | Shared React components |
| `@repo/utils` | Shared utility functions |
| `@repo/eslint-config` | ESLint configuration for React and TypeScript |
| `@repo/jest-config` | Unit testing and coverage configuration |
| `@repo/typescript-config` | Reusable TypeScript configurations |

## Prerequisites

- Node.js 24.x
- pnpm 12.14.0

Check the installed versions with:

```bash
node --version
pnpm --version
```

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Start the development environment

Run all workspaces that define a `dev` script:

```bash
pnpm dev
```

Or run only `customer-portal`:

```bash
pnpm --filter customer-portal dev
```

## Main Commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Run the workspaces in development mode |
| `pnpm build` | Build the workspaces through Lerna |
| `pnpm test` | Run unit tests across the workspaces |
| `pnpm lint` | Run ESLint across the workspaces |
| `pnpm --filter customer-portal build` | Build only the sample application |
| `pnpm --filter customer-portal test` | Run tests and generate a coverage report |
| `pnpm --filter customer-portal lint` | Run ESLint for the sample application |
| `pnpm --filter customer-portal exec tsc --noEmit` | Type-check the application without emitting files |
| `pnpm --filter customer-portal preview` | Preview the production build |

## Learning Resource

- [YouTube tutorial](https://www.youtube.com/watch?v=2Z39k2-EaN0&t=9199s).

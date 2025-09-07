# ServiceBay Architecture Snippets

![CI](https://github.com/Endercraft2017/servicebay-architecture-snippets/actions/workflows/ci.yml/badge.svg)

This repo illustrates my proposed coding standards and approaches for ServiceBay’s backend and AI workflows.  
It contains examples of **contracts-first schemas, voice adapter policies, diagnostics determinism, and dispatch explainability**.

## Structure

- `packages/contracts/schemas/workOrder.ts` → Contracts-first schema using Zod.
- `src/voiceAdapter.ts` → Voice adapter with cost guard policy.
- `src/dispatch.ts` → Explainable dispatch logic.
- `tests/diagnostics.test.ts` → Deterministic diagnostics test with Vitest.

## Run Tests

```bash
npm install
npm test
```

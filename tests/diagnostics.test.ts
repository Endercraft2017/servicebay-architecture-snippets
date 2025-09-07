import { describe, it, expect } from "vitest";

function suggestDiagnostics(input: string, { seed }: { seed: number }) {
  // Placeholder: real function would use seeded randomness
  return [`diag-${seed}-1`, `diag-${seed}-2`, `diag-${seed}-3`];
}

function loadFixtures(seed: number) {
  return {
    input: "test input",
    expectedTop3: [`diag-${seed}-1`, `diag-${seed}-2`, `diag-${seed}-3`],
  };
}

describe("diagnostics/suggest", () => {
  it("returns stable top-3", () => {
    const seed = 1234;
    const fixtures = loadFixtures(seed);
    const result = suggestDiagnostics(fixtures.input, { seed });
    expect(result).toEqual(fixtures.expectedTop3);
  });
});

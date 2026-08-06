import { describe, expect, it } from "vitest";
import { getGroundHeight } from "@/features/world/ground/groundHeight";

describe("vertical-slice ground profiles", () => {
  it("keeps the hub grounded at its predictable entrance level", () => {
    expect(getGroundHeight("hub", 0, 5)).toBe(0);
  });

  it("provides a gentle rise across the projects bridge", () => {
    expect(getGroundHeight("projects", 0, -8)).toBe(0);
    expect(getGroundHeight("projects", 0, -14)).toBeCloseTo(0.35);
  });
});

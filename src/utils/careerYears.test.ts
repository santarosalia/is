import { describe, expect, it } from "vitest";
import { getCareerYears } from "./careerYears";

/** Builds an instant that falls on the given Seoul calendar date (KST, UTC+9). */
function seoulDate(
  year: number,
  month: number,
  day: number,
  hour = 12,
): Date {
  const pad = (value: number) => String(value).padStart(2, "0");
  return new Date(
    `${year}-${pad(month)}-${pad(day)}T${pad(hour)}:00:00+09:00`,
  );
}

describe("getCareerYears (Asia/Seoul calendar)", () => {
  it("returns 3 on 2026-02-28 in Seoul (day before 4th anniversary)", () => {
    expect(getCareerYears(seoulDate(2026, 2, 28))).toBe(3);
  });

  it("returns 4 on 2026-03-01 in Seoul (4th anniversary)", () => {
    expect(getCareerYears(seoulDate(2026, 3, 1))).toBe(4);
  });

  it("returns 0 on 2022-03-01 in Seoul (start day counts as year 0, not year 1)", () => {
    expect(getCareerYears(seoulDate(2022, 3, 1))).toBe(0);
  });

  it("returns 2 on 2024-08-15 in Seoul (mid-year after second anniversary)", () => {
    expect(getCareerYears(seoulDate(2024, 8, 15))).toBe(2);
  });

  it("uses Seoul calendar day, not UTC, near the Mar 1 boundary", () => {
    // 2026-02-28 23:30 KST — still Feb 28 in Seoul → 3 years
    expect(getCareerYears(new Date("2026-02-28T14:30:00.000Z"))).toBe(3);
    // 2026-03-01 00:30 KST — already Mar 1 in Seoul → 4 years (UTC still Feb 28)
    expect(getCareerYears(new Date("2026-02-28T15:30:00.000Z"))).toBe(4);
  });
});

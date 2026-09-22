export const CAREER_START_DATE = new Date(2022, 2, 1);

export function getCareerYears(asOf: Date = new Date()): number {
  let years = asOf.getFullYear() - CAREER_START_DATE.getFullYear();
  const monthDiff = asOf.getMonth() - CAREER_START_DATE.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && asOf.getDate() < CAREER_START_DATE.getDate())
  ) {
    years -= 1;
  }

  return Math.max(0, years);
}

export function formatCareerYearsShort(years: number): string {
  return `${years}년+`;
}

export function formatCareerYearsExperience(years: number): string {
  return `${years}년간의`;
}

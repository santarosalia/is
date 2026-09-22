const SEOUL_TIME_ZONE = "Asia/Seoul";

export const CAREER_START = {
  year: 2022,
  month: 3,
  day: 1,
} as const;

type CalendarParts = {
  year: number;
  month: number;
  day: number;
};

function getSeoulCalendarParts(date: Date): CalendarParts {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: SEOUL_TIME_ZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const parts = formatter.formatToParts(date);
  const read = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value);

  return {
    year: read("year"),
    month: read("month"),
    day: read("day"),
  };
}

function isBeforeCareerAnniversary({ month, day }: CalendarParts): boolean {
  return (
    month < CAREER_START.month ||
    (month === CAREER_START.month && day < CAREER_START.day)
  );
}

export function getCareerYears(asOf: Date = new Date()): number {
  const seoulDate = getSeoulCalendarParts(asOf);
  let years = seoulDate.year - CAREER_START.year;

  if (isBeforeCareerAnniversary(seoulDate)) {
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

export type ScoreRating = {
  minValue: number,
  color: string,
  name: string,
}

export function getRatingForValue(value: number): ScoreRating {
  const all: ScoreRating[] = [
    {
      minValue: 7.0,
      name: "Good",
      color: "#80C080",
    },
    {
      minValue: 5.0,
      name: "Okay",
      color: "#CFCF80",
    },
    {
      minValue: 0.0,
      name: "Bad",
      color: "#CF8080",
    }
  ];
  return all.filter(r => value >= r.minValue)[0];
}
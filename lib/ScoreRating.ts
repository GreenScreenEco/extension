import {Score} from "./Models";

export type ScoreRating = {
  minValue: number,
  color: string,
  name: string,
}

/** Convert a score's value to a scale of 0-10. */
export function scaleScoreToLocal(score: Score): Score {
  const targetMin = 0;
  const targetMax = 10;
  if (score.min === targetMin && score.max === targetMax) {
    return score;
  }

  // Scale the score value
  let scaledScore = {...score};
  scaledScore.value -= score.min ?? 0;
  scaledScore.value *= (targetMax - targetMin) / (score.max - (score.min ?? 0))
  scaledScore.value += targetMin;

  // Update the new score with the accurate range
  scaledScore.min = targetMin;
  scaledScore.max = targetMax;

  // Truncate to only 1 decimal of precision.
  scaledScore.value = Math.round(scaledScore.value * 10) / 10;

  return scaledScore;
}

export function getRatingForScore(score: Score | null): ScoreRating {
  if (score == null) {
    return {
      minValue: 0.0,
      name: "",
      color: "#CCCCCC",
    };
  }
  score = scaleScoreToLocal(score);
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
  return all.filter(r => score.value >= r.minValue)[0];
}
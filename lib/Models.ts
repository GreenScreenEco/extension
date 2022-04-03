export type ScoreSource = {
  identity: string,
  description: string,
}

export type Score = {
  value: number,
  min: number,
  max: number,
  label: string,
  description: string,
  source: ScoreSource,
}

export type Company = {
  name: string,
}

export type ScoreSummary = {
  company: Company,
  main_score: Score,
  score_components: Score[],
}
import styles from './ScoreComponentsDetailed.module.css'
import {getRatingForValue} from "../lib/ScoreRating";

type DetailedScoreProps = {
  /** 0.0-10.0 */
  value: number,
  label: string,
  description: string,
}

function DetailedScore({value, label, description}: DetailedScoreProps) {
  const scoreRating = getRatingForValue(value);

  return (
    <div className={styles.scoreContainer}>
      <span className={styles.score} style={{color: scoreRating.color}}>{value}</span>
      <span className={styles.scoreLabel}>{label}</span>
      <span className={styles.scoreDescription}>{description}</span>
    </div>
  );
}

type ScoreComponentsDetailedProps = {
  scores: DetailedScoreProps[],
}

export default function ScoreComponentsDetailed({scores}: ScoreComponentsDetailedProps) {
  return (
    <div className={styles.rootContainer}>
      {scores.map(score => <DetailedScore {...score} key={score.label} />)}
    </div>
  );
}

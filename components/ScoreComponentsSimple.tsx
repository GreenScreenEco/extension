import styles from './ScoreComponentsSimple.module.css'
import {getRatingForValue} from "../lib/ScoreRating";

type SimpleScoreProps = {
  /** 0.0-10.0 */
  value: number,
  label: string,
}

function SimpleScore({value, label}: SimpleScoreProps) {
  const scoreRating = getRatingForValue(value);

  return (
    <div className={styles.scoreContainer}>
      <span className={styles.score} style={{color: scoreRating.color}}>{value}</span>
      <span>{label}</span>
    </div>
  );
}

type ScoreComponentsSimpleProps = {
  scores: SimpleScoreProps[],
}

export default function ScoreComponentsSimple({scores}: ScoreComponentsSimpleProps) {
  return (
    <div className={styles.rootContainer}>
      {scores.map(score => <SimpleScore {...score} key={score.label} />)}
    </div>
  );
}

import styles from './ScoreComponentsSimple.module.css'
import {getRatingForScore, scaleScoreToLocal} from "../lib/ScoreRating";
import {Score} from "../lib/Models";

type SimpleScoreProps = {
  score: Score,
}

function SimpleScore({score}: SimpleScoreProps) {
  score = scaleScoreToLocal(score);
  const scoreRating = getRatingForScore(score);

  return (
    <div className={styles.scoreContainer}>
      <span className={styles.score} style={{color: scoreRating.color}}>{score.value}</span>
      <span>{score.label}</span>
    </div>
  );
}

type ScoreComponentsSimpleProps = {
  scores: Score[],
}

export default function ScoreComponentsSimple({scores}: ScoreComponentsSimpleProps) {
  return (
    <div className={styles.rootContainer}>
      {scores.map(score => <SimpleScore score={score} key={score.label} />)}
    </div>
  );
}

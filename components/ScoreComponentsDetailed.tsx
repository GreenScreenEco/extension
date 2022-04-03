import styles from './ScoreComponentsDetailed.module.css'
import {getRatingForScore, scaleScoreToLocal} from "../lib/ScoreRating";
import {Score} from "../lib/Models";

type DetailedScoreProps = {
  score: Score,
}

function DetailedScore({score}: DetailedScoreProps) {
  score = scaleScoreToLocal(score);
  const scoreRating = getRatingForScore(score);

  return (
    <div className={styles.scoreContainer}>
      <span className={styles.score} style={{color: scoreRating.color}}>{score.value}</span>
      <span className={styles.scoreLabel}>{score.label}</span>
      <span className={styles.scoreDescription}>{score.description}</span>
    </div>
  );
}

type ScoreComponentsDetailedProps = {
  scores: Score[],
}

export default function ScoreComponentsDetailed({scores}: ScoreComponentsDetailedProps) {
  return (
    <div className={styles.rootContainer}>
      {scores.map(score => <DetailedScore score={score} key={score.label} />)}
    </div>
  );
}

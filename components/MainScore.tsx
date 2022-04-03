import styles from './MainScore.module.css'
import ScoreGauge from "./ScoreGauge";
import {Score} from "../lib/Models";

type Props = {
  score: Score | null,
  /** Generally, the current website */
  scoreSubject: string,
}

export default function MainScore({score, scoreSubject}: Props) {
  return (
    <div className={styles.container}>
      <ScoreGauge score={score} />
      <span className={styles.scoreSubject}>{scoreSubject}</span>
    </div>
  );
}
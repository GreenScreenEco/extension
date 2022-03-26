import styles from './MainScore.module.css'
import ScoreGauge from "./ScoreGauge";

type Props = {
  /** 0.0-10.0 */
  value: number,
  /** Generally, the current website */
  scoreSubject: string,
}

export default function MainScore({value, scoreSubject}: Props) {
  return (
    <div className={styles.container}>
      <ScoreGauge value={value} />
      <span className={styles.scoreSubject}>{scoreSubject}</span>
    </div>
  );
}
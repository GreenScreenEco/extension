import styles from './ScoreGauge.module.css'
import {ReactElement, useCallback, useEffect, useMemo, useState} from "react";
import {getRatingForValue} from "../lib/ScoreRating";

type Props = {
  /** 0.0-10.0 */
  value: number
}

export default function ScoreGauge({value}: Props): ReactElement {
  // This component will not update if the prop value changes.
  // If this feature is needed, it's recommended to convert this to a class-based component.

  /*
   * This uses a third-party gauge library. Our Gauge component is a wrapper
   * to the library component.
   *
   * Website: https://bernii.github.io/gauge.js/
   */

  const scoreRating = getRatingForValue(value)
  const gaugeOptions = useMemo(() => ({
    angle: 0.25, // The span of the gauge arc
    lineWidth: 0.1, // The line thickness
    radiusScale: 1, // Relative radius
    limitMax: false, // If false, max value increases automatically if value > maxValue
    limitMin: false, // If true, the min value of the gauge will be fixed
    colorStart: scoreRating.color,
    colorStop: scoreRating.color,
    strokeColor: '#404040', // gauge background
    // shadowColor: '#606060', // shadow color
    generateGradient: true,
    highDpiSupport: false, // auto-resize to scale with viewport
  }), [scoreRating])

  const [gauge, setGauge] = useState(null);
  const gaugeMountRef = useCallback(current => {
    if (current != null) {
      (async () => {
        // Canvas elements can't scale automatically via CSS, but divs can. We style a container
        // div with our desired size, then set the canvas programmatically to match.
        const rect = current.parentNode.getBoundingClientRect();
        current.width = rect.width;
        current.height = rect.height;

        // The library is imported this way because the library depends on `window`, but `window` is not available
        // in the build-phase environment, so it prevents the app from exporting.
        const Donut = await import("../lib/gauge.min").then((mod) => mod.Donut);
        const gauge = new Donut(current);
        gauge.setOptions(gaugeOptions)
        // @ts-ignore
        gauge.maxValue = 10
        // @ts-ignore
        gauge.setMinValue(0, null)
        // @ts-ignore
        gauge.set(value)
        setGauge(gauge);
      })();
    }
  }, []);

  useEffect(() => {
    if (gauge != null) {
      gauge.set(value)
      gauge.setOptions(gaugeOptions);
    }
  }, [gaugeOptions, gauge]);

  return (
    <div className={styles.scoreGaugeRoot}>
      <span className={styles.score} style={{color: scoreRating.color}}>{value}</span>
      <span className={styles.scoreRating}>{scoreRating.name}</span>
      <div className={styles.scoreGaugeWrapper}>
        <canvas ref={gaugeMountRef} />
      </div>
    </div>
  );
}
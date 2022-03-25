import {ReactElement, useEffect, useLayoutEffect, useMemo, useRef, useState} from "react";

type Props = {
  /** 0.0-10.0 */
  value: number
}

function getColorForValue(value: number): string {
  if (value >= 7.0) {
    return "#80C080";
  } else if (value >= 5.0) {
    return "#CFCF80"
  } else {
    return "#CF8080"
  }
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

  const gaugeColor = getColorForValue(value)
  const gaugeOptions = useMemo(() => ({
    angle: 0.25, // The span of the gauge arc
    lineWidth: 0.1, // The line thickness
    radiusScale: 1, // Relative radius
    limitMax: false, // If false, max value increases automatically if value > maxValue
    limitMin: false, // If true, the min value of the gauge will be fixed
    colorStart: gaugeColor,
    colorStop: gaugeColor,
    strokeColor: '#404040', // gauge background
    generateGradient: true,
    highDpiSupport: true,
  }), [gaugeColor])

  const gaugeMountRef = useRef();

  if (typeof window !== 'undefined') {
    useLayoutEffect(() => {
      (async () => {
        const Donut = await import("../lib/gauge.min").then((mod) => mod.Donut);
        const gauge = new Donut(gaugeMountRef.current);
        gauge.setOptions(gaugeOptions)
        // @ts-ignore
        gauge.maxValue = 10
        // @ts-ignore
        gauge.setMinValue(0, null)
        // @ts-ignore
        gauge.set(value)
      })();
    }, [])
  }

  return (
    <canvas ref={gaugeMountRef} />
  );
}
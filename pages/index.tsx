import Header from "../components/Header";
import Footer from "../components/Footer";
import {useState} from "react";
import ScoreGauge from "../components/ScoreGauge";

export default function ExtensionMain() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Header />
      <ScoreGauge value={10} />
      <Footer expanded={expanded} setExpanded={setExpanded} />
    </>
  )
}

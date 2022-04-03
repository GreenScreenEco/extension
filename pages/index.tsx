import Header from "../components/Header";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import ScoreComponentsSimple from "../components/ScoreComponentsSimple";
import MainScore from "../components/MainScore";
import ScoreComponentsDetailed from "../components/ScoreComponentsDetailed";
import {ScoreSummary} from "../lib/Models";
import {addTabActivatedListener, getURLOfCurrentTab, removeTabActivatedListener} from "../lib/BrowserAdapter";

export default function ExtensionMain() {
  const [expanded, setExpanded] = useState(false);

  const [scoreSummary, setScoreSummary] = useState<ScoreSummary | null>(null);
  const [activeTabURL, setActiveTabURL] = useState<URL | null>(null);

  useEffect(() => {
    const listener = () => {
      getURLOfCurrentTab().then(setActiveTabURL)
    }
    listener();
    addTabActivatedListener(listener);
    return () => {
      removeTabActivatedListener(listener);
    }
  }, []);

  useEffect(() => {
    if (activeTabURL != null) {
      fetch(`http://localhost:8000/v1/scores?domain_name=${activeTabURL.host}`)
        .then(response => response.json())
        .then(data => setScoreSummary(data as ScoreSummary))
    }
  }, [activeTabURL])

  return (
    <>
      <Header />
      <MainScore score={scoreSummary?.main_score} scoreSubject={scoreSummary?.company?.name ?? "Unknown Score"} />
      {expanded ?
        <ScoreComponentsDetailed scores={scoreSummary?.score_components ?? []} /> :
        <ScoreComponentsSimple scores={scoreSummary?.score_components ?? []}/>}
      <Footer expanded={expanded} setExpanded={setExpanded} />
    </>
  )
}

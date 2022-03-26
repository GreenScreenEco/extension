import Header from "../components/Header";
import Footer from "../components/Footer";
import {useState} from "react";
import ScoreComponentsSimple from "../components/ScoreComponentsSimple";
import MainScore from "../components/MainScore";
import ScoreComponentsDetailed from "../components/ScoreComponentsDetailed";

export default function ExtensionMain() {
  const [expanded, setExpanded] = useState(false);

  const mainScore = 8.5;
  const scoreSubject = "example.com";
  const scoreComponents = [
    {
      value: 10,
      label: "Labor",
      description: "Fair treatment of employees and safe working conditions.",
    },
    {
      value: 6.5,
      label: "Materials",
      description: "Reduced material sustainability and increased environmental impact.",
    },
    {
      value: 7,
      label: "Carbon",
      description: "Low carbon emissions from direct and indirect sources.",
    }
  ];

  return (
    <>
      <Header />
      <MainScore value={mainScore} scoreSubject={scoreSubject} />
      {expanded ?
        <ScoreComponentsDetailed scores={scoreComponents} /> :
        <ScoreComponentsSimple scores={scoreComponents}/>}
      <Footer expanded={expanded} setExpanded={setExpanded} />
    </>
  )
}

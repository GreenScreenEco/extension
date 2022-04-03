import styles from './Footer.module.css'
import {ReactElement} from "react";
import Button from "./Button";

type Props = {
  expanded: boolean
  setExpanded: (boolean) => void
}

function ExpandButton({expanded, setExpanded}): ReactElement {
  if (expanded) {
    return (
      <Button onClick={() => setExpanded(!expanded)} icon={<img alt="chevron pointing up" src={"up-chevron.svg"}/>}>
        Less
      </Button>
    );
  } else {
    return (
      <Button onClick={() => setExpanded(!expanded)} icon={<img alt="chevron pointing down" src={"down-chevron.svg"}/>}>
        Expand
      </Button>
    );
  }
}

export default function Footer({expanded, setExpanded}: Props) {
  return (
    <div className={styles.footer}>
      <ExpandButton expanded={expanded} setExpanded={setExpanded}/>
      <Button
        disabled={true}
        tooltip="Coming soon!"
        href="https://greenscreen.eco"
        icon={<img alt="shield" src={"shield.svg"} style={
          // https://codepen.io/sosuke/pen/Pjoqqp -> #CCCCCC
          {filter: "invert(100%) sepia(0%) saturate(2658%) hue-rotate(22deg) brightness(112%) contrast(60%)"}
        }/>}>
        My Account
      </Button>
    </div>
  );
}
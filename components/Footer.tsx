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
      <Button disabled={true} href="https://greenscreen.eco" icon={<img alt="shield" src={"shield.svg"}/>}>
        My Account
      </Button>
    </div>
  );
}
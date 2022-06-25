import styles from "../SolidApp.module.css";
import { InputGroup, FormControl } from "solid-bootstrap";
import { putSocketidToElement } from "../communicate/websocket";
export default function Handler() 
  {
    putSocketidToElement("#doctorId");
    return (
      <div class={styles.right}>
        <InputGroup className="mb-1">
          <InputGroup.Text>診間</InputGroup.Text>
          <FormControl 
            id="doctorId" 
            placeholder="診間"
            onInput={()=>{putSocketidToElement("#doctorId");}}
          />
        </InputGroup>
        <InputGroup className="mb-1">
          <InputGroup.Text>醫師</InputGroup.Text>
          <FormControl 
            id="doctorName" 
            placeholder="姓名"
          />
        </InputGroup>
      </div>
    );
  }
import styles from "../SolidApp.module.css";
import { MainData, cloneObject } from "../database/MainData";
import { InputGroup, FormControl, Button } from "solid-bootstrap";
import { putSocketidToElement } from "../communicate/websocket";
import { socket } from "../communicate/websocket";
export default function Registered() 
  {
    console.log("public/src/component/Register.jsx")
    putSocketidToElement("#patientId");
    return (
      <div class={styles.center}>
        <InputGroup className="mb-3">
          <InputGroup.Text>櫃台</InputGroup.Text>
          <FormControl 
            id="patientId" 
            placeholder="櫃台" 
            onInput={()=>{putSocketidToElement("#patientId");}}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>姓名</InputGroup.Text>
          <FormControl 
            id="patientName" 
            placeholder="姓名"
          />
          <Button 
            variant="primary" 
            onClick={()=>
              {
                if (MainData.member.add(document.querySelector("#patientId").value, document.querySelector("#patientName").value))
                  {
                    socket.emit("Patient-Register",
                      {
                        from: `${socket.id}@public.src.component.Register`, 
                        data: cloneObject(MainData.get.member), 
                      });
                    document.querySelector("#patientName").value="";
                  }
              }}
          >掛號</Button>
        </InputGroup>
      </div>
    );
  }
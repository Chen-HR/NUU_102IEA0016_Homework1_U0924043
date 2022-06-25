import styles from "../SolidApp.module.css";
import PatientTableRow from "./PatientTableRow";
import { MainData } from "../database/MainData";
import { Table } from "solid-bootstrap";
import { For, Switch, Match } from "solid-js";
export default function PatientTable(parameter) 
  {
    console.log("public/src/component/PatientTable.jsx")
    console.log(`mode: ${parameter.mode}`)
    // console.log(`MainData.get.member: ${JSON.stringify(MainData.get.member)}`)
    return (
      <div class={styles.center}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th scope="col">#      </th>
              <th scope="col">掛號櫃台</th>
              <th scope="col">患者姓名</th>
              <Switch fallback={<></>}>
                <Match when={parameter.mode==="Hall"}>
                  <th scope="col">看診診間</th>
                  <th scope="col">主治醫師</th>
                  <th scope="col">  狀態  </th>
                </Match>
                <Match when={parameter.mode==="Clinic"}>
                  <th scope="col">看診診間</th>
                  <th scope="col">主治醫師</th>
                  <th scope="col">  狀態  </th>
                  <th scope="col">  操作  </th>
                </Match>
              </Switch>
            </tr>
          </thead>
          <tbody>
            <For each={MainData.get.member} 
              fallback=
                {
                  <Switch fallback={<></>}>
                    <Match when={parameter.mode==="Hall"}>
                      <tr><td colSpan="6">loding...</td></tr>
                    </Match>
                    <Match when={parameter.mode==="Hall-Waitting"}>
                      <tr><td colSpan="3">loding...</td></tr>
                    </Match>
                    <Match when={parameter.mode==="Clinic"}>
                      <tr><td colSpan="7">loding...</td></tr>
                    </Match>
                  </Switch>
                }
            >{(item, index) => (<PatientTableRow index={index()} data={item} mode={parameter.mode}/>)}</For>
          </tbody>
        </Table>
      </div>
    );
  }
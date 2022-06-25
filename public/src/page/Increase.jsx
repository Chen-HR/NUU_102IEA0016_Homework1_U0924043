import styles     from "../SolidApp.module.css";
import Registered from "../component/Register";
import PatientTable from "../component/PatientTable";
export default function Increase() 
  {
    console.log("public/src/page/Increase.jsx")
    return (
      <div class={styles.center}>
        <br/>
        <h1>患者掛號</h1>
        <hr/>
        <Registered />
        <h2>病患清單</h2>
        <PatientTable mode="Hall-Waitting"/>
      </div>
    );
  }
import styles from "../SolidApp.module.css";
import Handler from "../component/Handler";
import PatientTable from "../component/PatientTable";
export default function Decrease() 
  {
    console.log("public/src/page/Decrease.jsx")
    return (
      <div class={styles.center}>
        <br/>
        <h1>醫師看診</h1>
        <hr/>
        <Handler/>
        <h2>等候名單</h2>
        <PatientTable mode="Clinic"/>
      </div>
    );
  }
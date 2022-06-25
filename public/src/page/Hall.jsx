import styles from "../SolidApp.module.css";
import PatientTable from "../component/PatientTable";
export default function Hall() 
  {
    console.log("public/src/page/Hall.jsx")
    return (
      <div class={styles.center}>
        <br/>
        <h1>大廳</h1>
        <hr/>
        <h2>病患清單</h2>
        <PatientTable mode="Hall"/>
      </div>
    );
  }
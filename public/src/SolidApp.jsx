import styles   from "./SolidApp.module.css";
import Header   from "./component/Header";
import Home     from "./page/Home";
import Hall     from "./page/Hall";
import Increase from "./page/Increase";
import Decrease from "./page/Decrease";
import { onMount } from "solid-js";
import { Routes, Route } from "solid-app-router";
import { MainData, cloneObject } from "./database/MainData";
import { socket } from "./communicate/websocket";

export default function SolidApp() {
  onMount(() =>
    {
      socket.on("Connecting-GetData", (data) => 
        {
          console.log(`${socket.id} Connecting-GetData: ${data}`);
          socket.emit("Connecting-ReturnData",
            {
              from: `${socket.id}@public.src.SolidApp`, 
              data: cloneObject(MainData.get.member), 
            });
          Connecting_GetData=true;
        });
      socket.on("Connecting-PutData", (data) => 
        {
          console.log(`${socket.id} Connecting-PutData: ${JSON.stringify(data)}`);
          MainData.set({member: data.data});
        });
      socket.on("Patient-Register", (data) => 
        {
          console.log(`${socket.id} Patient-Register: ${data}`);
          MainData.set({member: data.data});
          alert(JSON.stringify(data, null, 2));
        });
      socket.on("Doctor-Processing", (data) => 
        {
          console.log(`${socket.id} Doctor-Processing: ${data}`);
          MainData.set({member: data.data});
          alert(JSON.stringify(data, null, 2));
        });
      socket.on("Doctor-Finish", (data) => 
        {
          console.log(`${socket.id} Doctor-Finish: ${data}`);
          MainData.set({member: data.data});
          alert(JSON.stringify(data, null, 2));
        });
      socket.on("Doctor-Delete", (data) => 
        {
          console.log(`${socket.id} Doctor-Delete: ${data}`);
          MainData.set({member: data.data});
          alert(JSON.stringify(data, null, 2));
        });
    });
  return (
    <div class={styles.center}>
      <Header/>
      <header class={styles.header}>
        <Routes>
          <Route path="/        " element={<Home    />}></Route>
          <Route path="/hall    " element={<Hall    />}></Route>
          <Route path="/patient " element={<Increase/>}></Route>
          <Route path="/doctor  " element={<Decrease/>}></Route>
        </Routes>
      </header>
    </div>
  );
}
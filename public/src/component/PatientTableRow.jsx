import { MainData, cloneObject } from "../database/MainData";
import { Button } from "solid-bootstrap";
import { Switch, Match } from "solid-js";
import { socket } from "../communicate/websocket";
export default function PatientTableRow(item) 
  {
    console.log("public/src/component/PatientTableRow.jsx");
    console.log(`item.index: ${item.index}`);
    console.log(`item.mode: ${item.mode}`);
    console.log(`item.data: ${JSON.stringify(item.data)}`);
    return (
      <tr>
        <Switch fallback={<></>}>
          <Match when={(item.mode==="Hall-Waitting")&&(item.data.state!="Waitting")}>
            <></>
          </Match>
          <Match when={!((item.mode==="Hall-Waitting")&&(item.data.state!="Waitting"))}>
            <td>{item.index}</td>
            <td>{item.data.target.id  }</td>
            <td>{item.data.target.name}</td>
            <Switch fallback={<></>}>
              <Match when={item.mode==="Hall"}>
                <td>{item.data.resource.id  }</td>
                <td>{item.data.resource.name}</td>
                <td>{item.data.state}</td>
              </Match>
              <Match when={item.mode==="Clinic"}>
                <td>{item.data.resource.id  }</td>
                <td>{item.data.resource.name}</td>
                <td>{item.data.state}</td>
                <td>
                  <Switch fallback={<></>}>
                    <Match when={item.data.state=="Waitting"}>
                      <Button variant="primary" 
                        onClick={(e)=>
                          {
                            if ((document.querySelector("#doctorId").value!="")&&(document.querySelector("#doctorName").value!=""))
                              {
                                MainData.member.update
                                  (
                                    item.index,
                                    document.querySelector("#doctorId").value,
                                    document.querySelector("#doctorName").value,
                                    "Processing"
                                  );
                                socket.emit("Doctor-Processing",
                                  {
                                    from: `${socket.id}@public.src.component.PatientTableRow`, 
                                    data: cloneObject(MainData.get.member), 
                                  });
                              }
                          }}
                      >處理</Button>
                    </Match>
                    <Match when={item.data.state=="Processing"}>
                      <Button variant="primary" 
                        onClick={(e)=>
                          {
                            if ((document.querySelector("#doctorId").value!="")&&(document.querySelector("#doctorName").value!=""))
                            {
                              MainData.member.update
                                (
                                  item.index,
                                  document.querySelector("#doctorId").value,
                                  document.querySelector("#doctorName").value,
                                  "Finish"
                                );
                              socket.emit("Doctor-Finish",
                                {
                                  from: `${socket.id}@public.src.component.PatientTableRow`, 
                                  data: cloneObject(MainData.get.member), 
                                });
                            }
                          }}
                      >完成</Button>
                    </Match>
                    <Match when={item.data.state=="Finish"}>
                      <Button variant="primary" 
                        onClick={(e)=>
                          {
                            if ((document.querySelector("#doctorId").value!="")&&(document.querySelector("#doctorName").value!=""))
                            {
                              MainData.member.delete(item.index);
                              socket.emit("Doctor-Delete",
                                {
                                  from: `${socket.id}@public.src.component.PatientTableRow`, 
                                  data: cloneObject(MainData.get.member), 
                                });
                            }
                          }}
                      >刪除</Button>
                    </Match>
                  </Switch>
                </td>
              </Match>
            </Switch>
          </Match>
        </Switch>
      </tr>
    )
  }
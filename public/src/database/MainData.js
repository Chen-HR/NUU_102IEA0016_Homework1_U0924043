import { createStore } from "solid-js/store";
const personnel = 
  {
    id: "",
    name: "",
  }
const member = 
  {
    target: personnel,
    resource: personnel,
    state: "",
  }

let data = 
  {
    member: [],
  };
const [Get, Set]=createStore
  (
    {
      template: member,
      member: data.member,
    }
  );
export function cloneObject(obj) 
  {
    return JSON.parse(JSON.stringify(obj));
  }
export const MainData = {
    data: data,
    get: Get,
    set: Set,
    member: 
      {
        add: (id, name)=>
          { 
            if ((!id)||(!name)) return false;
            let newdata = JSON.parse(JSON.stringify(Get.template));
            let newMainDataMember = JSON.parse(JSON.stringify(Get.member));
            // newdata.target.name = name;
            // newdata.target.id = id;
            newdata.target = {id: id, name: name};
            newdata.state = "Waitting";
            newMainDataMember.splice(newMainDataMember.length, 0, JSON.parse(JSON.stringify(newdata)));
            Set({member: newMainDataMember});
            console.log("Get.member: ", Get.member);
            return true;
          },
        update: (index, id, name, state)=>
          { 
            data.member=cloneObject(Get.member);
            data.member[index].state    = state;
            data.member[index].resource = {id: id, name: name};
            Set({member: data.member});
          },
        delete: (index)=>
          { 
            data.member=cloneObject(Get.member);
            data.member.splice(index, 1);
            Set({member: data.member});
          }
      }
  }
import { io } from "socket.io-client";
export const socket =
                      io("http://localhost:8080/");
                      // io("http://192.168.0.230:8080/");
                      // io("https://nuu-102iea0016-homework1-u0924043-0.azurewebsites.net") ;
                      // io("https://nuu-102iea0016-homework1-u0924043-1.azurewebsites.net") ;
export function putSocketidToElement(elementId)
  {
    console.log(`socket.id: ${socket.id}`);
    console.log(`document.querySelector("${elementId}"): ${document.querySelector(elementId)}`);
    if((socket.id==undefined)||(document.querySelector(elementId)==null))
      setTimeout(() => {  putSocketidToElement(elementId); }, 500);
    else
      document.querySelector(elementId).value = socket.id;
  }
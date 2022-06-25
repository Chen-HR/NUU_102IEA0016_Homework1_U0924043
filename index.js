const express=require("express");
const app=express();
const path=require("path");
// const docRoot=path.join(__dirname,".");
const docRoot=path.join(__dirname,"public/dist")
app.use(express.static(docRoot))
const server=require("http").createServer(app)

const io = require("socket.io") (server, {cors:{origin:"*"}});
io.on("connection", (socket)=>
  {
    const date = new Date();
    let member = {};
    console.log(`> ${date.getTime()} ${socket.id} Connecting`);
    socket.broadcast.emit("Connecting-GetData", `${socket.id}`);
    socket.on("Connecting-ReturnData", (data)=>
      {
        console.log(`> ${date.getTime()} ${socket.id} Connecting-ReturnData`);
        console.log(`> ${date.getTime()} ${socket.id} Connecting-ReturnData: ${JSON.stringify(data)}`);
        // console.log(`> ${date.getTime()} ${socket.id} Connecting-ReturnData\n${JSON.stringify(member)}\n${JSON.stringify(data.data)}`)
        if (JSON.stringify(member).length<JSON.stringify(data.data).length)
          {
            member=data.data;
          }
        setTimeout(() => { socket.broadcast.emit("Connecting-PutData", data); }, 1000);
      });
    socket.on("Patient-Register", (data)=>
      {
        member=data.data;
        console.log(`> ${date.getTime()} ${socket.id} Patient-Register: ${JSON.stringify(data)}`);
        socket.broadcast.emit("Patient-Register", data);
      });
    socket.on("Doctor-Processing", (data)=>
      {
        member=data.data;
        console.log(`> ${date.getTime()} ${socket.id} Doctor-Processing: ${JSON.stringify(data)}`);
        socket.broadcast.emit("Doctor-Processing", data);
      });
    socket.on("Doctor-Finish", (data)=>
      {
        member=data.data;
        console.log(`> ${date.getTime()} ${socket.id} Doctor-Finish: ${JSON.stringify(data)}`);
        socket.broadcast.emit("Doctor-Finish", data);
      });
    socket.on("Doctor-Delete", (data)=>
      {
        member=data.data;
        console.log(`> ${date.getTime()} ${socket.id} Doctor-Delete: ${JSON.stringify(data)}`);
        socket.broadcast.emit("Doctor-Delete", data);
      });
    socket.on("disconnection", ()=>
      {
        console.log(`> ${date.getTime()} ${socket.id} disconnection: ${JSON.stringify(data)}`);
        socket.broadcast.emit("Disconnection", socket.id);
      });
  });

const Port=process.env.Port||8080
server.listen(Port,()=>{console.log(`http://localhost:${Port}`)})
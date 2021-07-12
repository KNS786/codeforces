var cp=require('child_process');

var progss={
     list:"ls",
     copy:"cp",
     folder:"mkdir"
}

var childs=cp.spawn(progss.list,['-l'],{cmd:".."});

childs.stdout.on("data",(data)=>{
   console.log(data);
});





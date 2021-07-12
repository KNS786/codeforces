var cp=require('child_process');

var progss={
     list:"ls",
     copy:"cp",
     folder:"mkdir"
}

var childs=cp.spawn(progss.list,['pub']);
childs.stdout.on('data',(data)=>{
      console.log(`data is : ${data}`);
      
});

childs.stderr.on('data',function(error){
    console.log(`error : ${error}`)
});

var copy=cp.spawn(progss.copy,["jdoodle.js","spwan1.js"]);

copy.on('exit',()=>{
      console.log("copy process finished");
      
});

var makeDir=cp.spawn(progss.folder,["css"]);


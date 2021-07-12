//child process.fork(modulePath,[args],{options})

const cp=require('child_process');
const path=require('path');

const names=['oswalt','ganesh','navani'];

var child=cp.fork('forkchild.js',names,{cmd:'./modules'});

child.on('message',(data)=>{
	  console.log(`parent recived ${data}`);
})
.on('exit',function(){
	console.log('child terminated');
});

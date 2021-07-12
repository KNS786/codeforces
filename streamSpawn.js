var fs=require('fs');
var cp=require('child_process');
var prog={
	  list:'ls',
	  copy:'cp',
	  folder:'mkdir'
}
var child=cp.spawn(
   prog,
   ['-a'],{stdio:'pipe'}
   );
 child.stdout.on('data',(data)=>{
	console.log(`${data}`);
 });
 
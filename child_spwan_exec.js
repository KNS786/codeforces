const cp=require('child_process');

var progs={
	list:'ls',
	remove:'rm'
}

var child=cp.exec(progs.remove+"-r css",(error,stdout,stderr)=>{
    if(error){
	  console.log(`Name:${error.name}\n message:${error.message}\n stack:${error.stack}`);
	  
	
	}else{
		console.log(stdout);
	}
	

});



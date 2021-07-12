var fs=require('fs');
var ascii=require('./ascii_table.js');
var readline=require('readline');

 var rl=readline.createInterface({
	  input:process.stdin,
	  output:process.stdout
  });
  

   var writeStream =fs.createWriteStream('./input.txt',{encoding:'utf8'});
   var readStream=fs.createReadStream('./input.txt',{encoding:'utf8'});
   
function res(type,value){
       var mid=Math.floor(dec.length/2);
        var found=false;
         while(!found&&value<=255){
			  let i,j;
			  for(i=0;i<=mid;i++){  
		        if(type()[i]===value){
					console.log(type()[i]);
					found=true;
					}
			 }
			 for(let j=mid+1;j<dec.length;j++){
				if(type()[j]===value){
                     console.log(type()[j])
                    found=true;
				}
			 }
		 }
}		 
			 
	readStream.on('data',function(chunk){
		 data=chunk;
		 console.log(data.toString());
		
		 var dec=ascii.dec;
         var bin=ascii.bin;
         var hex=ascii.hex;
		
		
		
		   rl.setPrompt("Node Mark  >>> ");
		   rl.prompt();
	      rl.on('line',function(line){
               switch(line.trim()){
                 case 'decimal':
                     res(dec,parseInt(rl.prompt(),10));
                     break;
				 case 'hexa':
                      res(bin,parseInt(rl.prompt(),10));
                      break;
                 case "bin":
                    res(hex,parseInt(rl.prompt(),10));
                    break;
			     default:
                      console.log("Nothing to show you,bye");
                      break;
               }
			   rl.prompt();
		  }).on('close',function(){
				     console.log("good day");
					 process.exit(0);
			   });
			   
	
	});
	
	readStream.on('error',function(err){
		console.log(err);
	});
	
   
              
                   				   
module.exports=res;
		          
		
		
		
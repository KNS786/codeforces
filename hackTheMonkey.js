process.stdin.resume();
process.stdin.setEncoding('ascii');
var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
inputString+=data;
});
process.stdin.on('end',function(){
inputString+=inputString.split('\n');
main();
});
function readline(){
   return inputString[currentLine++];
}
function main(){
	  var n=readline();
	  var arr=inputString.split('');
	  
     let sum=0;
     let max=Infinity;
         for(let i=0;i<inputString.length-1;i++){

              let subarr=inputString.slice(0,i+2);
                subarr.sort((a,b)=>a-b);
               subarr.forEach((el,index,arr)=>{
                   sum+=(index+1)*el;

               });
               max=Math.max(max,sum)?sum:undefined;
          sum=0;
             
         }
         console.log(max);

}

     
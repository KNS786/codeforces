process.stdin.resume();
process.stdin.setEncoding('ascii');
var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
    inputString+=data;
    
});
process.stdin.on('end',function(){
    inputString=inputString.split('\n');
    main();
});
function readline(){
    return inputString[currentLine++];
}
function main(){
    var t=parseInt(readline());
    while(t--){
        let n=parseInt(readline());
        let queue=readline().split(' ').map(Number);
       //  console.log("Queue:    ",queue);
           let s=newYear(n,queue);
		   m(s,queue);
      //  console.log("arrr:     ",s[0])

}
}
function m(s,newArr){
      let co=0;
      console.log(co);


      for(let i=0;i<newArr.length;i++){
          if(s[0][i]==parseInt(newArr[i]))
             co++;
          else
              break;
      }
      if(co==newArr.length)
          console.log(s[1]);
      else
          console.log("Too chaotic");  
}


function newYear(n,queue){
   let arr=queue;let j;
   arr.sort((a,b)=>a-b);
         for( j=n-1;j>2;j--)
            [arr[j],arr[j-1]]=[arr[j-1],arr[j]];
       
       [arr[0],arr[1]]=[arr[1],arr[0]];

    return [arr,j+1];
}
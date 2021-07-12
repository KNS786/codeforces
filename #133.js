process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
    inputString+=data;
    var [data,val]=inputString;
    var arr=[],res="";
       let i=0,j=parseInt(data);
        
            for(let k=1;k<=j;k++){
                     res+=1+" ";
                 arr.push(res)
                  }
       
        for(let j=arr.length-1;j>=0;j--){
            console.log(arr[j])
        }
          
     
});

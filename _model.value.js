process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
	inputString=data;
	inputString=inputString.split('\n');
	var arr=inputString[1].split(' ').map(el=>parseInt(el));
	arr.sort((a,b)=>a-b);
    newArr =[];
    obj={};
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==arr[i+1])
        {
            obj[arr[i]]=obj[arr[i]]?obj[arr[i]]+1:1;
            
        }
    }
    var rest=Object.values(obj).filter((el,ind,arr)=>{
          let res=0;
         var keys=Object.keys(obj);
        for(let i=0;i<arr.length-(arr.length-1);i++)
        {
           if(el>arr[i])
           {
               res=el;
           }
          else if(el<arr[i])
          {
              res=arr[i];
          }
 
        }
        
        var r=Object.entries(obj);
        for(let i=0;i<r.length;i++)
        {
            var subArr=r[i];
            for(let i=1;i<subArr.length;i++)
            {
                if(subArr[i]==res)
                {
                    process.stdout.write(""+subArr[i-1]);
                }
            }
        }
        
  
    });
   
});

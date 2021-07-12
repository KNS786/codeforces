process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
    inputString=data;
    inputString=inputString.split('\n').filter(el=>el!='');
    console.log(inputString);
    for(let i=1;i<inputString.length;i++)
    {
        //take only the array elemst
        if(i%2==0)
        {
            //arr
           var arr=inputString[i].split(' ').map(el=>parseInt(el));
            console.log(arr);
        
     
          }
    }
    
    
   var newArr=[];
    var check=arr[0];
    newArr.push(check);
    let gets=0;
    for(let j=arr.length-1;j>=1;j--)
    {
        if(check==arr[j]&&newArr.length==1)
        {
            
            newArr.unshift(arr[j]);
        }
        else if(check>arr[j]&&newArr.length==1)
        {
           
            newArr.unshift(arr[j]);
        }
    
    }
       
});


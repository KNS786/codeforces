process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
      inputString+=data;
      inputString=inputString.split('\n');
        let length=inputString[0];
        let arr=inputString[1].split(' ').map(el=>parseInt(el,10));
        let check=inputString[2];
        arr.sort((a,b)=>a-b);
        let count=0;
        for(let i=0;i<arr.length;i++)
        {
            if(check<=arr[i])
            {
              count++;
            }
        }
        process.stdout.write(""+count);
  
});

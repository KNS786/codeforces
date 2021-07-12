process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data)
{
    inputString+=data;
    inputString=inputString.split('\n');
    var length=inputString[0].split(' ').map(el=>parseInt(el));
    var k=length[1];
    var arr=inputString[1].split(' ').map(el=>parseInt(el));
    
    count=0;
   for(i=0;i<(arr.length)-1;i++)
    for(j=i+1;j<(arr.length);j++)
        if((arr[i]+arr[j])%k==0)
            count++;

    console.log(count);
})
       
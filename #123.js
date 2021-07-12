process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
    inputString=data;
    inputString=inputString.split('\n').filter(el=>el!=='');
   var [k,arr,newArr]=inputString;
   k=k.split(' ').map(el=>parseInt(el))[1];
    arr=arr.split(' ').map(el=>parseInt(el));
      newArr=newArr.split(' ').map(el=>parseInt(el));
      let res,
      dat=[];
      for(let i=0;i<newArr.length;i++){
              res=GetValues(arr,newArr[i],k);
             dat.push(res);
        }
     console.log(dat.join(' '))
      
});

function GetValues(arr,newArr,k){
      arr.push(newArr);
    let val=Math.max(...arr)
    return val;
}
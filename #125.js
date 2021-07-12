process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
    inputString+=data;
    inputString=inputString.split('');
  let arr=inputString;
  var obj={
      '(':')'
      
  };
    var res,i=0,error=0;
    
    if(arr.length%2==1)console.log("no");
    else{res=arr.length/2}
      while(i<res){
        if(obj[arr[i]]!==arr[arr.length-i-1]){
            ++error;
        }
        ++i;
    }
   if(error){console.log('no')}
   else{console.log('yes')}
    
});

/*    i.(())  //yes
      ii.((())))) //No
	  (...iii).etc
	  */
	  

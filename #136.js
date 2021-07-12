process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentline=0;
process.stdin.on('data',function(data0{
	inputString+=data;
	inputString=inputString.split('\n');
	console.log(inputString);
	var matrixcall=MatixCall(inputString);
	console.log(matrixcall);
	
})
function MatrixCall(arr){
	var newarr=[];
	for(let i=0;i<arr.length;i++){
		 newarr[i]=arr.split(' ');
    }
	var count=0;
	for(let i=0;i<newarr.length;i++){
		for(let j=0;j<newarr.length;j++){
			if(((newarr[i][j]=='a')||(newarr[i][j]='e')||(newarr[i][j]=='i')||(newarr[i][j]=='o')||(newarr[i][j]=='u'))||0)
				 ++count;
			 else break;
		}
	}
	return((count===5)?count:0)
}
	
	
	
	
	
	
	
	
	
	
	
	
	
process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentline=0;
process.stdin.on('data',function(data){
	inputString+=data;
	inputString=inputString.split('\n').filter(el=>el!=='');

	var matrixcall=MatixCall(inputString);
	console.log(matrixcall);
	
})
function MatixCall(arr){
	var newarr=[];var res=[]
	
    for(let i=0;i<arr.length;i++)
    {
        newarr[i]=arr[i].split(' ');
    }
    
    var obj={
        'a':'a',
          'e':'e',
            'i':'i',
            'o':'o',
            'u':'u'
    };
    var t=Object.keys(obj);
    
   var res=[];
   for(let j=0;j<newarr.length;j++)
   {
      for(let k=0;k<newarr.length;k++)
      {
       cal=obj[newarr[j][k]]?obj[newarr[j][k]]:0;

       if(cal){
           res.push(cal);
       }
        
      }
     
   }
      
      var doubl1=new Set(res);
      var ress=[...doubl1]
    return (ress.length===doubl1.length)?"1":"0";
      
  
      
      
    
    

}
	
	
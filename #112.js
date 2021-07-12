process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentline=0;

process.stdin.on('data',function(data){
	inputString+=data;
	inputString=inputString.split('\n').filter(el=>el!=='')[0];
	var  arrow_marks=['I','II','III',"IV",'V','VI','VIII','IX','X'];
	
	  if(inputString.match(/[^1-9]/gi)){
	       for(let i=0;i<arrow_marks.length;i++)
	       {
	       if(arrow_marks[i]==inputString){
	         console.log(arrow_marks.indexOf(inputString)+1);
	       }
	      
	       }
 
	  }
	  else{
	      console.log("-1");
	  }

});


/*Wondar land*/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
	inputString+=data;
    main(inputString);
});
function main(str)
{
	str=str.split('\n').filter(el=>el!=='\n'&&el!=='').join('');
	var obj={};
	let count=1;
	for(let i=1;i<=str.length;i++)
	{
	    obj[str[i-1]]=obj[str[i-1]]?obj[str[i-1]]+1:1;
	    
	}
	let res=Object.values(obj);
	
      for(let i=0;i<res.length-1;i++)
      {
          if(res[i]==res[i+1])count++;
          
      }
      if(res.length===count)console.log('wondar');
      else console.log('-1');

}


/*
 i/p: aabbcc   o/p:Wonder
 i/p: aaabc    o/p:-1
 
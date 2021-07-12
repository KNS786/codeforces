var brackest={
	'(':')',
	'{':'}',
	'[':']'
};

module.exports=(string)=>{
	  var stack=[];
	  for(var i=0;i<string.length;i++)
	  {
		  if(brackest[stack[stack.length-1]]===string[i])
		  {
			  stack.pop();
		  }
		  else{
			  stck.push(string[i]);
		  }
	  }
return !stack.length;
};

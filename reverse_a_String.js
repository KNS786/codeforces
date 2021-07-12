/*this isn For geeks for Geeks Solution*/

/*Ex:String=(i/p)=>"hello.this.is.new"
      string=(o/p)=>"new.is.this.hello"*/

function StringValues(str)
{
   let i=0;
    let obj={
		  dot:'.'
	};
	var stack=[];
	for(let i=str.length;i>0;i--)
	{
	    if(str[i]===obj[dot]){
			stack.push(str[i])
		}
		else{
			stack.push(str[i])
		}
	}
	console.log(stack);
}
StringValues("hello.this.is.new");







			  
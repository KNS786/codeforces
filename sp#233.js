function isPrime(n){
	for(var i=2;i<n;i++)
		if(n%i===0)return false;
	return n>1;
}
function main(){
	var t=readline();
	var n;
	for(let i=0;i<t;i++)
	{n=readline();
       if(isPrime(n))
          print("YES");
        else
           print("NO");
           
	}
}
main();

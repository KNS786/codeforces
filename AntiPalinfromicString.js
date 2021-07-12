/*hackerrank Antipaplindromic string*/
function pow(base,exp)
{
	var res=1;
	while(exp)
	{
		if(exp&1)
		   result=base*(res%(1000000007));
	   exp=exp>>1;
	   base=base*base;
	}
	return res;
}
function compute(n,m)
{
	if(n==1)
	return m;
     if(m==1)return 0;
	 if(m==2 && n==2)return 2;
	 if(m==3)return 6;
	 return m*(m-1)*(pow(m-2),(n-2))%(pow(10,9)+7);
}

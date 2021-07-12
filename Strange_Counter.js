function StrangeCounter(t)
{
	let rem=3;
	while(t>rem)
		
		{
			t=t-rem;
	rem*=2;
		}
		
	console.log(rem-t+1);
	
}

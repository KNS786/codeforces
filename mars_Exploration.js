function MarsExploration(str)
{
	var count=0;
	var sourceString="SOS";
	for(let i=0;i<str.length;i++)
	{
		if(str.charAt(i)!==sourceString.charAt(i%3))
			count++;
	}
	return count;
}
MarseExploration("SOSSTP")//2
MarseExpoloartion("SOSTYTY")//4

  
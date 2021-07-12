function MinimumAbsoluteDiff(array)
{
	var n=array.length;
	var res=[];
	var [first,...second]=array;
	
	var sum=0;
	for(var j=0;j<second.length;j++)
	{
	var i=0
	while(i<second.length)
	{
		sum=Math.abs(first-second[i]);
		res.push(sum);
		++i;
	}
	first=second.splice(1,j);
	}
	return Math.min(...res);
}
MinimumAbsoluteDiff([3,-7,0]);
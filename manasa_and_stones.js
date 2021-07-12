/*hackerrank Manasa and Stones*/
function Manasa_and_stones(n,a,b)
{
	
	let  nums=[],
	  high,low;
	if(a===b)
	{
		return [a*(n-1)];
	}
	if(a>b)
	{
		high=a;
		low=b;
	}
	else{
		high=b;
		low=a;
	}
	nums.push(low*(n-1));
	for(let i=1;i<n;i++)
	{
		nums.push(nums[i-1]-low+high);
	}
	return nums;
}

	
		
function continuseSubArraySum(arr)
{
    var res=[];
    res[0]=0;
    for(let i=0;i<arr.length;i++)
    {
        res[i+1]=res[i]+arr[i];
        
    }
    var sum=[];
    for(let i=1;i<=res.length/2;i++)
     {
         let j=res.length-i;
         sum[i-1]=~~(res[i-1]+res[j]);
         
     }
    console.log(sum);
    console.log(Math.min(...sum));
    
    
}

//continuseSubArraySum([-2,-1,0,1,2]);
// continuseSubArraySum([9,1,1,1,3,4,5,6]);
 continuseSubArraySum([1,2,3,4,5,56,6,7,78,89,89,80,90]);
 
 
  
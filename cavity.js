/*cavity map*/
'use strict';
function CavityMap(array )
{
	for(let i = 1; i < grid.length-1; i++){
        let nums = grid[i].split(``);
        for(let j = 1; j < nums.length-1; j++){
            
            if(nums[j] > grid[i-1].charAt(j) &&
            nums[j] > nums[j+1] &&
            nums[j] > grid[i+1].charAt(j) &&
            nums[j] > nums[j-1]) {
                nums[j] = `X`;
            }
        }
        grid[i] = nums.join(``);
    }
    return grid;
}


module.exports=CavityMap;

			  
/**
 *Do not return anything, modify nums in-place instead.
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 */
function rotate(nums: number[], k: number): void {
    let y = nums[0] // 1 
    let count = 0
    while (count < k) {
        for (let i = 1; i < nums.length; i++) {
            let x = nums[i] // 2 
            nums[i] = y; // 2 = 1 
            y = x // 2
        }
        nums[0] = y
        count++
    }
    console.log(nums.join(","))
};

rotate([1,2,3,4,5,6,7], 3)
rotate([-1,-100,3,99], 2)
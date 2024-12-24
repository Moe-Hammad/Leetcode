/**
 *Do not return anything, modify nums in-place instead.
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 */
 function rotate(nums: number[], k: number): void {
    if (nums.length <= 1 || k % nums.length === 0) {
        // Kein Rotieren notwendig
        return;
    }
    k = k % nums.length; // rotationssparend
    const part1 = nums.slice(-k);
    const part2 = nums.slice(0, nums.length - k);
    nums.splice(0, nums.length, ...part1, ...part2); 
}

rotate([1,2,3,4,5,6,7], 3)
rotate([-1,-100,3,99], 2)
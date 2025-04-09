


function searchInsert(nums: number[], target: number): number {
    if (nums.length === 0) {
        return 0;
    }

    if (nums[nums.length - 1] < target) {
        return nums.length;
    }

    let start = nums[0];
    let end = nums[nums.length - 1];
    let mid = nums[Math.floor(nums.length - 1 / 2)]

    if (target == mid) {
        return nums[Math.floor(nums.length - 1 / 2)];
    }

    while (start < end) {

        if (target < mid) {
            start = nums[0]
            end = nums[Math.floor(nums.length - 1 / 2)]
        }
        else if (target > mid) {
            start = nums[Math.floor(nums.length - 1 / 2)]
            end = nums[nums.length - 1]
        }
        else {
            return start;
        }

    }
    return start;

};
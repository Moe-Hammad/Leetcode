function removeElement(nums: number[], val: number): number {
    let vorne = 0;
    let hinten = nums.length - 1;

    while (vorne <= hinten) {
        if (nums[vorne] == val) {
            nums[vorne] = nums[hinten];
            nums[hinten] = val;
            hinten--; 
        } else {
            vorne++; 
        }
    }
    return vorne;
}

// Ausageb 2 
console.log(removeElement([5, 4 ,3, 1, 2, 3], 3))
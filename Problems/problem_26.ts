function removeDuplicates(nums: number[]): number {
    
    // Empty Array
    if (nums.length === 0) {
        return 0; 
    }

    let index = 1;  
    for (let i = 1; i < nums.length; i++) {
        // If the current element is different from the previous one
        if (nums[i] !== nums[i - 1]) {
            nums[index] = nums[i];  // Place the new unique element at the correct position
            index++;  // Increment the index for the next unique element
        }
    }
    return index;  // The number of unique elements
}


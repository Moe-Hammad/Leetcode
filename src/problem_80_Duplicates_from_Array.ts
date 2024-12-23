function removeDuplicates(nums: number[]): number {
    let writeIndex = 2;


    for (let i = 2; i < nums.length; i++) {
        // Vergleiche das aktuelle Element mit dem Element, das zwei Plätze vorher steht
        if (nums[i] !== nums[writeIndex - 2]) {
            nums[writeIndex] = nums[i]; // Schreibe das aktuelle Element an die writeIndex-Position
            writeIndex++;
        }
    }

    return writeIndex; 
}

removeDuplicates([1, 1, 1, 2, 2, 4, 3])
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // arr + arr2 = arr3 --> Zahlen-> mittelwert
    let num3 = nums1.concat(nums2) 

    let count = 0; 

    for(let i = 0; i < num3.length; i++){
        count += num3[i]
    }

    return count / num3.length
};
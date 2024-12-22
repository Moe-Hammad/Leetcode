function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const num3 = nums1.concat(nums2);
    num3.sort((a, b) => a - b);
    const n = num3.length;
    if (n % 2 === 0) {
        return (num3[n / 2 - 1] + num3[n / 2]) / 2;
    } else {
        return num3[Math.floor(n / 2)];
    }
}
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let y = m + n - 1; // Stelle die verändert wird
    let x = n - 1; // Größe des Arrays 2
    let i = m - 1; // Größe der belegten Stellen in Arrays 1 
    
    while (x >= 0) {
        if (i >= 0 && nums1[i] > nums2[x]) {
            nums1[y] = nums1[i];
            i--;
        } else {
            nums1[y] = nums2[x];
            x--;
        }
        y--;
    }
};

merge([0], 0, [1], 1); // [1]
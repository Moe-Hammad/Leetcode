function majorityElement(nums: number[]): number {
    let hash = new Map<number, number>()
    nums.forEach((num: number, index) => {
        if (hash.get(num) === undefined) {
            hash.set(num, 1)
        } else {
            let x: number = hash.get(num)!
            hash.set(num, ++x)
        }
    })

    let x = 0
    hash.forEach((value, key) => {
        if(value > nums.length / 2){
            x = key
        }
    });
    return x
};

majorityElement([3, 2, 3])
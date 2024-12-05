// 双指针法：快慢指针
function removeElement(nums: number[], val: number): number {
    let slowIndex = 0, fastIndex = 0;

    while(fastIndex < nums.length) {
        if(nums[fastIndex] !== val) {
            // slowIndex++的含义是：将快指针所指向的元素复制到慢指针所指向的位置，并将慢指针向前移动一位。
            // 等同于 nums[slowIndex++] = nums[fastIndex];

            nums[slowIndex] = nums[fastIndex];
            slowIndex++;
        }
        fastIndex++;
    }

    return slowIndex;
};

// 时间复杂度：O(n)
// 空间复杂度：O(1)

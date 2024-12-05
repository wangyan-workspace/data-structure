// 暴力解法 O(n + nlog n)
function sortedSquares(nums: number[]): number[] {
    return nums.map(i => i * i).sort((a, b) => a - b);
};

// 双指针法 js版
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares1 = function (nums) {
    let n = nums.length;
    let res = new Array(n).fill(0); // 创建一个跟当前数组长度一样的数组
    let i = 0, j = n - 1, k = n - 1;

    while (i <= j) {
        let left = nums[i] * nums[i], right = nums[j] * nums[j];

        if (left < right) {
            res[k--] = right;
            j--;
        } else {
            res[k--] = left;
            i++;
        }
    }
    return res;
};

// 双指针法 ts版
function sortedSquares2(nums: number[]): number[] {
    const ans: number[] = [];
    let left = 0, right = nums.length - 1;

    while(left <= right) {
        // 右侧的元素不需要取绝对值，nums 为非递减排序的整数数组
        // 在同为负数的情况下，左侧的平方值一定大于右侧的平方值
        if (Math.abs(nums[left]) > nums[right]) {
            // 使用 Array.prototype.unshift() 直接在数组的首项插入当前最大值
            ans.unshift(nums[left] ** 2); // ** 2表示将nums[left]这个数平方‌
            left++;
        } else {
            ans.unshift(nums[right] ** 2);
            right--;
        }
    }

    return ans;
};

// 时间复杂度为O(n)

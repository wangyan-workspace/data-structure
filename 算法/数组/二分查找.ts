// 方案一：左闭右闭区间
function search(nums: number[], target: number): number {
    let mid:number, left: number = 0, right: number = nums.length - 1;

    while(left <= right) {
        // 位运算 + 防止大数溢出
        // >> 1：将区间长度右移一位，相当于除以2（整数除法），得到中间位置相对于左边界的偏移量
        // left + ...：将偏移量加到左边界上，得到中间位置的索引。
        mid = left + ((right - left) >> 1); 

        if(nums[mid] < target) {
            left = mid + 1;
        } else if(nums[mid] > target) {
            right = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
};

// 方案二：左闭右开区间
function search1(nums: number[], target: number): number {
    let mid:number, left: number = 0, right: number = nums.length;

    while(left < right) {
        // 位运算 + 防止大数溢出
        // >> 1：将区间长度右移一位，相当于除以2（整数除法），得到中间位置相对于左边界的偏移量
        // left + ...：将偏移量加到左边界上，得到中间位置的索引。
        mid = left + ((right - left) >> 1);

        if(nums[mid] < target) {
            left = mid + 1;
        } else if(nums[mid] > target) {
            right = mid;
        } else {
            return mid;
        }
    }

    return -1;
};

// 时间复杂度：O(log n)
// 空间复杂度：O(1)
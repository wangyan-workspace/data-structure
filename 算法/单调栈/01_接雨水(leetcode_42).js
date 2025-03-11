var trap = function (height) {
  let len = height.length;
  if (len <= 2) return 0;

  let maxLeft = new Array(len).fill(0);
  let maxRight = new Array(len).fill(0);

  maxLeft[0] = height[0];
  for (let i = 1; i < len; i++) {
    maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);
  }

  maxRight[len - 1] = height[len - 1];
  for (let i = len - 2; i >= 0; i--) { // 注意✨：i >= 0
    maxRight[i] = Math.max(height[i], maxRight[i + 1]);
  }

  let sum = 0;
  for (let i = 0; i < len; i++) {
    let count = Math.min(maxLeft[i], maxRight[i]) - height[i];
    if (count) sum += count;
  }

  return sum;
};

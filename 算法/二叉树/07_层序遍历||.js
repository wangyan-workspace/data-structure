/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let res = [];
    let queue = [];

    if(root === null) return res;
    queue.push(root);

    while(queue.length) {
        // 计算当前层级节点数量
        let length = queue.length;
        // 存放当前层级节点数组
        let currentLeval = [];

        for(let i = 0; i < length; i++) {
            let node = queue.shift();
            // 把当前层节点存入curLevel数组
            currentLeval.push(node.val);
            // 把下一层级的左右节点存入queue队列
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

        // 从数组前头插入值，避免最后反转数组，减少运算时间
        res.unshift(currentLeval);
    }

    return res;
};
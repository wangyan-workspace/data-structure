import { btPrint } from 'hy-algokit';

// 定义树节点
class TreeNode<T> {
    value: T; // 当前节点的值
    left: TreeNode<T> | null = null; // （当前节点的）左节点
    right: TreeNode<T> | null = null; // （当前节点的）右节点
    parent: TreeNode<T> | null = null; // （当前节点的）父节点

    constructor(value: T) {
        this.value = value;
    }

    // 判断是否是父节点的左子节点
    get isLeft() {
        return !!(this.parent?.left === this);
    }

    // 判断是否是父节点的右子节点
    get isRight() {
        return !!(this.parent?.right === this);
    }
}

// 定义二叉树
class BSTree<T> {
    root: TreeNode<T> | null = null; // 根节点

    // 插入操作（向树中插入一个新的数据）
    insert(value: T) {
        // 根据传入的value创建新的TreeNode节点
        const newNode = new TreeNode(value);

        // 判断当前是否有根节点
        if (this.root) {
            this.insertNode(this.root, newNode); // 递归实现
        } else {
            this.root = newNode;
        }
    }

    // 具体的插入节点的处理逻辑
    insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
        if (node.value > newNode.value) { // 向左子树中插入
            // 判断当前是否有左节点
            if (node.left) {
                this.insertNode(node.left, newNode);
            } else {
                node.left = newNode;
            }
        } else { // 向右子树中插入
            // 判断当前是否有右节点
            if (node.right) {
                this.insertNode(node.right, newNode);
            } else {
                node.right = newNode;
            }
        }
    }


    // 遍历操作
    // 先序遍历 根-> 左 -> 右
    preOrderTraverse() {
        this.preOrderTraverseNode(this.root);
    }

    private preOrderTraverseNode(node: TreeNode<T> | null) {
        if (node) {
            console.log(node.value);
            this.preOrderTraverseNode(node.left);
            this.preOrderTraverseNode(node.right);
        }
    }

    // 中序遍历 左-> 根 -> 右
    inOrderTraverse() {
        this.inOrderTraverseNode(this.root);
    }

    private inOrderTraverseNode(node: TreeNode<T> | null) {
        if (node) {
            this.inOrderTraverseNode(node.left);
            console.log(node.value);
            this.inOrderTraverseNode(node.right);
        }
    }

    // 后序遍历 左-> 右 -> 根
    postOrderTraverse() {
        this.postOrderTraverseNode(this.root);
    }

    private postOrderTraverseNode(node: TreeNode<T> | null) {
        if (node) {
            this.postOrderTraverseNode(node.left);
            this.postOrderTraverseNode(node.right);
            console.log(node.value);
        }
    }

    // 层序遍历
    levelOrderTraverse() {
        if (!this.root) {
            return;
        }

        // 创建队列结构
        const queue: TreeNode<T>[] = [];
        // 将根节点加入队列
        queue.push(this.root);

        // 遍历队列中的所有节点（依次出队）
        while (queue.length) {
            // 访问节点的过程
            const current = queue.shift()!;
            console.log(current.value);

            // 将左节点插入队列
            if (current.left) {
                queue.push(current.left);
            }
            // 将右节点插入队列
            if (current.right) {
                queue.push(current.right);
            }
        }
    }

    // 查找操作
    // 获取树中最大值/数据
    getMaxValue(): T | null {
        let current = this.root;

        while (current && current.right) {
            current = current.right;
        }

        console.log(current?.value ?? null);
        return current?.value ?? null;
    }

    // 获取树中最小值/数据
    getMinValue(): T | null {
        let current = this.root;

        while (current && current.left) {
            current = current.left;
        }

        console.log(current?.value ?? null);
        return current?.value ?? null;
    }

    // 搜索
    // 在树中查找一个数据，如果存在，则返回true，如果不存在，则返回false
    search(value: T): boolean {
        if (!this.root) {
            return false;
        }
        console.log(!!this.searchNode(value));
        return !!this.searchNode(value);
    }

    private searchNode(value: T): TreeNode<T> | null {
        let current = this.root;
        let parent: TreeNode<T> | null = null;

        while (current) {
            // 如果找到直接返回
            if (current.value === value) {
                return current;
            }

            // 继续往下找
            parent = current;
            // 判断要去左边找还是去右边找
            if (current.value > value) {
                current = current.left;
            } else {
                current = current.right;
            }

            // 如果current有值，那么current保存自己的父节点
            if (current) {
                current.parent = parent;
            }
        }

        return null;
    }

    // 删除操作
    // 从树中移除某个数据
    remove(value: T): boolean {
        // 1、搜索树中是否有值为value的节点
        const current = this.searchNode(value);

        if (!current) {
            return false;
        }

        // 定义一个新的节点，用于接替被删掉节点链接到上一个节点
        let replaceNode: TreeNode<T> | null = null;

        // 2、若删除的节点是叶子节点
        if (current.left === null && current.right === null) {
            replaceNode = null
        } else if (current.right === null) { // 要删除的节点只有一个字节点，并且该子节点是左子节点
            replaceNode = current.left;
        } else if (current.left === null) { // 要删除的节点只有一个字节点，并且该子节点是右子节点
            replaceNode = current.right;
        } else {
            // 要删除的节点只有两个字节点
            // 删除的节点有两个字节点
            // 方式一：去左边找一个比current节点小的节点，但是是我左子树中最大的节点，找到的该节点称之为前驱节点
            // 方式二：去右边找一个比current节点大的节点，但是是我右子树中最小的节点，找到的该节点称之为后继节点
            const successor = this.getSuccessor(current);
            replaceNode = successor;
        }

        // 将删除掉的值用replaceNode进行链接
        if (this.root === current) {
            this.root = replaceNode;
        } else if (current.isLeft) {
            current.parent!.left = replaceNode;
        } else {
            current.parent!.right = replaceNode;
        }

        return true;
    }

    // 寻找后继节
    private getSuccessor(delNode: TreeNode<T>): TreeNode<T> {
        let current = delNode.right;
        let successor: TreeNode<T> | null = null;

        while (current) {
            successor = current;
            current = current.left;

            // 目的是对后继节点successor的parent赋值
            if (current) {
                current.parent = successor;
            }
        }

        // 将删除节点的left赋值给后继节点的left
        successor!.left = delNode.left;

        // 将删除节点的right赋值给后继节点的right(如果找到的后继节点正好是删除节点的右子节点，则什么都不用做，因为直接就链接上了)
        if (successor !== delNode.right) {
            // 针对于找到的后继节点有右子节点的特殊情况，后继节点放到了删除节点的位置，那其对应的右子节点需要放到后继节点的位置
            successor!.parent!.left = successor!.right;
            successor!.right = delNode.right;
        }

        return successor!;
    }
}

const bst = new BSTree<number>();

bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(19);
bst.insert(25);
btPrint(bst.root);

// bst.preOrderTraverse();

// bst.inOrderTraverse();

// bst.postOrderTraverse();

// bst.levelOrderTraverse();

// bst.getMaxValue();

// bst.getMinValue();

// bst.search(15); // true
// bst.search(19); // true
// bst.search(26); // false
// bst.search(2); // false

bst.remove(15);
btPrint(bst.root);

bst.remove(8);
btPrint(bst.root);

bst.remove(18);
btPrint(bst.root);

bst.remove(11);
btPrint(bst.root);

bst.remove(7);
btPrint(bst.root);

export { }
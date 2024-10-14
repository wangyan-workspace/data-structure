class LinkNode { // 定义链表节点
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var MyLinkedList = function () { // 定义链表
  this.head = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {LinkNode}
 */
MyLinkedList.prototype.getNode = function (position) { // 获取指定索引的节点
  let cur = this.head; // 定义当前节点
  let index = 0; // 定义索引

  while (index++ < position && cur) {
    // 遍历到指定位置
    cur = cur.next;
  }

  return cur; // 返回当前节点
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (position) {
  // 获取指定索引的节点值
  if (position < 0 || position > this.size - 1) return -1;

  return this.getNode(position).val; // 返回节点值
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  // 在链表头部添加节点
  let node = new LinkNode(val);
  node.next = this.head; // 将新节点指向头节点
  this.head = node; // 将头节点指向新节点

  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  // 在链表尾部添加节点
  let node = new LinkNode(val);

  if (!this.head) {
    // 链表为空
    this.head = node;
  } else {
    // 链表不为空
    let cur = this.head; // 定义当前节点
    while (cur.next) { // 遍历到尾部
      cur = cur.next;
    }
    cur.next = node; // 添加到尾部
  }
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  // 在指定索引处添加节点
  if (index < 0 || index > this.size) return;

  let node = new LinkNode(val);
  if (index === 0) {
    node.next = this.head; // 将新节点指向头节点
    this.head = node; // 将头节点指向新节点
  } else {
    let pre = this.getNode(index - 1);
    node.next = pre?.next; // 将新节点指向前一节点的下一个节点
    pre.next = node; // 将前一个节点指向新节点
  }

  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  // 删除指定索引处的节点
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next; // 将头节点指向下一个节点
  } else {
    let pre = this.getNode(index - 1);
    pre.next = pre.next?.next ? pre.next.next : null; // 将前一个节点指向下一个节点的下一个节点
  }

  this.size--;
};

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
console.log("myLinkedList-addAtHead", myLinkedList);
myLinkedList.addAtTail(3);
console.log("myLinkedList-addAtTail", myLinkedList);
myLinkedList.addAtIndex(1, 2); // 链表变为 1->2->3
console.log("myLinkedList-addAtIndex", myLinkedList);
myLinkedList.get(1); // 返回 2
console.log("myLinkedList-get", myLinkedList);
myLinkedList.deleteAtIndex(1); // 现在，链表变为 1->3
console.log("myLinkedList-deleteAtIndex", myLinkedList);
myLinkedList.get(1); // 返回 3
console.log("myLinkedList-get", myLinkedList);

myLinkedList.addAtTail(3);
console.log("myLinkedList-addAtTail", myLinkedList);
myLinkedList.get(0); 
console.log("myLinkedList-get", myLinkedList);

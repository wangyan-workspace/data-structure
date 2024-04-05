// 347. 前 K 个高频元素

/*
    思路：
    1、要统计元素出现频率
    2、对频率排序
    3、找出前K个高频元素
*/

/*
    时间复杂度: O(nlogk)
    空间复杂度: O(n)
*/

function topKFrequent(nums: number[], k: number): number[] {
    const countMap: Map<number, number> = new Map();

    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    console.log('countMap', countMap); // countMap Map(3) { 1 => 3, 2 => 2, 3 => 1 }
    console.log('处理Map', countMap.entries()); // 处理Map [Map Entries] { [ 1, 3 ], [ 2, 2 ], [ 3, 1 ] }
    console.log('排序', [...countMap.entries()].sort((a, b) => b[1] - a[1])); // 排序 [ [ 1, 3 ], [ 2, 2 ], [ 3, 1 ] ]
    console.log('取值', [...countMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, k)); // 取值 [ [ 1, 3 ], [ 2, 2 ] ]
    console.log('拿到对应的元素', [...countMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(i => i[0])); // 拿到对应的元素 [ 1, 2 ]
    
    // ts没有最小堆数据结构，所以直接对整个数组进行排序，取前K个元素
    return [...countMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(i => i[0]);
};

topKFrequent([1, 1, 1, 2, 2, 3], 2);

// 补充
/*
    在JavaScript中，Object.entries() 方法是用于返回给定对象自身可枚举属性的键值对数组。
    这个方法返回一个包含给定对象自身可枚举属性键值对的数组。
    下面是 Object.entries() 方法的基本语法：
*/ 

// Object.entries(obj)

// 这里的 obj 是要转换为键值对数组的对象。

// 以下是一个示例，演示了如何使用 Object.entries() 方法：
const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const entries = Object.entries(obj);

console.log(entries);

// 上述示例将会输出：
// [
//     ['name', 'John'],
//     ['age', 30],
//     ['city', 'New York']
// ]
  
/*
    在JavaScript中，sort()方法是用于对数组进行排序的方法。它可以接受一个可选的比较函数作为参数，用于指定排序的规则。

    如果没有传递比较函数，sort()方法会默认将数组元素转换为字符串，然后按照Unicode字符顺序进行排序。
    这通常会导致不符合预期的排序结果，特别是当数组包含数字时。

    为了按照自定义规则对数组进行排序，可以传递一个比较函数作为sort()方法的参数。
    比较函数接受两个参数，通常称为a和b，分别代表待比较的两个数组元素。
    比较函数需要返回一个负数、零或正数，分别表示a应该在b之前、a和b相等、或a应该在b之后。

    下面是一个简单的示例，演示如何使用sort()方法：
*/ 

// 数字数组按升序排序的示例
const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // 输出: [1, 2, 3, 4, 5]

// 字符串数组按字母顺序排序的示例
const strings = ['banana', 'apple', 'orange', 'grape'];
strings.sort();
console.log(strings); // 输出: ['apple', 'banana', 'grape', 'orange']

// 自定义排序规则的示例
const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Doe', age: 35 }
];
people.sort((a, b) => a.age - b.age); // 按年龄升序排序
console.log(people);
// 输出:
// [
//   { name: 'Jane', age: 25 },
//   { name: 'John', age: 30 },
//   { name: 'Doe', age: 35 }
// ]
// 在这个示例中，我们使用了箭头函数作为比较函数，并根据不同的排序规则来排序数字数组、字符串数组和包含对象的数组。
  
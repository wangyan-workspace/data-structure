/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    /**
     * 
     * @param {*} row 遍历的行
     * @param {*} col 遍历的列
     * @param {*} val 当前填入的值
     * @param {*} board 数独，二维数组
     * @returns 
     */
  const isValid = (row, col, val, board) => {
    let len = board.length; // 数独的长度

    // 行不能重复
    for (let i = 0; i < len; i++) { // 遍历当前行的每一项，判断是否有跟当前值重复的
      if (board[row][i] === val) { // 如果有重复的，则返回false
        return false;
      }
    }

    // 列不能重复
    for (let i = 0; i < len; i++) { // 遍历当前列的每一项，判断是否有跟当前值重复的
      if (board[i][col] === val) { // 如果有重复的，则返回false
        return false;
      }
    }

    // 每一个以粗实线分隔的 3x3 宫内只能出现一次
    let startRow = Math.floor(row / 3) * 3; // 当前3x3宫格的起始行
    let startCol = Math.floor(col / 3) * 3; // 当前3x3宫格的起始列

    for (let i = startRow; i < startRow + 3; i++) { // 遍历当前3x3宫格的每一行
      for (let j = startCol; j < startCol + 3; j++) { // 遍历当前3x3宫格的每一列
        if (board[i][j] === val) { // 如果有跟当前值重复的，则返回false
          return false;
        }
      }
    }

    return true; // 如果没有重复的，则返回true
  };
  const backtracking = () => {
    for (let i = 0; i < board.length; i++) { // 遍历整个数独的每一行
      for (let j = 0; j < board[0].length; j++) { // 遍历当前行的每一项
        if (board[i][j] !== ".") continue; // 如果当前项不是空格，则跳过

        for (let val = 1; val <= 9; val++) { // 遍历1到9的每一个数字，判断是否可以填入当前项
          if (isValid(i, j, `${val}`, board)) { // 如果可以填入，则将当前项填入
            board[i][j] = `${val}`;

            if (backtracking()) { // 如果递归调用成功，找到解法，则返回true
              return true;
            }
            board[i][j] = `.`; // 回溯，将当前项恢复为空格
          }
        }

        return false; // 如果1到9的每一个数字都不能填入当前项，则返回false
      }
    }
    return true; // 如果遍历完整个数独，没有返回false，则返回true
  };
  backtracking(); // 调用回溯函数，开始解数独
  return board; // 返回解法
};

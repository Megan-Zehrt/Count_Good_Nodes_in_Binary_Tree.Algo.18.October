// 1448. Count Good Nodes in Binary Tree



// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.







/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    
    let count = 0

    function dfs(node, x){

        if(node == null) return

        if(node.val >= x){
            count++
        }

        x = Math.max(x, node.val)

        dfs(node.left, x)
        dfs(node.right, x)
    }

    dfs(root, -Infinity)

    return count
};
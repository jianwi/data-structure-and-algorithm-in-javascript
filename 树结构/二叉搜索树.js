function BinarySearchTree() {

    function Node(key) {
        this.key = key
        this.left = null
        this.right = null
    }

    //属性
    this.root = null
//    方法
//　　插入数据
    BinarySearchTree.prototype.insert = function (key) {
        //     1.创建节点
        let newNode = new Node(key)
        //    2. 判断有没有根节点
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    BinarySearchTree.prototype.insertNode = function (node, newNode) {
        if (newNode.key < node.key) {//向左查找
            if (node.left === null) {
                node.left = newNode
            } else {
                // 尾递归优化
                return this.insertNode(node.left, newNode)
            }
        } else {//向右查找
            if (node.right === null) {
                node.right = newNode
            } else {
                return this.insertNode(node.right, newNode)
            }
        }
    }
//    先序遍历
    BinarySearchTree.prototype.preOrderTraversal = function () {
        this.preOrderTraversalNode(this.root)
    }
    BinarySearchTree.prototype.preOrderTraversalNode = function (node) {
        if (node === null) return
        print(node.key)
    //   继续深入　左子树,　当 node.left === null 时也就停下了
        this.preOrderTraversalNode(node.left)
    //   继续深入　右子树，　当 node.right === null 时停下
        this.preOrderTraversalNode(node.right)
    }

}


function print(info)
{
    console.log(info)
}
// 测试
// 1. 创建BinarySearchTree
let bst = new BinarySearchTree()
let insert_arr = [11,7,15,5,3,9,8,10,13,12,14,20,18,25]
for (let i of insert_arr) {
    bst.insert(i)
}
bst.preOrderTraversal()
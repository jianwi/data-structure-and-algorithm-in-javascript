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
//    中序遍历
    BinarySearchTree.prototype.midOrderTraversal = function () {
        this.midOrderTraversalNode(this.root)
    }

    BinarySearchTree.prototype.midOrderTraversalNode = function (node) {
        if (node === null) return
        //    处理左子树的节点
        this.midOrderTraversalNode(node.left)
        //    每次处理到这里进行压栈，直到压到最小节点，然后开始出栈，从最小节点开始．最后导致root 节点在中间位置
        //    处理节点
        print(node.key)
        //    处理右子树的节点
        this.midOrderTraversalNode(node.right)
    }

//    后序遍历
    BinarySearchTree.prototype.postOrderTraversal = function () {
        this.postOrderTraversalNode(this.root)
    }
    BinarySearchTree.prototype.postOrderTraversalNode = function (node) {
        // 递归终止条件
        if (node === null) return
        this.postOrderTraversalNode(node.left)
        this.postOrderTraversalNode(node.right)
        print(node.key)
    }
    // 获取最小值
    BinarySearchTree.prototype.min = function () {
        let current = this.root
        while (current.left !== null) {
            current = current.left
        }
        return current.key
    }
//    最大值
    BinarySearchTree.prototype.max = function () {
        let current = this.root
        while (current.right !== null) {
            current = current.right
        }
        return current.key
    }
//    搜索
    BinarySearchTree.prototype.search = function (key) {
        let node = this.root
        while (node !== null) {
            if (node.key === key){
                return true
            }else if (node.key < key){
                node = node.right
            }else {
                node = node.left
            }
        }
        return false
    }

}


function print(info) {
    console.log(info)
}

// 测试
// 1. 创建BinarySearchTree
let bst = new BinarySearchTree()
let insert_arr = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25]
for (let i of insert_arr) {
    bst.insert(i)
}
// bst.preOrderTraversal()

// bst.midOrderTraversal()
// bst.postOrderTraversal()

print(bst.min())

print(bst.max())

print(bst.search(122))
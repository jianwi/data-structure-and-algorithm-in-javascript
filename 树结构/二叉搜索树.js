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
            if (node.key === key) {
                return true
            } else if (node.key < key) {
                node = node.right
            } else {
                node = node.left
            }
        }
        return false
    }
    // 删除操作
    BinarySearchTree.prototype.remove = function (key) {
        //    1. 寻找要删除的节点
        //    1.1 记录要删除的节点
        let current = this.root
        //    1.2 要删除节点的父节点
        let parent = null
        let isLeftChild = true
        //    2. 寻找要删除的节点
        while (current.key !== key) {
            parent = current
            if (key < current.key) {
                isLeftChild = true
                current = current.left
            } else {
                isLeftChild = false
                current = current.right
            }
            // 如果　已经找到最后的节点了，但是还是没有找到 key
            if (current === null) return false
        }

        // 2. 根据对应的情况删除节点
        // 2.1 删除的节点是个叶子节点
        if (current.right === null && current.left === null) {
            if (current === this.root) {
                this.root = null
            } else {
                if (isLeftChild) {
                    parent.left = null
                } else {
                    parent.right = null
                }
            }
        }
        // 2.2 删除的节点只有一个子节点
        else if (current.right === null) {// 只存在左子节点
            if (current === this.root) {
                this.root = current.left
            } else if (isLeftChild) {
                parent.left = current.left
            } else {
                parent.right = current.left
            }
        } else if (current.left === null) {//只存在右子节点
            if (current === this.root) {
                this.root = current.right
            } else if (isLeftChild) {
                parent.left = current.right
            } else {
                parent.right = current.right
            }
        }
        // 2.3 删除的节点有两个子节点: 把要删除的节点替换成距离这个节点最近的值即左子树的最大值(后继)和右子树的最小值(前驱)
        else {
            // 获取后继
            let successor = this.getSuccessor(current)
            //    判断根节点
            if (this.root === current) {
                this.root = successor
            } else if (isLeftChild) {
                parent.left = successor
            } else {
                parent.right = successor
            }
            successor.left = current.left
        }

    }
    // 寻找后继
    BinarySearchTree.prototype.getSuccessor = function (delNode) {
        let successorParent = delNode
        let successor = delNode.right

        while (successor !== null) {
            successorParent = successor
            successor = successor.left
        }

        //    3. 如果后继节点不是删除节点的右节点
        if (successor !== delNode.right) {
            successorParent.left = successor.right
            successor.right = delNode.right
        }
        return successor
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

// print(bst.min())

// print(bst.max())

// print(bst.search(122))

bst.remove(25)

// bst.midOrderTraversal()
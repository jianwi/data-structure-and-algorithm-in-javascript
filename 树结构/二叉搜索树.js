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
            this.insertNode(root, newNode)
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
}
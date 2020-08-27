function DoublyLinkedList(){
    this.head = null
    this.tail = null
    this.length = 0

    function Node(data)
    {
        this.prev = null
        this.next = null
        this.data = data
    }

    DoublyLinkedList.prototype.append = function(data)
    {
        let newNode = new Node(data)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }else{
            let current = this.head
            let prev_node = null
            while(current){
                prev_node = current
                current = current.next 
            }
            // 上一个节点指向新节点
            prev_node.next = newNode
            current = newNode
            // 新节点的上一个节点
            current.prev = prev_node
            // tail 指向最后添加的节点
            this.tail = newNode
        }
        this.length += 1
        return newNode
    }

    DoublyLinkedList.prototype.toString = function()
    {
        return this.forwordString()
    }
    DoublyLinkedList.prototype.forwordString = function()
    {
        let current = this.head
        let str = ""
        while(current){
            str += current.data+" "
            current = current.next
        }
        return str
    }
    DoublyLinkedList.prototype.backwordString = function()
    {
        let current = this.tail
        let str = ""
        while(current){
            str += current.data + " "
            current = current.prev
        }
        return str
    }

    DoublyLinkedList.prototype.insert = function(position,data){
        // 边界判断
        if(position<0 || position > this.length) return false
        let newNode = new Node(data)
        let current = this.head
        // 当length 是0 时
        if(this.length === 0)
        {
            this.head = Node
            this.tail = Node
        }else{
            // 给第一个添加时
            if(position === 0)
            {
                // 新元素的 next 指向
                newNode.next = this.head
                this.head = newNode
            }else if(position === this.length){
                // 给最后位置添加时
                current = this.append(data)
            }else{
                // 给中间位置添加
                let index = 0
                while(index++ < position)
                {
                    prev = current
                    current = current.next
                }
                prev.next = newNode
                newNode.next = current
                newNode.prev = prev
            }
        }
        this.length += 1
        return newNode
        }
// removeAt
        DoublyLinkedList.prototype.removeAt = function(position)
        {
            // 边界判断
            if(position<0 || position>=this.length) return false
            let index = 0
            let current = this.head
            if(this.length === 1){
                this.head = null
                this.tail = null
            }else{
                if(position === 0){
                    // head 后面删除
                    current = this.head
                    current.next.prev = null 
                    this.head = current.next
                }else if(position === this.length - 1){
                    // 删除最后一个元素
                    current = this.tail
                    current.prev.next = null
                    this.tail = current.prev
                }else{
                    // 删除中间的
                    let index = 0
                    current = this.head
                    while(index++<position)
                    {
                        prev = current
                        current = current.next
                    }
                    prev.next = current.next
                    current.next.prev = prev
                }
            }
            return current
        }
        // remove
        DoublyLinkedList.prototype.remove = function(data)
        {
            return this.removeAt(this.indexOf(data))
        }
        //get
        DoublyLinkedList.prototype.get = function(position)
        {
            if(position<0 || position >= this.length) return false
            let index = 0
            let current = this.head
            while(index++ < position)
            {
                current = current.next
            }
            return current
        } 
        // indexOf
        DoublyLinkedList.prototype.indexOf = function(data)
        {
            let index = 0
            let current = this.head
            while(current){
                if(current.data === data)
                {
                    return index
                }
                index ++
                current = current.next
            }
            return -1
        }
        // update
        DoublyLinkedList.prototype.update = function(position,data)
        {
            if(position <0 ||position>=this.length) return false
            let index = 0
            let current = this.head
            while(index++ < position)
            {
                current = current.next
            }
            current.data = data
            return current.data
        }
        //  isEmpty
        DoublyLinkedList.prototype.isEmpty = function()
        {
            return this.length === 0
        }
        // size
        DoublyLinkedList.prototype.size = function()
        {
            return this.length
        }

}

// test

let doubly_list = new DoublyLinkedList()
doubly_list.append(12)
doubly_list.append(223)

console.log(doubly_list+"")
console.log(doubly_list.backwordString() )

console.log(doubly_list.insert(0,"第一个"))
console.log(doubly_list.insert(1,"第二个"))

console.log(doubly_list+"")

// console.log(doubly_list.removeAt(0))
// console.log(doubly_list.removeAt(0))



console.log(doubly_list.remove(223))
console.log(doubly_list.update(1,"修改后的第二个元素"))
console.log(doubly_list+"")

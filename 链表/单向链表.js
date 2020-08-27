function LinkedList()
{
    function Node(data)
    {
        this.data = data
        this.next = null
    }
    // head 指向
    this.head = null
    this.length = 0

    // 添加
    LinkedList.prototype.append = function(data)
    {
        // 创建 node
        let newNode = new Node(data)
        // 两种情况
        // 1. 给 head 后面添加。
        if(this.length === 0)
        {
            this.head = newNode
            this.length += 1
        }else{
        // 2. 给 node 后添加
            let current = this.head
            // current.next === null 说明 current 是最后一个节点
            while(current.next)
            {
                current = current.next
            }
            current.next = newNode
            this.length += 1
        }
    }
    LinkedList.prototype.toString = function()
    {
        let str = ""
        let current = this.head
        while(current){
            str += current.data + "  "
            current = current.next
        }
        return str
    }
//  插入节点
    LinkedList.prototype.insert = function(data,position)
    {
        let newNode = new Node(data)
        // 判断一下 position 是否在范围内
        // 等于 length 相当于给最后一个节点插入
        if (position<0 || position > this.length) return false
        
        // 因为 head 直接指向 节点，而节点的 next 属性指向下一个节点，所以分开写
        let current = this.head
        // 插入操作需要修改前一个元素的指向，并把新节点指向原来位置的节点
        let last_node = null
        let index = 0
        // 给 0 位置插入 
        if(position === 0){
            newNode.next = this.head
            this.head = newNode
        }else{
        // 需要判断完后 再 ++，给下一次用
        while(index++ < position)
        {
            last_node = current
            current = current.next
        }
        last_node.next = newNode
        newNode.next = current
    }
        this.length += 1
        return true
    }

    // get
    LinkedList.prototype.get = function(position)
    {
        // 边界判断,不能等于 length，等于length 的时候是 Null,从0开始的嘛
        if (position < 0 ||position >= this.length) return false

        let current = this.head
        let index = 0
        // 判断 index 和 position 关系，++ 是方便下一次的
        while(index++ < position)
        {
            current = current.next
        }
        // 当 index === positon 的时候，已经结束了循环。所有current 还是 last.next。
        return current
    }
    // indexOf
    LinkedList.prototype.indexOf = function(data){
        let current = this.head
        let index = 0
        // 直到 current.next === null 时结束循环
        while(current){
            if(current.data === data){
                return index
            }
            current = current.next
            index += 1
        }
        return -1
    }   
    // removeAt
    LinkedList.prototype.removeAt = function(position)
    {
        // 边界判断
        if(position<0 || position >= this.length) return false

        // 先找到 positon ，修改 last的 next 为 current.next
        let current = this.head
        if(position === 0)
        {
            this.head = current.next    
        }else{
           let prev_node = this.head
           let index = 0
           while(index++ < position){
                prev_node = current
                current = current.next
           }
           prev_node.next = current.next
        }
        this.length -= 1
        return current.data
    }
    // remove
    LinkedList.prototype.remove = function(data)
    {
        let position = this.indexOf(data)
        return this.removeAt(position) 
    }
    // update
    LinkedList.prototype.update = function(position, data)
    {
        // 找到 position ，修改一下值
        // 边界判断
        if(position<0||position>=this.length) return false
        let index = 0
        let current = this.head
        while(index++ < position)
        {
            current = current.next
        }
        current.data = data
        return true
    }
    //  isEmpty
    LinkedList.prototype.isEmpty = function()
    {
        return this.length === 0
    }
    // size
    LinkedList.prototype.size = function()
    {
        return this.length
    }


}

// test

let linked_list = new LinkedList()
linked_list.append(212)
linked_list.append(2333)
linked_list.append("xxx")

linked_list.insert("第一",0)
linked_list.insert("第二",1)
linked_list.insert("第四",3)
console.log(linked_list+"")
console.log(linked_list.get(5))
console.log(linked_list.indexOf("第一"))
console.log(linked_list.indexOf("xxx"))
linked_list.removeAt(1)
console.log(linked_list+"")
linked_list.removeAt(2)

console.log(linked_list+"")

console.log(linked_list.remove("第一"))
console.log(linked_list+"" )

linked_list.update(0,"更新后第一")
console.log(linked_list+"" )
linked_list.update(2,"更新后第三")
console.log(linked_list+"" )

console.log(linked_list.size())


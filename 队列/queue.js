function Queue() {
    this.items = []
    // 1. 队列尾添加元素
    Queue.prototype.enqueue = function (element) {
        return this.items.push(element)
    }

    // 2. 队列头弹出元素
    Queue.prototype.dequeue = function () {
        return this.items.shift()
    }

    // 3. 返回队列中第一个元素
    Queue.prototype.front = function () {
        return this.items[0]
    }

    // 4. 判断队列是否为空
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0
    }

    // 5. 返回队列中包含元素的个数
    Queue.prototype.size = function(){
        return this.items.length
    }

    // 6. toString
    Queue.prototype.toString = function()
    {
        return this.items.join(" ")
    }
}

// test 

let q = new Queue()

q.enqueue("队列1号元素");
q.enqueue("队列2号元素")

console.log(q+"")

q.dequeue()

console.log(q+"")

console.log(q.isEmpty())

console.log(q.size())

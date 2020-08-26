function PriorityQueue() {
    this.items = []

    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }

    // 添加

    PriorityQueue.prototype.enqueue = function (element, priority) {
        // 生成优先级队列的元素
        let queueElement = new QueueElement(element, priority)
        // 准备添加
        let l = this.items.length
        let added = false
        for (let i = 0;i<l;i++){
            if(priority < this.items[i].priority){
                this.items.splice(i,0,queueElement)
                added = true
                break
            }
        }
        if (!added){
            this.items.push(queueElement)
        }
        return queueElement
    }

      // 2. 队列头弹出元素
    PriorityQueue.prototype.dequeue = function () {
        return this.items.shift()
    }

    // 3. 返回队列中第一个元素
    PriorityQueue.prototype.front = function () {
        return this.items[0]
    }

    // 4. 判断队列是否为空
    PriorityQueue.prototype.isEmpty = function () {
        return this.items.length === 0
    }

    // 5. 返回队列中包含元素的个数
    PriorityQueue.prototype.size = function(){
        return this.items.length
    }

    // 6. toString
    PriorityQueue.prototype.toString = function()
    {
        let str = ""
        for(let element of this.items){
            str += element.element + "-" + element.priority + "  "
        }
        return str
    }

}

// test 
let priorityQueue = new PriorityQueue()

priorityQueue.enqueue("dududu",100)
priorityQueue.enqueue("xx",10)
priorityQueue.enqueue("dur",150)
priorityQueue.enqueue("jjj",1330)
priorityQueue.enqueue("xxx",443)

console.log(priorityQueue)

priorityQueue.dequeue()

console.log(priorityQueue.toString())
console.log(priorityQueue.size())

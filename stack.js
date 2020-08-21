function Stack()
{
    this.items = []

    // 1. 压入操作
    Stack.prototype.push = function(element){
       return this.items.push(element)
    }

    // 2. 弹出操作
    Stack.prototype.pop = function(){
        return this.items.pop()
    }

    // 3. 查看栈顶元素
    Stack.prototype.peek = function()
    {
        return this.items[this.items.length-1]
    }

    // 4. 判断是否为空
    Stack.prototype.isEmpty = function()
    {
        return this.items.length === 0
    }

    // 5. 获取栈中元素个数
    Stack.prototype.size = function()
    {
        return this.items.length
    }

    // toString
    Stack.prototype.toString = function()
    {
        return this.items.join(" ")
    }
}

// start  test

// create 

let stack = new Stack()

stack.push(3)
stack.push("ff")

stack.pop()

stack.peek()

stack.isEmpty()

console.log(stack+"")
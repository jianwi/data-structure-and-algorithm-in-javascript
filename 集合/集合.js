function Set()
{
     this.item = {}

    Set.prototype.add = function(data)
    {
        if(this.item.hasOwnProperty(data)) return false
        Object.defineProperty(this.item,data,{
            value : data,
            enumerable: true,
            configurable: true
        })
        return data
    }

    Set.prototype.toString = function()
    {
        let str = ""
        let datas = Object.getOwnPropertyNames(this.item)

        for (let data of datas){
            str += data + " "
        }
        return str
    }
// remove
    Set.prototype.remove = function(value)
    {
        if(!this.has(value)) return false
        return delete this.item[value]
    }
    // has
    Set.prototype.has = function(value)
    {
        return Object.values(this.item).includes(value)
    }
    // clear
    Set.prototype.clear = function()
    {
        this.item = {}
        return this.item
    }
    // size
    Set.prototype.size = function()
    {
        return Object.keys(this.item).length
    }

    // values
    Set.prototype.values = function()
    {
        return Object.values(this.item)
    }
    // 集合间的操作
    // 并集
    Set.prototype.union = function(otherSet)
    {
        // 创建新集合
        let unionSet = new Set()
        // 将 this.item 添加到 unionSet
        for(let item of this.values()){
            unionSet.add(item)
        }
        // 将 other 有，this.item 没有的部分添加到 unionSet
        for(let item of otherSet.values()){
            if (this.values().includes(item)){
                continue
            }
            unionSet.add(item)
        }
        return unionSet
    }
    // 差集
    Set.prototype.difference = function(otherSet)
    {
        let diff_set = new Set()
        // this.item 有，otherSet 没有的
        for(let item of this.values()){
            if(otherSet.values().includes(item)){
                continue
            }
            diff_set.add(item)
        }
        // otherSet 有， this.item 没有的
        for(let item of otherSet.values())
        {
            if(this.values().includes(item)){
                continue
            }
            diff_set.add(item)
        }
        return diff_set
    }
    // 子集
    Set.prototype.subset = function(otherSet)
    {
        for (let item of otherSet.values()){
            if(!this.has(item)){
                return false
            }
        }
        return true
    }

}

// test

// let set = new Set()
// set.add(11333)
// set.add("第二个")
// set.add("777")
// set.add(123)
// console.log(set.has("123"))
// // 可以区别类型
// console.log(set.has(123))


// console.log(set+"")

// set.remove(123)
// console.log(set.remove("777"))
// console.log(set.values())
// set.clear()
// console.log(set+"")
// console.log(set.values())

// 测试集合间操作

// 交集

let a = new Set()
a.add("a")
a.add("b")
a.add("c")

let b = new Set()
b.add("a")
b.add("c")
b.add("e")
b.add("f")

console.log(a.union(b).values())

// 差集
console.log(a.difference(b).values())

// 子集
let c = new Set()
c.add("a")
c.add("b")

console.log(a.subset(c))

console.log(a.subset(b) )
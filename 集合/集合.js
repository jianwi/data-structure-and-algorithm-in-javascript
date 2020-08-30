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

}

// test

let set = new Set()
set.add(11333)
set.add("第二个")
set.add("777")
set.add(123)
console.log(set.has("123"))
// 可以区别类型
console.log(set.has(123))


console.log(set+"")

set.remove(123)
console.log(set.remove("777"))
console.log(set.values())
set.clear()
console.log(set+"")
console.log(set.values())

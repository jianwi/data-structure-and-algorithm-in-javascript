// 使用 链地址法
function HashTable() {
//    属性
//    操作
    this.storage = []
    this.count = 0
//  当前已经存放的元素， 用count 计算 loadFactor loadFactor > 0.75 需要扩容。 当 loadFactor < 0.25 需要减小容量
    this.limit = 7
//    数组长度

//    方法

//    哈希函数
    HashTable.prototype.hashFunc = function (str, size) {
        // 定义哈希code
        let hashCode = 0
        // 霍纳算法，计算hashCode 值
        for (let i = 0; i < str.length; i++) {
            // 获取每个 char 的 unicode
            let char_code = str.charCodeAt(i)
            // 37 是个用的比较多的质数，hashCode 比较均匀
            hashCode = 37 * hashCode + char_code
        }
        // 取余操作
        var index = hashCode % size
        return index
    }

    /**
     * 添加数据
     * 1. 根据 key 获取索引值
     * 2. 根据索引值取出 bucket
     *      1) 判断bucket 是否存在，不存在，创建桶
     * 3.判断新增还是修改
     *     如果已经有值了，就修改，否则执行添加操作
     * 4. 新增操作
     * @param key
     * @param value
     */
    HashTable.prototype.put = function (key, value) {
        let index = this.hashFunc(key, this.limit)
        let bucket = this.storage[index]

        if (bucket === undefined) {
            bucket = []
            this.storage[index] = bucket
        }
        // 判断是修改还是添加？
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (tuple[0] === key) {
                tuple[1] = value
                return
            }
        }
        //    遍历完没有return 掉，说明要添加
        bucket.push([key, value])
        this.count += 1
        //判断是否需要扩容
        if (this.count > this.limit * 0.75) {
            let newPrime = this.getPrime(this.limit * 2)
            this.resize(newPrime)
        }
    }


    /**
     * 获取操作
     * 1. 使用 hash(key) 获取 index
     * 2. 根据 index 获取 bucket
     *      如果为null,直接返回 null
     * 4. 线性查找 bucket 中每一个 key 是否等于 传入的 key
     *      如果找到了，返回
     * 5. 找完了还是没有找到，最后返回一个null
     * @param key
     */
    HashTable.prototype.get = function (key) {
        var index = this.hashFunc(key, this.limit)
        let bucket = this.storage[index]
        if (bucket === undefined) {
            return null
        }
        //    进行线性查找
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (tuple[0] === key) {
                return tuple[1]
            }
        }
        //    线性查找完了，还是没有找到
        return null
    }

    /**
     * 删除操作
     * 1. 获取index
     * 2. 获取　bucket
     * 3. 判断　Ｂｕｃｋｅｔ 存在？
     *      不存在,返回null
     * 4. 线性查找 bucket，并且删除, count - 1
     * 5. 依然没有找到，返回null
     * @param key
     */
    HashTable.prototype.remove = function (key) {
        let index = this.hashFunc(key)
        let bucket = this.storage[index]

        if (bucket === undefined) {
            return null
        }

        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (tuple[1] === key) {
                //　数组的删除操作　params:开始的位置，删除的个数，[?:要替换的东西]
                bucket.splice(i, 1)
                this.count -= 1

                // 缩小容量
                if (this.limit > 7 && this.limit < this.limit * 0.25) {
                    this.resize(this.getPrime(Math.floor(this.limit / 2)))
                }

                return tuple[1]
            }
        }
        //    线性查找都没找到
        return null
    }

    /**
     * 是否为空
     */
    HashTable.prototype.isEmpty = function () {
        return this.count === 0
    }
    // 获取元素个数

    HashTable.prototype.size = function () {
        return this.count
    }
    /**
     * 设置容量操作
     * 扩容后，key 的哈希会发生变化，所以需要把所有元素都给计算一遍，重新插入一遍
     * @param newLimit
     */
    HashTable.prototype.resize = function (newLimit) {
        //    保存旧数组内容
        let old_storage = this.storage
        //    重置所有内容
        this.storage = []
        this.count = 0
        this.limit = newLimit
        //    给新　storage 重新插入
        for (let i = 0; i < old_storage.length; i++) {
            // 取出对应的 bucket
            let bucket = old_storage[i]
            //    判断　bucket　是否有数据
            if (bucket === undefined) {
                continue
            }
            // 把　tuple 中的数据　重新插入
            for (let i = 0; i < bucket.length; i++) {
                let tuple = bucket[i]
                this.put(...tuple)
            }
        }
    }
    /**
     * 判断质数
     * @param number
     * @returns {boolean}
     */
    HashTable.prototype.isPrime = function (number) {
        let temp = parseInt(Math.sqrt(number))

        for (let i = 2; i <= temp; i++) {
            if (number % i === 0) {
                return false
            }
        }
        return true
    }

    /**
     * 获取质数
     */
    HashTable.prototype.getPrime = function (num) {
        while (!this.isPrime(num)) {
            num++
        }
        return num
    }
}


//test

let ht = new HashTable()
ht.put("名字", "小明")
ht.put("年龄", "333")
ht.put("小狗", "旺旺")
ht.put("诗人", "李白")
ht.put("学霸", "李华")
ht.put("小猫", "喵喵")


console.log(ht.get("名字"))
console.log(ht.storage)
console.log(ht.size())
console.log(ht.isEmpty())
// 扩容测试
for (let i = 0; i < 2100; i++) {
    let k = Math.floor(Math.random() * 2000)
    ht.put(k, "xxx")
}
console.log(ht.storage.length)
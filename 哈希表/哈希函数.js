// 设计哈希函数
// 将字符串转成比较大的数字
// 将大的数字 hashCode 压缩到数组范围之内

function hashFunc(str,size)
{
    // 定义哈希code
    let hashCode = 0
    // 霍纳算法，计算hashCode 值
    for(let i = 0;i< str.length;i++)
    {
        // 获取每个 char 的 unicode
        let char_code =  str.charCodeAt(i)
        // 37 是个用的比较多的质数，hashCode 比较均匀
        hashCode = 37 * hashCode + char_code
    }
    // 取余操作
    var index = hashCode % size
    return index
}
console.log(hashFunc("dedddrc",5))
console.log(hashFunc("deddrc",5))
console.log(hashFunc("deddc",5))
console.log(hashFunc("d3drc",5))


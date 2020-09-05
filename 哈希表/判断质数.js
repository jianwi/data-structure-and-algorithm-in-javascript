/**
 * 判断一个数是不是质数
 * 特点：　只能被　１　和自己整除　，不能被　２　到　number-1 数字整除
 * @param number
 */
function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false
    }
    return true
}



//优化算法
//　结论
//　一个数　若可以进行因数分解，那么分解时得到的两个数一定是　一个小于等于　sqrt(n),一个大于等于　sqrt(n)
// 比如　16=2*8,　2<4 ,8>4; 16=4*4 , 4=4=4
// 所以遍历到等于　sqrt(n) 即可，小于sqrt(n) 那边没有一个数可以整除，大于　sqrt(n) 那边肯定就没有啦

function isPrime(number) {
    let temp = parseInt(Math.sqrt(number))

    for (let i = 2; i <= temp; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}


//test

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(2179))



/**
 * 随机取一个整数，范围在 a 和 b 之间，可能等于 a 或者 b
 */
function GetRandInt(a: number, b: number): number {
    if (a == b) { return a }
    const max = Math.max(a, b)
    const min = Math.min(a, b)
    return Math.floor(Math.random() * (max + 0.99 - min) + min)
}

/**
 * 使数组乱序
 */
function DisorderArray(array: Array<any>): void {
    if (array.length < 1) { return }
    const t1: Array<any> = array.splice(0, array.length)
    const t2: Array<any> = []
    while (t1.length > 0) {
        const index = GetRandInt(0, t1.length - 1)
        t2.push(t1.splice(index, 1)[0])
    }
    array.push(...t2)
}

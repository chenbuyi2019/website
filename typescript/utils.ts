
/**
 * 随机取一个整数，范围在 a 和 b 之间，可能等于 a 或者 b
 */
 function GetRandInt(a: number, b: number): number {
    if (a == b) { return a }
    const max = Math.max(a, b)
    const min = Math.min(a, b)
    return Math.floor(Math.random() * (max + 0.99 - min) + min)
}


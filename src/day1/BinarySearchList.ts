export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0
    let hi = haystack.length
    let mid = Math.floor((low + hi) / 2)
    do {
        const mid = Math.floor((low + hi) / 2)
        if (haystack[mid] === needle) {
            return true;
        } else if (haystack[mid] < needle) {
            low = mid + 1;
        } else {
            hi = mid ;
        }
    } while (low < hi)

    return false
}
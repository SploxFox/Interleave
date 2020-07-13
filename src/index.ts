/**
 * Interleaves multiple arrays together.
 * 
 * Can handle any number of arrays. Also supports iterators.
 * 
 * @example
 * 1 2 3 4, a b c d
 *   becomes
 * 1 a 2 b 3 c 4 d
 * 
 * @param arrays The arrays to interleave.
 */
function interleave<T>(...arrays: T[][]): T[]

/**
 * Interleave multiple iterators together.
 * 
 * @example
 * 1 2 3 4, a b c d
 *   becomes
 * 1 a 2 b 3 c 4 d
 * 
 * @param iterables The iterables to interleave.
 */
function interleave<T>(...iterables: Iterable<T>[]): T[]
function interleave(...input: any[]) {
    if (input.length == 0) {
        return []
    } else if (Array.isArray(input[0])) {
        return interleaveArray(input);
    } else {
        return interleaveIterable(input);
    }
}

export default interleave;

function interleaveArray<T>(arrays: T[][]) {
    const newArray: T[] = [];
    const longestLength = Math.max(...arrays.map(array => array.length));
    for (let i = 0; i < longestLength; i++) {
        for (const array of arrays) {
            if (i < array.length) {
                newArray.push(array[i])
            }
        }
    }
    return newArray;
}

function interleaveIterable<T>(iterables: Iterable<T>[]) {
    const newArray: T[] = [];
    const iterators = iterables.map((iterable) => iterable[Symbol.iterator]());

    while (true) {
        const next = iterators.map(it => it.next()).filter(it => !it.done).map(result => result.value);
        
        if (next.length == 0) {
            break;
        }

        newArray.push(...next);
    }

    return newArray;
}
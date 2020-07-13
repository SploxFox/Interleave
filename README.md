## Interleave arrays and other iterables, with full type support.

# Examples
Interleaving an array:
```
import interleave from "interleave";

interleave(['a', 'b', 'c'], [1, 2]);
// Returns ['a', 1, 'b', 2, 'c']

// Also supports multiple arrays:
interleave(['a', 'b', 'c'], [1, 2, 3], ['A', 'B', 'C']);
// Returns ['a', 1, 'A', 'b', 2, 'B', 'c', 3, 'C']
```

Interleaving an iterable:
```
// This can be any iterable. String example:
interleave('abc', 'ABC');
// Returns ['a', 'A', 'b', 'B', 'c', 'C']
```

Other example use case using strings:
```
// You could join them into a string like this, using the .join() array method:
interleave('abc', 'ABC').join('');
// Returns 'aAbBcC'
```

# Documentation

Method overloads:
* `interleave<T>(...arrays: T[][]): T[]`
    * Interleaves multiple arrays.
* `interleave<T>(...iterables: Iterable<T>[]): T[]`
    * Interleaves multiple iterators.

Both signatures do exactly the same thing, though the arrays implementation does not depend on iterators.

## Edge Cases

* Nothing is passed in
    * Returns an empty array
* One array is passed in
    * Returns that array
* Arrays/iterators are of different lengths
    * Elements of each array are interleaved until there are no more of that array, and other array/iterators will continue to be interleaved:
        ```
        interleave([1, 2, 3], [4, 5], [6, 7, 8])
        // Returns [1, 4, 6, 2, 5, 7, 3, 8]
        ```
Edge cases have been tested with Jest. Jest tests are included in `dist/index.test.js`.
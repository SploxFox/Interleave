import interleave from "."

describe('Interleave array', () => {
    test('2 arrays 3 elements', () => {
        expect(interleave(['a', 'b', 'c'], ['1', '2', '3'])).toMatchObject(['a', '1', 'b', '2', 'c', '3']);
    });
    test('3 arrays 3 elements', () => {
        expect(interleave(['a', 'b', 'c'], ['1', '2', '3'], ['A', 'B', 'C'])).toMatchObject(['a', '1', 'A', 'b', '2', 'B', 'c', '3', 'C']);
    });

    describe('2 arrays different lengths', () => {
        test('first long ( ͡° ͜ʖ ͡°)', () => {
            expect(interleave(['a', 'b', 'c'], ['1', '2'])).toMatchObject(['a', '1', 'b', '2', 'c']);
        });

        test('second long ( ͡ʘ ͜ʖ ͡ʘ)', () => {
            expect(interleave(['a', 'b'], ['1', '2', '3'])).toMatchObject(['a', '1', 'b', '2', '3']);
        });
    });

    describe('3 arrays different lengths', () => {
        test('Middle array short', () => {
            expect(interleave(interleave([1, 2, 3], [4, 5], [6, 7, 8]))).toMatchObject([1, 4, 6, 2, 5, 7, 3, 8])
        })
    })

    test('empty', () => {
        expect(interleave()).toMatchObject([]);
        expect(interleave([])).toMatchObject([]);
        expect(interleave([],[],[],[],[],[])).toMatchObject([]);
    })
});


describe('Interleave iterable', () => {
    test('Strings', () => {
        expect(interleave('abc', '123')).toMatchObject(['a', '1', 'b', '2', 'c', '3'])
        expect(interleave('abc', '123', 'ABC')).toMatchObject(['a', '1', 'A', 'b', '2', 'B', 'c', '3', 'C'])
    })
});
import {ArrayUnit} from "../ArrayUnit";

describe("Test array class", () => {

    const ARRAY = new ArrayUnit();

    xit("must return array of 2,3,4 with array of 1,2,3 with incremental of 1", () => {
        expect(Array.isArray(ARRAY.mapArrayIncremental([1,2,3], 1))).toBeTruthy();
        expect(ARRAY.mapArrayIncremental([1,2,3], 1))?.toStrictEqual([2,3,4]);
    });

    xit("must return array of 2,3,4 with array of 4,5,6 with incremental of 2", () => {
        expect(Array.isArray(ARRAY.mapArrayIncremental([1,2,3], 2))).toBeTruthy();
        expect(ARRAY.mapArrayIncremental([1,2,3], 2))?.toStrictEqual([3,4,5]);
    });

    xit("must return array of 4,3,6 with array of 1,2,3 with decremental of 1", () => {
        expect(Array.isArray(ARRAY.mapArrayDecremental([1,2,3], 1))).toBeTruthy();
        expect(ARRAY.mapArrayDecremental([4,5,6], 1))?.toStrictEqual([3,4,5]);
    });

    xit("must return array of 1,2,3 with array of 4,5,6 with decremental of 2", () => {
        expect(Array.isArray(ARRAY.mapArrayDecremental([1,2,3], 2))).toBeTruthy();
        expect(ARRAY.mapArrayDecremental([4,5,6], 2))?.toStrictEqual([2,3,4]);
    });

    xit("must return array of 1,2,3 with array 2,3,4 with decremental of 1", () => {
        expect(Array.isArray(ARRAY.mapArrayDecremental([1,2,3], 1))).toBeTruthy();
        expect(ARRAY.mapArrayDecremental([4,5,6], 1))?.toStrictEqual([3,4,5]);
    });

    xit('must return addition for each number of array of 1,2,3 with operand 1 which gives array of 2,3,4', () => {
        expect(Array.isArray(ARRAY.mapArrayOperation([1,2,3], 1, ARRAY?.operationAddition))).toBeTruthy();
        expect(ARRAY.mapArrayOperation([1,2,3], 1, ARRAY?.operationAddition)).toStrictEqual([2,3,4]);
    });

    xit('must return subtraction for each number of array of 2,3,4 with operand 1 which gives array of 1,2,3', () => {
        expect(Array.isArray(ARRAY.mapArrayOperation([2,3,4], 1, ARRAY?.operationSubtraction))).toBeTruthy();
        expect(ARRAY.mapArrayOperation([2,3,4], 1, ARRAY?.operationSubtraction)).toStrictEqual([1,2,3]);
    });

    xit('must return multiply for each number of array of 2,3,4 with operand 2 which gives array of 1,2,3', () => {
        expect(Array.isArray(ARRAY.mapArrayOperation([2,3,4], 2, ARRAY?.operationMultiply))).toBeTruthy();
        expect(ARRAY.mapArrayOperation([2,3,4], 2, ARRAY?.operationMultiply)).toStrictEqual([4,6,8]);
    });

    xit('must return divide for each number of array of 2,3,4 with operand 2 which gives array of 1,2,3', () => {
        expect(Array.isArray(ARRAY.mapArrayOperation([2,3,4], 2, ARRAY?.operationDivide))).toBeTruthy();
        expect(ARRAY.mapArrayOperation([2,3,4], 2, ARRAY?.operationDivide)).toStrictEqual([1,1.5,2]);
    });

    xit("must return sum array of 1,2,3 which gives 5", () => {
        expect(typeof (ARRAY.sum([1,2,3]))).toBe("number");
        expect(ARRAY.sum([1,2,3])).toBe(6);
    });

    xit("must return sum array of 1,2,3,4,5 which gives 5", () => {
        expect(typeof (ARRAY.sum([1,2,3,4,5]))).toBe("number");
        expect(ARRAY.sum([1,2,3,4,5])).toBe(15);
    });

    xit("must return sum array of 10,22,65,48,50 which gives 5", () => {
        expect(typeof (ARRAY.sum([10,22,65,48,50]))).toBe("number");
        expect(ARRAY.sum([10,22,65,48,50])).toBe(195);
    });

    xit("must return flatten array of 1,2,3,4", () => {
        expect(Array.isArray(ARRAY.flatMap([[1,2], [3,4]] ))).toBeTruthy();
        expect(ARRAY?.flatMap([[1,2], [3,4]])).toStrictEqual([1,2,3,4]);
    });

    xit("must return Array range 5 to 10", () => {
        expect(Array.isArray(ARRAY.range(5, 10))).toBeTruthy();
        expect(ARRAY.range(5, 10)).toStrictEqual([5, 6, 7, 8, 9, 10]);
    });

    xit("must return sort ascending Array", () => {
       expect(Array.isArray(ARRAY.sortAscend([6,4,3,5]))).toBeTruthy();
       expect(ARRAY.sortAscend([6,4,3,5])).toStrictEqual([3,4,5,6]);
    });

    xit("must return unsort Array", () => {
        expect(Array.isArray(ARRAY.sortDescend([6,4,3,5]))).toBeTruthy();
        expect(ARRAY.sortDescend([6,4,3,5])).toStrictEqual([6,5,4,3]);
    });

    xit("must return an flatten array from Two dimension array unsorted", () => {
        ARRAY?.acceptanceTestingForNumbers([[5, 3, 90,22], [96,83,66,88,55]]) ;
    });

    xit("must return sort by country in English", () => {
        const ENGLISH = ["France", "China", "United States", "Colombia", "Mauritania", "Algeria", "United Arab Emirates", "Azerbaijan", "Albania"];
        expect(ARRAY.sortStringToLocale(ENGLISH, 'en')).toStrictEqual([
            'Albania',
            'Algeria',
            'Azerbaijan',
            'China',
            'Colombia',
            'France',
            'Mauritania',
            'United Arab Emirates',
            'United States'
        ]);
    });

    xit("must return sort by country with French accent", () => {
        const FRENCH = ["État-Unis", "Albanie", "France", "Mauritanie", "Algérie", "Émirat Arabe Unis", "Chine", "Azerbaïdjan", "Colombie"];
        expect(ARRAY.sortStringToLocale(FRENCH, 'jp')).toStrictEqual([
            'Albanie',
            'Algérie',
            'Azerbaïdjan',
            'Chine',
            'Colombie',
            'Émirat Arabe Unis',
            'État-Unis',
            'France',
            'Mauritanie'
        ]);
    });

    xit("must return sort by country with Japanese letters", () => {
        const JAPANESE = ["フランス", "アラブ首長国連邦", "中国", "アルジェリア", "モーリタニア", "コロンビア", "米国", "アゼルバイジャン", "アルバニア"];
        expect(ARRAY.sortStringToLocale(JAPANESE, 'jp')).toStrictEqual([
            'アゼルバイジャン',
            'アラブ首長国連邦',
            'アルジェリア',
            'アルバニア',
            'コロンビア',
            'フランス',
            'モーリタニア',
            '中国',
            '米国'
        ]);
    });

});

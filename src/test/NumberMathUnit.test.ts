import {NumberMathUnit} from "../NumberMathUnit";

const Math: NumberMathUnit = new NumberMathUnit();

describe( "Convert to number", () => {

    it("must return 360 from binary \"101101000\"", () => {
        expect(typeof Math.binToNumber("101101000")).toBe("number");
        expect(Math.binToNumber("101101000")).toBe(360);
    });

    it("must return 9 from binary \"1001\"", () => {
        expect(typeof Math.binToNumber("1001")).toBe("number");
        expect(Math.binToNumber("1001")).toBe(9);
    });

    it("must return 691 from hexadecimal \"2b3\"", () => {
        expect(typeof Math.hexToNumber("2b3")).toBe("number");
        expect(Math.hexToNumber("2b3")).toBe(691);
    });

    it("must return 259762 from hexadecimal \"3F6B2\"", () => {
        expect(typeof Math.hexToNumber("3F6B2")).toBe("number");
        expect(Math.hexToNumber("3F6B2")).toBe(259762);
    });

    it("must return 360 from hexadecimal \"168\"", () => {
        expect(typeof Math.hexToNumber("168")).toBe("number");
        expect(Math.hexToNumber("168")).toBe(360);
    });
});

describe("convert to bin", () => {

    it('must return 00001001, from number \"9\" ', () => {
        expect(typeof Math.numberToBin("9", 8)).toBe("string");
        expect(Math.numberToBin("9", 8).length).toBe(8);
        expect(Math.numberToBin("9", 8)).toBe("00001001");
    });

    it("must return 11111111 , from number \"255\"", () => {
        expect(typeof Math.numberToBin("9", 8)).toBe("string");
        expect(Math.numberToBin("9", 8).length).toBe(8);
        expect(Math.numberToBin("9", 8)).toBe("00001001");
    });

    it("must return 0000000101101000 , from number \"360\"", () => {
        expect(typeof Math.numberToBin("360", 16)).toBe("string");
        expect(Math.numberToBin("360", 16).length).toBe(16);
        expect(Math.numberToBin("360", 16)).toBe("0000000101101000");
    });

    it("must return 0000001000000000 , from number \"512\"", () => {
        expect(typeof Math.numberToBin("512", 16)).toBe("string");
        expect(Math.numberToBin("512", 16).length).toBe(16);
        expect(Math.numberToBin("512", 16)).toBe("0000001000000000");
    });

    it ("must return 01111111111111111111111111111111, from number 2147483647", () => {
        expect(typeof Math.numberToBin("2147483647", 32)).toBe("string");
        expect(Math.numberToBin("2147483647", 32).length).toBe(32);
        expect(Math.numberToBin("2147483647", 32)).toBe("01111111111111111111111111111111");
    });
});

describe("convert to hex", () => {

    it('must return 2147483647, from number \"7fffffff\" ', () => {
        expect(typeof Math.numberToHex("2147483647")).toBe("string");
        expect(Math.numberToHex("2147483647").length)
        expect(Math.numberToHex("2147483647")).toBe("7fffffff");
    });


    it('must return 16777215, from number \"ffffff\" ', () => {
        expect(typeof Math.numberToHex("16777215")).toBe("string");
        expect(Math.numberToHex("16777215").length);
        expect(Math.numberToHex("16777215")).toBe("ffffff");
    });
});

describe("Simple Math", () => {
    it("must return 3, from [1,2,3]", () => {
        expect(typeof Math.findMax([1,2,3])).toBe("number");
        expect(Math.findMax([1,2,3])).toBe(3);
    });

    it("must return 3, from [3,2,1]", () => {
        expect(typeof Math.findMax([3,2,1])).toBe("number");
        expect(Math.findMax([3,2,1])).toBe(3);
    });

    it("must return 64, from [64,8,32,16]", () => {
        expect(typeof Math.findMax([64,8,32,16])).toBe("number");
        expect(Math.findMax([64,8,32,16])).toBe(64);
    });

    it("must return 1, from [1,2,3]", () => {
        expect(typeof Math.findMin([1,2,3])).toBe("number");
        expect(Math.findMin([1,2,3])).toBe(1);
    });

    it("must return 1, from [3,2,1]", () => {
        expect(typeof Math.findMin([3,2,1])).toBe("number");
        expect(Math.findMin([3,2,1])).toBe(1);
    });

    it("must return 8, from [64,8,32,16]", () => {
        expect(typeof Math.findMin([64,8,32,16])).toBe("number");
        expect(Math.findMin([64,8,32,16])).toBe(8);
    });

    it("must return 13, from [12.23, 14.45, 16.54]", () => {
        expect(typeof Math.findMinToCeil([12.23, 14.45, 16.54])).toBe("number");
        expect(Math.findMinToCeil([12.23, 14.45, 16.54])).toBe(13);
    });

    it("must return 12, from [12.23, 14.45, 16.54]", () => {
        expect(typeof Math.findMinToFloor([12.23, 14.45, 16.54])).toBe("number");
        expect(Math.findMinToFloor([12.23, 14.45, 16.54])).toBe(12);
    });

});

describe("complex math", () => {
    it("must return 10.8, from [10, 12, 14, 8, 10]", () => {
        expect(Math?.findAverage([10, 12, 14, 8, 10])).toBe(10.8);
    });

    it("must return 14.6, from [14, 16, 18, 10, 15]", () => {
        expect(Math?.findAverage([14, 16, 18, 10, 15])).toBe(14.6);
    });

    it("must return 40.4, from [30, 60, 48, 52, 12]", () => {
        expect(Math?.findAverage([30, 60, 48, 52, 12])).toBe(40.4);
    });

    it("must return 10.80, from [10, 12, 14, 8, 10]", () => {
        expect(typeof Math?.findAverageWithDecimal([10, 12, 14, 8, 10], 2)).toBe("number");
        expect(Math?.findAverageWithDecimal([10, 12, 14, 8, 10], 2)).toBe(10.80);
    });

    it("must return 14.60, from [14,16,18,10,15]", () => {
        expect(typeof Math?.findAverageWithDecimal([14, 16, 18, 10, 15],2)).toBe("number");
        expect(Math?.findAverageWithDecimal([14, 16, 18, 10, 15],2)).toBe(14.60);
    });

    it("must return 40.40, from [14,16,18,10,15]", () => {
        expect(typeof Math?.findAverageWithDecimal([30, 60, 48, 52, 12],2)).toBe("number");
        expect(Math?.findAverageWithDecimal([30, 60, 48, 52, 12],2)).toBe(40.40);
    });

    it("must return 15.18, from [14.89,16.6,18.9,10.2,15.3]", () => {
        expect(typeof Math?.findAverageWithDecimal([14.89, 16.6, 18.9, 10.2, 15.3],2)).toBe("number");
        expect(Math?.findAverageWithDecimal([14.89, 16.6, 18.9, 10.2, 15.3],2)).toBe(15.18);
    });

    it("must return 15.22, from [14.89836,16.623,18.954,10.23,15.373516]", () => {
        expect(typeof Math?.findAverageWithDecimal([14.89836, 16.623, 18.954, 10.23, 15.373516],2)).toBe("number");
        expect(Math?.findAverageWithDecimal([14.89836, 16.623, 18.954, 10.23, 15.373516],2)).toBe(15.22);
    });

    it("must return 15.2158, from [14.89836,16.623,18.954,10.23,15.373516]", () => {
        expect(typeof Math?.findAverageWithDecimal([14.89836, 16.623, 18.954, 10.23, 15.373516],4)).toBe("number");
        expect(Math?.findAverageWithDecimal([14.89836, 16.623, 18.954, 10.23, 15.373516],4)).toBe(15.2158);
    });

    it("must return 5, near to zero from [-10, -64, 5, 28, 52]", () => {
        expect(typeof Math?.nearToZero([-10, -64, 5, 28, 52])).toBe("number");
        expect(Math?.nearToZero([-10, -64, 5, 28, 52])).toBe(5);
    });

    it("must return -64, Far to zero from [-10, -64, 5, 28, 52]", () => {
        expect(typeof Math?.farToZero([-10, -64, 5, 28, 52])).toBe("number");
        expect(Math?.farToZero([-10, -64, 5, 28, 52])).toBe(-64);
    });
})

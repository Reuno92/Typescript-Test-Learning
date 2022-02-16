import {DateUnit} from "../DateUnit";

describe( "Simple Date function: ", () => {

    it("must return complete string of date: 2022/02/16", () => {
        expect(new DateUnit()
            .transformString(new Date("2022-02-16")))
            .toBe("Wed Feb 16 2022 01:00:00 GMT+0100 (Central European Standard Time)");
    });

    it( "must return Wed Feb 16 2022", () => {
        expect(new DateUnit()
            .getDate(new Date("2022-02-16")))
            .toBe("Wed Feb 16 2022");
    });

    it("must return 01:00:00 GMT+0100 (Central European Standard Time)", () => {
        expect(new DateUnit()
            .getTime(new Date("2022-02-16")))
            .toBe("01:00:00 GMT+0100 (Central European Standard Time)");
    });

    it("must return -60, is the difference, in minutes, between a date as evaluated in the UTC time zone, and the same date as evaluated in the local time zone ", () => {
        expect(new DateUnit()
            .getTimezone(new Date("2022-02-16")))
            .toBe(-60);
    });
});

describe("Formatting date according language", () => {

    it("must return human readable date of 2022-02-16 in French", () => {
        expect(new DateUnit()
            .getLocalDateWithEra(new Date("2022-02-16"), {
                lang: "fr",
                era: "long",
                month: "long",
                day: "2-digit",
                year: "numeric"
            }))
            .toBe("16 février 2022 après Jésus-Christ")
    });

    it("must return human readable date of 2022-02-16 in English", () => {
        expect(new DateUnit()
            .getLocalDateWithEra(new Date("2022-02-16"), {
                lang: "en",
                era: "long",
                month: "long",
                day: "2-digit",
                year: "numeric"
            }))
            .toBe("February 16, 2022 Anno Domini")
    });

    it("must return human readable date of 2022-02-16 in Italian", () => {
        expect(new DateUnit()
            .getLocalDateWithEra(new Date("2022-02-16"), {
                lang: "it",
                era: "long",
                month: "long",
                day: "2-digit",
                year: "numeric"
            }))
            .toBe("16 febbraio 2022 dopo Cristo")
    });

    it("must return human readable date of 2022-02-16 in Spanish", () => {
        expect(new DateUnit()
            .getLocalDateWithEra(new Date("2022-02-16"), {
                lang: "es",
                era: "long",
                month: "long",
                day: "2-digit",
                year: "numeric"
            }))
            .toBe("16 de febrero de 2022 después de Cristo")
    });

    it("must return human readable date of 2022-02-16 in Arab", () => {
        expect(new DateUnit()
            .getLocalDateWithEra(new Date("2022-02-16"), {
                lang: "ar",
                era: "long",
                month: "long",
                day: "2-digit",
                year: "numeric"
            }))
            .toBe("١٦ فبراير ٢٠٢٢ ميلادي")
    });

    it("must return human readable date of 2022-02-16 in Chinese", () => {
        expect(new DateUnit()
            .getLocalDateWithEra(new Date("2022-02-16"), {
                lang: "zh",
                era: "long",
                month: "long",
                day: "2-digit",
                year: "numeric"
            }))
            .toBe("公元2022年2月16日")
    });

    it("must return human readable date of 2022-02-16 in hebrew", () => {
        expect(new DateUnit()
            .getLocalDateWithEra(new Date("2022-02-16"), {
                lang: "he",
                era: "long",
                month: "long",
                day: "2-digit",
                year: "numeric"
            }))
            .toBe("16 בפברואר 2022 לספירה")
    });

    it("must return human readable date of 2022-02-16 in Hindi", () => {
        expect(new DateUnit()
            .getLocalDateWithEra(new Date("2022-02-16"), {
                lang: "hi",
                era: "long",
                month: "long",
                day: "2-digit",
                year: "numeric"
            }))
            .toBe("16 फ़रवरी 2022 ईसवी सन")
    });

});

describe("Complex calculation of Date", () => {

    it("must return time in UnixTime", () => {
        expect(new DateUnit()
            .getUnixTime(new Date("2022-02-16")))
            .toBe(1644969600000);
    });

    it("must return time with 2 hours less", () => {
        expect(new DateUnit()
            .setHours(new Date("2022-02-16"), true, 2))
            .toStrictEqual(new Date("2022-02-15T22:00:00.000Z"));
    });

    it("must return time with 1 hours more", () => {
        expect(new DateUnit()
            .setHours(new Date("2022-02-16"), false, 1))
            .toStrictEqual(new Date("2022-02-16T01:00:00.000Z"));
    });

    it("return modify date to 1983-10-22", () => {
        expect(new DateUnit()
            .setDate(new Date("2022-02-16"), {day: 22, month: 10, year: 1983}) )
            .toStrictEqual(new Date("1983-10-22T00:00:00.000Z"));
    });

    it("return modify date to 1993-01-18", () => {
        expect(new DateUnit()
            .setDate(new Date("1993-01-18"), {day: 18, month: 1, year: 1993}) )
            .toStrictEqual(new Date("1993-01-18T00:00:00.000Z"));
    });

    /* WRONG RESULT
    it("return elapsed time from 1993-01-18 to 2022-02-16", () => {
        expect(new DateUnit()
            .elapsedTime(new Date("1993-01-18"), new Date("2022-02-16")))
            .toBe("seconds: 0, minutes: 0, hours: 21, days: 28, weeks: 9, years: 29")
    });

    it("return elapsed time from 1983-10-22 to 2022-02-16", () => {
        expect(new DateUnit()
            .elapsedTime(new Date("1983-10-22"), new Date("2022-02-16")))
            .toBe("seconds: 0, minutes: 0, hours: 12, days: 117, weeks: 23, years: 38")
    });

    it("return elapsed time from 1983-10-22 to 1993-01-18", () => {
        expect(new DateUnit()
            .elapsedTime(new Date("1983-10-22"), new Date("1993-01-18")))
            .toBe("seconds: 0, minutes: 0, hours: 15, days: 88, weeks: 14, years: 9")
    });
    */
});

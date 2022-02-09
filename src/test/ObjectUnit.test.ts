import AdressBook from '../ObjectUnit';

const MOCK = [
    {
        id: 1,
        names: {
            first: "saleck",
            last: "el jili"
        },
        dates: {
            birthday: new Date("1993-01-18"),
            carLicense: {
                delivery: new Date(2015, 6, 9 ),
                expire: new Date(2025, 6, 9)
            },
            idCard: {
                delivery: new Date(2021, 10, 6),
                expire: new Date(2023, 10, 5),
            }
        },
        address: {
            street: "rue mollet",
            number: 10,
            zip: 75017,
            city: "Paris",
            country: "fr"
        },
        contact: {
            email: "saleck@qwest.tv",
            phone: [
                {
                    country: 33,
                    number: 688945524
                },
                {
                    country: 222,
                    number: 56223189
                }
            ],
            network: {
                linkedin: "saleck-el-jili-b56823175",
                facebook: undefined,
                twitter: undefined
            }
        },
        register: new Date("2022-01-24"),
        isActive: true
    },
    {
        id: 2,
        names: {
            first: "alexandre",
            last: "benali",
        },
        dates: {
            birthday: new Date("2000-12-09"),
            carLicense: {
                delivery: new Date(""),
                expire: new Date("")
            },
            idCard: {
                delivery: new Date(""),
                expire: new Date("")
            }
        },
        address: {
            street: "rue villiers",
            number: 20,
            zip: 93200,
            city: "Saint Denis",
            country: "fr"
        },
        contact: {
            email: "alexandre.benali@estiam.com",
            phone: [{
                country: 33,
                number: 689725687,
            }],
            network: {
                linkedin: "alexandre-benali",
                facebook: undefined,
                twitter: undefined
            }
        },
        register: new Date("2020-10-8"),
        isActive: true
    },
    {
        id: 3,
        names: {
            first: "renaud",
            last: "racinet"
        },
        dates: {
            birthday: new Date("1983-10-22"),
            carLicense: {
                delivery: new Date(''),
                expire: new Date('')
            },
            idCard: {
                delivery: new Date(""),
                expire: new Date("")
            }
        },
        address: {
            street: "rue square des tilleuls",
            number: 3,
            zip: 92360,
            city: "Meudon-la-Forêt",
            country: "fr"
        },
        contact: {
            email: "racinet.renaud@orange.fr",
            phone: [{
                country: 33,
                number: 686126582
            }],
            network: {
                linkedin: "renaud-racinet-81930520",
                facebook: "renaud.racinet",
                twitter: undefined
            }
        },
        register: new Date("2019-6-15"),
        isActive: false
    }
];

const INSTANCE = new AdressBook();

describe("test Class ObjectUnit part Names", () => {
    INSTANCE.contacts = MOCK;

    xit("must return contact with full names for id 1 gives Saleck El Jili", () => {
        expect(typeof INSTANCE?.getNames(1)).toBe("string");
        expect(INSTANCE?.getNames(1)).toBe("Saleck El Jili");
    });

    xit("must return contact with full names for id 2 gives Alexandre Benali", () => {
        expect(typeof INSTANCE?.getNames(2)).toBe("string");
        expect(INSTANCE?.getNames(2)).toBe("Alexandre Benali");
    });

    xit("must return contact with full names for id 3 gives Renaud Racinet", () => {
        expect(typeof INSTANCE?.getNames(3)).toBe("string");
        expect(INSTANCE?.getNames(3)).toBe("Renaud Racinet");
    });

    xit("must return contact with simplify names for id 1 gives S. El Jili", () => {
        expect(typeof INSTANCE?.getSimplifyNames(1)).toBe("string");
        expect(INSTANCE?.getSimplifyNames(1)).toBe("S. El Jili");
    });

    xit("must return contact with simplify names for id 2 gives A. Benali", () => {
        expect(typeof INSTANCE?.getSimplifyNames(2)).toBe("string");
        expect(INSTANCE?.getSimplifyNames(2)).toBe("A. Benali");
    });

    xit("must return contact with simplify names for id 3 gives R. Racinet", () => {
        expect(typeof INSTANCE?.getSimplifyNames(3)).toBe("string");
        expect(INSTANCE?.getSimplifyNames(3)).toBe("R. Racinet");
    });

});

describe("test Class ObjectUnit part Dates", () => {
   xit("must return birthday with id 1 gives \"1993-01-18T00:00:00.000Z\"", () => {
       expect(typeof INSTANCE?.getBirthday(1)).toBe("string");
       expect(INSTANCE.getBirthday(1)).toBe("1993-01-18T00:00:00.000Z");
   });

   xit("must return birthday with id 2 gives \"2000-12-09T00:00:00.000Z\"", () => {
       expect(typeof INSTANCE?.getBirthday(2)).toBe("string");
       expect(INSTANCE.getBirthday(2)).toBe("2000-12-09T00:00:00.000Z");
   });

   xit("must return birthday with id 3 gives \"1983-10-22T00:00:00.000Z\"", () => {
       expect(typeof INSTANCE?.getBirthday(3)).toBe("string");
       expect(INSTANCE.getBirthday(3)).toBe("1983-10-22T00:00:00.000Z");
   });

   xit("must return Year Birthday with id 1 gives \"1993\"", () => {
        expect(typeof INSTANCE?.getYearBirthday(1)).toBe("string");
        expect(INSTANCE.getYearBirthday(1)).toBe("1993");
   });

   xit("must return Year Birthday with id 2 gives \"2000\"", () => {
       expect(typeof INSTANCE?.getYearBirthday(2)).toBe("string");
       expect(INSTANCE.getYearBirthday(2)).toBe("2000");
   });

   xit("must return Year Birthday with id 3 gives \"1983\"", () => {
       expect(typeof INSTANCE?.getYearBirthday(3)).toBe("string");
       expect(INSTANCE.getYearBirthday(3)).toBe("1983");
   });

   xit("must return age with id 3 gives 29", () => {
       expect(typeof INSTANCE?.getAge(1)).toBe("number");
       expect(INSTANCE.getAge(1)).toBe(29);
   });

   xit("must return age with id 2 gives 22", () => {
       expect(typeof INSTANCE?.getAge(2)).toBe("number");
       expect(INSTANCE.getAge(2)).toBe(22);
   });

   xit("must return age with id 3 gives 39", () => {
       expect(typeof INSTANCE?.getAge(3)).toBe("number");
       expect(INSTANCE.getAge(3)).toBe(39);
   })
});

describe( "test Class ObjectUnit part Address", () => {

    xit("must return full address in function by id: 1 gives \"10, rue mollet 75017 Paris\"", () => {
       expect(typeof INSTANCE?.getAddress(1)).toBe("string");
       expect(INSTANCE?.getAddress(1)).toBe('10, rue mollet\n75017 Paris');
    });

    xit("must return full address in function by id: 1 gives \"20, rue villiers 93200 Saint Denis\"", () => {
        expect(typeof INSTANCE?.getAddress(2)).toBe("string");
        expect(INSTANCE?.getAddress(2)).toBe('20, rue villiers\n93200 Saint Denis');
    });

    xit("must return full address in function by id: 2 gives \"3, square des tilleuls 92360 Meudon-la-Forêt\"", () => {
        expect(typeof INSTANCE?.getAddress(3)).toBe("string");
        expect(INSTANCE?.getAddress(3)).toBe('3, rue square des tilleuls\n92360 Meudon-la-Forêt');
    });
});

describe("test Class ObjectUnit part Contact Network", () => {

    xit("must return link for specific social network with id: 1 and linkedin", () => {
        expect(typeof INSTANCE?.getNetwork(1, "linkedin")).toBe("string");
        expect(INSTANCE?.getNetwork(1, "linkedin")).toBe("https://www.linkedin.com/in/saleck-el-jili-b56823175");
    });

    xit("must return link for specific social network with id: 2 and linkedin", () => {
        expect(typeof INSTANCE?.getNetwork(2, "linkedin")).toBe("string");
        expect(INSTANCE?.getNetwork(2, "linkedin")).toBe("https://www.linkedin.com/in/alexandre-benali");
    });

    xit("must return link for specific social network with id: 3 and linkedin", () => {
        expect(typeof INSTANCE?.getNetwork(3, "linkedin")).toBe("string");
        expect(INSTANCE?.getNetwork(3, "linkedin")).toBe("https://www.linkedin.com/in/renaud-racinet-81930520");
    });

    xit("must return link for specific social network with id: 3 and facebook", () => {
        expect(typeof INSTANCE?.getNetwork(3, "facebook")).toBe("string");
        expect(INSTANCE?.getNetwork(3, "facebook")).toBe("https://www.facebook.com/renaud.racinet");
    });
});

describe("Test Class ObjectUnit part Contact mapipulation", () => {

    const EXPECTED_SALECK = [MOCK[0]];
    const EXPECTED_ALEXANDRE = [MOCK[1]];
    const EXPECTED_RENAUD = [MOCK[2]];

    xit("must return allContactIsActive", () => {
        expect(typeof INSTANCE?.getAllContactsIsActive()).toBe("object");
        expect(INSTANCE?.getAllContactsIsActive()).toStrictEqual([...EXPECTED_SALECK, ...EXPECTED_ALEXANDRE]);
    });

    xit("must return all contact born in 1993 and registering in 2022.", () => {
        expect(typeof INSTANCE?.getAllContactsBornAndRegister(1993, 2022)).toBe("object");
        expect(INSTANCE?.getAllContactsBornAndRegister(1993, 2022)).toStrictEqual(EXPECTED_SALECK);
    });

    xit("must return all contact born in 2000 and earlier and registering in 2019 ad later.", () => {
        expect(typeof INSTANCE?.getAllContactsBornAndRegister(2000, 2019)).toBe("object");
        expect(INSTANCE?.getAllContactsBornAndRegister(1983, 2019)).toStrictEqual(EXPECTED_RENAUD);
    });

    xit("must return all contacts with email provider orange", () => {
        expect(typeof INSTANCE?.getAllContactsWithEmailProvider('orange')).toBe("object");
        expect(INSTANCE?.getAllContactsWithEmailProvider('orange')).toStrictEqual(EXPECTED_RENAUD);
    })
})

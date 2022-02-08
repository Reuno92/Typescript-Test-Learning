/**
 * Object unit
 */

/*
 *  Create class Contact with properties
 *  1 - use export keyword
 *  2 - use class keyword
 *  3 - name this class Contact
 *  4 - In parameter of constructor add public properties:
 *      email (string)
 *      phone with properties :
 *          country: number,
 *          number: number
 *      network: add properties in function of contact (optional or another) must take string for ids' record.
 */

/*
 *  Create below an object with class form
 *  1 - use export keyword
 *  2 - use class keyword
 *  3 - name this class AddressBook
 *  4 - In parameter of constructor add public properties:
 *      id (number),
 *      names with properties:
 *          first (string)
 *          last (string)
 *      date: add properties in function (optional or another)
 *            e.g.: birthday (string),
 *                  carPermit: { deliver: string, expire: string },
 *                  idCard: { deliver: string, expire: string }
 *      address: { street: string, number: number, zip: number, city: string, country: string } or must be an array another Object must be a class same properties
 *      contact takes Contact Class
 *      register must be a date
 *      isActive must be a boolean
 */

/**
 *  Object Unit class for testing
 */
export default class ObjectUnit {

    /*
     *  add type Array of AddressBook
     */
    public contacts: any;

    constructor() {
        /*
         *  Assign contacts an AddressBook object with id 1, names: { first: "Saleck", last: "El Jili" } and oother informations
         */
    }

    /*
     *  Create method it must return firstname following by lastname in function of id in parameter. In capitalize for each.
     */
    public getNames: any;

    /*
     * Create method it must return initial of firstname and lastName in capitalize.
     */
    public getSimplifyNames: any;

    /*
     *  Create method it must return birthday date in function of id in parameter.
     */
    public getBirthday: any;

    /*
     *  Create method, it must return Birthday's year of id in parameter.
     */
    public getYearBirthday: any;

    /*
     *  Create method, it must return actual age in function of id in parameter.
     */
    public getAge: any

    /*
     *  Create method, it must return address in function id and country.
     */
    public getAddress: any

    /*
     *  Create method, it must return network profile in function of id and one platform network (Facebook).
     */
    public getNetwork: any

    /*
     *  Create method, it must return all contacts which have active.
     */
    public getAllContactsIsActive: any

    /*
     *  Create method, it must return all contacts born in 1998 asn earlier and registering in 2020 and later.
     */
    public getAllContactsBornAndRegister: any

    /*
     *  Create method with all contacts with email which domain name is orange
     */
    public getAllContactsWithEmailProvider: any

    /*
     *  Create method with gives hours for each city in address in function of id. it must return array object city: string and hour: string.
     *
     */
    public getHoursforAllContactInCity: any
}

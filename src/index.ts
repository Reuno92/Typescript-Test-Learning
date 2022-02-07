/**
 *  Class for training to typescript
 *
 *  For begin. see "https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html"
 *  For learn types. download archive in "https://www.typescriptlang.org/cheatsheets"
 *  For uppercase, lowercase, capitalize, see "https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html"
 */
export default class Test {
  /* Créer une variable "name" avec un type string qui est assigné la valeur "Saleck" */
    public name: string = "Saleck";

  /* Créer une variable "figure" avec un type number avec la valeur 333 */
    public figure: number = 333;

  /* Créer une variable "Person" avec un objet javascript une clé "name" et "age" avec comme valeur "Saleck" et 29 */
    public Person: { name: string, age: number} = { name: "Renaud", age: 38 };

  /* Créer une variable "numberSequence" avec un array de nombre avec le type array<number> ou number[] avec les chiffres 1, 2 et 3 */
    public numberSequence: any;

  constructor() {}

  /*
   * Créer une méthode "uppercase" qui prends pour paramètre "str" avec le type "string".
   * avec valeur de retour "Uppercase".
   */
    public uppercase: any;

  /*
   * Créer une méthode "lowercase" qui prends pour paramètre "str" avec le type "string"
   * avec valeur de retour "LOWERCASE", ensuite appeler la méthode uppercase avec en argument "name".
   */
    public lowercase: any;

  /*
   * Créer une méthode "capitalize" qui prends pour paramètre "str" avec le type "string"
   * avec valeur de retour "CAPITALIZE", ensuite appeler la méthode uppercase avec en argument "name".
   */
    public capitalize: any;

  /*
   * Créer une méthode "numberToString" pour faire passer un argument en type "number" en retour un string d'un nombre
   */
    public numberToString: any;


  /*
   * Créer une méthode "stringToNumber" pour faire passer un nombre dans un string en nombre.
   */
    public stringToNumber: any;


  /*
   * Créer une méthode "operationMultiply" pour multiplier un premier nombre et un second.
   */
    public operationMultiply: any;

  /*
   * Créer une méthode "operationSubtraction" pour soustraire un premier nombre et un second.
   */
    public operationSubtraction: any;

  /*
   * Créer une méthode "joinNumber" pour joindre avec une virgule tous les nombres d'une chaîne séparer par des espaces.
   * exemple: "1 2 4 5 6 7 8"
   */
    public joinNumber: any;

  /*
   * Créer une méthode "filterById" pour filtrer un array d'object avec un id specific.
   */
    public filterById: any;

  /*
   *  Créer une méthode "removeFromArray" pour enlever un objet specifique d'un array object.
   */
    public removeFromArray: any;
}

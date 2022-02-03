# Typescript Learning

## Installation

Installer NodeJS sur votre machine si c'est pas encore le cas:
[NodeJS](https://nodejs.org/en/)

Installer typescript sur sa machine:
YARN
```bash
yarn global typescript
```

NPM
```bash
npm install -g typescript
```

## Démarrage

Taper la commande sur votre terminal dans le dossier où vous avez chargé ce repo.:

YARN
```bash
yarn
```

NPM
```bash
npm i
```

## Déroulement

Suivre les instructions sur le fichier index.ts
```typesscript
/* Créer une variable "name" avec un type string qui est assigné la valeur "Saleck" */
```

Créer ou completer la variable ou methode, avec le bon type et la bonne valeur :
```typescript
export class Test {
    // (...)
    
    /* Créer une variable "name" avec un type string qui est assigné la valeur "Saleck" */
    public name: string = "Saleck";
    
    // (...)
}
```

Tester la variable ou methode avec la commande :
YARN
```bash
yarn test
```

NPM
```bash
npm test
```

### Echec du test
Explique que le test a échoué, comme le message ci-dessous:
```bash
 ● test Class Test part variable › must return Saleck

    expect(received).toBe(expected) // Object.is equality

    Expected: "Saleck"
    Received: "Renaud"

       6 |   it('must return Saleck', () => {
       7 |     expect(typeof test?.name).toBe('string');
    >  8 |     expect(test?.name).toBe('Saleck');
         |                        ^
       9 |   });
      10 |
      11 |   xit('must return 333', () => {

      at Object.<anonymous> (src/test/index.test.ts:8:24)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 37 skipped, 38 total
Snapshots:   0 total
Time:        1.405 s, estimated 2 s
```

### Réussite du test

```bash
 PASS  src/test/index.test.ts
  test Class Test part variable
    ✓ must return Saleck (1 ms)
    ○ skipped must return 333
    ○ skipped must return object with Saleck and 29
    ○ skipped must return array with [1,2,3]
  test Class Test part method formatting string
    ○ skipped must return SALECK with method uppercase
    ○ skipped must return RENAUD with method uppercase
    ○ skipped must return ALEXANDRE with method uppercase
    ○ skipped must return alexandre in lowercase
    ○ skipped must return renaud in lowercase
    ○ skipped must return saleck in lowercase
    ○ skipped must return Saleck in lowercase
    ○ skipped must return Alexandre in lowercase
    ○ skipped must return Renaud in lowercase
  test Class Test part method for cast in string
    ○ skipped must return string of 300
    ○ skipped must return string of 66
    ○ skipped must return string of 777
    ○ skipped must return string of 10
    ○ skipped must return string of 3
  test Class Test part method for cast in number
    ○ skipped must return 300
    ○ skipped must return 66
    ○ skipped must return 777
    ○ skipped must return 10
    ○ skipped must return of 3
  test Class Test part simple multiply
    ○ skipped must return 3 * 3 = 9
    ○ skipped must return 6 * 6 = 36
    ○ skipped must return 7 * 2 = 14
    ○ skipped must return 2345 * 8352 = 19585440
  test Class Test part simple subtraction
    ○ skipped must return 3 - 3 = 0
    ○ skipped must return 6 - 3 = 3
    ○ skipped must return 7 - 2 = 5
    ○ skipped must return 2345 - 8352 = -6007
  test Class Test part join string
    ○ skipped must return 1,2
    ○ skipped must return 1,2,3
    ○ skipped must return 1,2,3,4,5
  test Class Test part filter array of object
    ○ skipped must return array object with id: 1
    ○ skipped must return array object with id: 2
    ○ skipped must return array object without id: 1
    ○ skipped must return array object without id: 2

Test Suites: 1 passed, 1 total
Tests:       37 skipped, 1 passed, 38 total
Snapshots:   0 total
Time:        1.388 s, estimated 2 s
```

Les tests qui sont annoté avec `✓` sont des test passé et réussi. Les tests à faire sont annoté `○`.

Pour éviter passé au test suivant, il faut changer la methode dans le fichier de test de `xit` en `it`.

Par exemple:
```bash
xit('must return 333', () => {
    expect(typeof test?.figure).toBe('number');
    expect(test?.figure).toBe(333);
});
```
en
```bash
it('must return 333', () => {
    expect(typeof test?.figure).toBe('number');
    expect(test?.figure).toBe(333);
});
```

Taper de nouveau la commande de test et faire ce qui est demandé. 

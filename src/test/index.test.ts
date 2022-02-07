import Test from '../index';

const test = new Test();

describe('test Class Test part variable', () => {
  it('must return Saleck', () => {
    expect(typeof test?.name).toBe('string');
    expect(test?.name).toBe('Saleck');
  });

  xit('must return the number 333', () => {
    expect(typeof test?.figure).toBe('number');
    expect(test?.figure).toBe(333);
  });

  xit('must return object with Saleck and 29', () => {
    expect(typeof test?.Person).toBe('object');
    expect(test?.Person).toStrictEqual({name: 'Saleck', age: 29});
  });

  xit('must return array with [1,2,3]', () => {
    expect(typeof test?.numberSequence).toBe('object');
    expect(test?.numberSequence).toStrictEqual([1, 2, 3]);
  });
});

describe('test Class Test part method formatting string', () => {
  xit('must return SALECK with method uppercase', () => {
    expect(typeof test?.uppercase('Saleck')).toBe('string');
    expect(test?.uppercase('Saleck')).toStrictEqual('SALECK');
  });

  xit('must return RENAUD with method uppercase', () => {
    expect(typeof test?.uppercase('renaud')).toBe('string');
    expect(test?.uppercase('renaud')).toStrictEqual('RENAUD');
  });

  xit('must return ALEXANDRE with method uppercase', () => {
    expect(typeof test?.uppercase('alexandre')).toBe('string');
    expect(test?.uppercase('alexandre')).toStrictEqual('ALEXANDRE');
  });

  xit('must return alexandre in lowercase', () => {
    expect(typeof test?.lowercase('ALEXANDRE')).toBe('string');
    expect(test?.lowercase('ALEXANDRE')).toStrictEqual('alexandre');
  });

  xit('must return renaud in lowercase', () => {
    expect(typeof test?.lowercase('RENAUD')).toBe('string');
    expect(test?.lowercase('RENAUD')).toStrictEqual('renaud');
  });

  xit('must return saleck in lowercase', () => {
    expect(typeof test?.lowercase('SALECK')).toBe('string');
    expect(test?.lowercase('SALECK')).toStrictEqual('saleck');
  });

  xit('must return Saleck in lowercase', () => {
    expect(typeof test?.capitalize('SALECK')).toBe('string');
    expect(test?.capitalize('SALECK')).toStrictEqual('Saleck');
    expect(test?.capitalize('saleck')).toStrictEqual('Saleck');
  });

  xit('must return Alexandre in lowercase', () => {
    expect(typeof test?.capitalize('ALEXANDRE')).toBe('string');
    expect(test?.capitalize('ALEXANDRE')).toStrictEqual('Alexandre');
    expect(test?.capitalize('alexandre')).toStrictEqual('Alexandre');
  });

  xit('must return Renaud in lowercase', () => {
    expect(typeof test?.capitalize('ALEXANDRE')).toBe('string');
    expect(test?.capitalize('RENAUD')).toStrictEqual('Renaud');
    expect(test?.capitalize('renaud')).toStrictEqual('Renaud');
  });
});

describe('test Class Test part method for cast in string', () => {
  xit('must return string of 300', () => {
    expect(test?.numberToString(300)).toBe('300');
  });

  xit('must return string of 66', () => {
    expect(test?.numberToString(66)).toBe('66');
  });

  xit('must return string of 777', () => {
    expect(test?.numberToString(777)).toBe('777');
  });

  xit('must return string of 10', () => {
    expect(test?.numberToString(10)).toBe('10');
  });

  xit('must return string of 3', () => {
    expect(test?.numberToString(3)).toBe('3');
  });
});

describe('test Class Test part method for cast in number', () => {
  xit('must return 300', () => {
    expect(test?.stringToNumber('300')).toBe(300);
    expect(typeof test?.stringToNumber('300')).toBe('number');
  });

  xit('must return 66', () => {
    expect(test?.stringToNumber('66')).toBe(66);
    expect(typeof test?.stringToNumber('66')).toBe('number');
  });

  xit('must return 777', () => {
    expect(test?.stringToNumber('777')).toBe(777);
    expect(typeof test?.stringToNumber('777')).toBe('number');
  });

  xit('must return 10', () => {
    expect(test?.stringToNumber('10')).toBe(10);
    expect(typeof test?.stringToNumber('10')).toBe('number');
  });

  xit('must return of 3', () => {
    expect(test?.stringToNumber('3')).toBe(3);
    expect(typeof test?.stringToNumber('3')).toBe('number');
  });
});

describe('test Class Test part simple multiply', () => {
  xit('must return 3 * 3 = 9', () => {
    expect(test?.operationMultiply(3, 3)).toBe(9);
  });

  xit('must return 6 * 6 = 36', () => {
    expect(test?.operationMultiply(6, 6)).toBe(36);
  });

  xit('must return 7 * 2 = 14', () => {
    expect(test?.operationMultiply(7, 2)).toBe(14);
  });

  xit('must return 2345 * 8352 = 19585440', () => {
    expect(test?.operationMultiply(2345, 8352)).toBe(19585440);
  });
});

describe('test Class Test part simple subtraction', () => {
  xit('must return 3 - 3 = 0', () => {
    expect(test?.operationSubtraction(3, 3)).toBe(0);
  });

  xit('must return 6 - 3 = 3', () => {
    expect(test?.operationSubtraction(6, 3)).toBe(3);
  });

  xit('must return 7 - 2 = 5', () => {
    expect(test?.operationSubtraction(7, 2)).toBe(5);
  });

  xit('must return 2345 - 8352 = -6007', () => {
    expect(test?.operationSubtraction(2345, 8352)).toBe(-6007);
  });
});

describe('test Class Test part join string', () => {
  xit('must return 1,2', () => {
    expect(test?.joinNumber('1 2')).toBe('1,2');
  });

  xit('must return 1,2,3', () => {
    expect(test?.joinNumber('1 2 3')).toBe('1,2,3');
  });

  xit('must return 1,2,3,4,5', () => {
    expect(test?.joinNumber('1 2 3 4 5')).toBe('1,2,3,4,5');
  });
});

describe('test Class Test part filter array of object', () => {
  const MOCK: Array<{id: number; name: string}> = [
    {
      id: 1,
      name: 'Saleck',
    },
    {
      id: 2,
      name: 'Renaud',
    },
    {
      id: 3,
      name: 'Alexandre',
    },
  ];

  xit('must return array object with id: 1', () => {
    expect(typeof test?.filterById(MOCK, 1)).toBe('object');
    expect(test?.filterById(MOCK, 1)).toStrictEqual([
      {
        id: 1,
        name: 'Saleck',
      },
    ]);
  });

  xit('must return array object with id: 2', () => {
    expect(typeof test?.filterById(MOCK, 3)).toBe('object');
    expect(test?.filterById(MOCK, 3)).toStrictEqual([
      {
        id: 3,
        name: 'Alexandre',
      },
    ]);
  });

  xit('must return array object without id: 1', () => {
    expect(typeof test?.removeFromArray(MOCK, 1)).toBe('object');
    expect(test?.removeFromArray(MOCK, 1)).toStrictEqual([
      {id: 2, name: 'Renaud'},
      {id: 3, name: 'Alexandre'},
    ]);
  });

  xit('must return array object without id: 2', () => {
    expect(typeof test?.removeFromArray(MOCK, 3)).toBe('object');
    expect(test?.removeFromArray(MOCK, 3)).toStrictEqual([
      {id: 1, name: 'Saleck'},
      {id: 2, name: 'Renaud'},
    ]);
  });
});

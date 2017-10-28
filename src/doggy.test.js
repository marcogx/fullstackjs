import Dog from './doggy';

test('Dog.bark', () => {
  const testDog = new Dog('test');
  expect(testDog.bark()).toBe('I am test');
});

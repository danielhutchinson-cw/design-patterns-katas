import { Greeter } from './greeter';

describe('The Greeter', () => {
    const sut = new Greeter();
    
    it('greets the user by name', () => {
        expect(sut.greet('Dan')).toBe('Hello, Dan!');
    })
})
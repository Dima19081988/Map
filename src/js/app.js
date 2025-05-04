// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export class ErrorRepository {
    constructor() {
        this.errors = new Map([
            [400, 'Bad Request'],
            [404, 'Not Found'],
            [502, 'Bad Gateway'],
            [504, 'Gateway Timeout']
        ]);
    }

    translate(code) {
        return this.errors.get(code) || 'Unknown error';
    }
}
const should = require('chai').should;
const fizzBuzzer = require('../fizzBuzzer');

//unit tests for fizzBuzzer function
//remember the rules for the game, 
//num % 3 === 0 ; this num is a fizz
//num % 5 === 0 ; this num is a buzz
//lastly, 
//num % 15 === 0; this num is a fizz-buzz 
describe('fizzBuzzer', function() {
	it('should return right buzzword', function() {
		const normalCases = [
			{num: 15, expected: 'fizz-buzz'},
			{num: 30, expected: 'fizz-buzz'},
			{num: 5, expected: 'buzz'},
			{num: 10, expected: 'buzz'},
			{num: 6, expected: 'fizz'},
			{num: 9, expected: 'fizz'},
			{num: 4, expected: 4},
			{num: 7, expected: 7}
		]
		normalCases.forEach(function(i) {
			const answer = fizzBuzzer(i.num);
			answer.should.equal(i.expected)
		});
	});

	it('should throw an error', function() {
		const badCases = ['hello world', true, 'false'];
		badCases.forEach(function(i) {
			(function() {
          		fizzBuzzer(i)
      		}).should.throw(Error);
		});
	});
});
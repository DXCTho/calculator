const calculator = require ('./main.js');

describe('operate', function() {
	it('adds 0 and 0', function() {
		expect(calculator.add(0,0)).toEqual(0);
	});

	it('adds 2 and 2', function() {
		expect(calculator.add(2,2)).toEqual(4);
	});

	it('adds positive numbers', function() {
		expect(calculator.add(2,6)).toEqual(8);
	});
});
'use strict';

var foo = { id: 123 };

var fooTest = [
	{ id: 345 },
	{id: 123}
];

var result = fooTest.find( test => test.id === foo.id );

document.write(result);
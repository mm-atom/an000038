const test = require('ava');

const { default: a } = require('../dist/index');

test('bigint类型转换=>正常转换', (t) => {
	const r = a([{ a: 1n }, { b: 2n }, { c: 3n }]);
	t.deepEqual(r, [{ a: 1 }, { b: 2 }, { c: 3 }])
});

test('bigint类型转换=>丢失精度', (t) => {
	const r = a([{ big: 111111111111111111n }]);
	t.deepEqual(r, [{ big: 111111111111111100 }])
});

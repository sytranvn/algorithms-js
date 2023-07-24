import { describe , it } from 'node:test'
import assert from 'node:assert'
import { performance } from 'node:perf_hooks';
import Queue from "../../src/fundamentals/queue.js"

describe("queue", () => {
	it("allows adding item", () => {
		const q = new Queue()
		q.enqueue(1);
		assert.equal(q.size(), 1)
	});

	it("allows removing item from queue", () => {
		const q = new Queue();
		q.enqueue(1);
		q.dequeue();
		assert.equal(q.size(), 0);
	});

	it("allows iterating through items", () => {
		const q = new Queue();
		q.enqueue(1);
		q.enqueue(2);
		q.enqueue(3);
		q.enqueue(4);
		q.enqueue(5);
		let i = 1;
		for (const item of q) {
			assert.equal(item, i);
			i++;
		}
		assert.equal(q.size(), 0);
	})
})

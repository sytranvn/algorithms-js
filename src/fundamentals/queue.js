import Iterable from "./iterable.js";

/**
* Class queue of items
* @template Item
* @class Queue<Item>
* @implements Iterable<Item>
*/
export default class Queue extends Iterable {
	/**
	 * @type Item[]
	 */
	#items;
	constructor() {
		super();
		this.#items = [];
	}

	/**
	* Add an item to queue
	* @param {Item} item new item
	*/
	enqueue(item) {
		this.#items.push(item)
	}

	/**
	* Remove the least recently added item
	* @returns {Item} item
	*/
	dequeue() {
		return this.#items.shift()
	}
	
	/**
	* Number of items in the queue
	*/
	size() {
		return this.#items.length;
	}
	
	/**
	* Is the queue empty?
	*/
	isEmpty() {
		return this.#items.length === 0;
	}

	[Symbol.iterator]() {
		return {
			next: () => {
				if (!this.isEmpty()) {
					return { value: this.dequeue(), done: false };
				} else {
					return { done: true }
				}
			}
		}
	}
}

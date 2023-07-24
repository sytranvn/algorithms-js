import Iterable from './iterable.js';

/**
 * Class Bag of items
 * @template Item
 * @class Bag<Item>
 * @implements Iterable<Item>
 */
class Bag extends Iterable {
	/**
	* @type Item[]
	*/
	items
	constructor() {
		this.items = []
	}
	/**
	* Add an item
	* @param {Item} item
	* @returns void
	*/
	add(item) {
		this.items.push(item)
	}

	/**
	* Check if bad is empty
	* @returns {boolean} isEmpty
	*/
	isEmpty() {
		return this.items.length === 0;
	}

	/**
	* Size of bag
	* @returns {number} size
	*/
	size() {
		return this.items.length
	}
}

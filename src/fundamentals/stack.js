
import Iterable from "./iterable";

/**
* Class stack of items
* @template Item
* @class Stack<Item>
* @implements Iterable<Item>
*/
export default class Stack extends Iterable {
	/**
	 * @type Item[]
	 */
	items;
	constructor() {
		this.items = [];
	}

	/**
	* Add an item to stack
	* @param {Item} item new item
	*/
	push(item) {
		this.items.push(item)
	}

	/**
	* Remove the most recently added item
	* @returns {Item} item
	*/
	pop() {
		return this.items.pop()
	}
	
	/**
	* Number of items in the stack
	*/
	size() {
		return this.items.length;
	}
	
	/**
	* Is the stack empty?
	*/
	isEmpty() {
		return this.size() === 0;
	}
}

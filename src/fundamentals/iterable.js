/**
 * Interfaces for classes that contains collection of items
 * @template Item
 * @interface Iterable<Item>
 */
export default class Iterable {
	/**
	* Check if collection is empty
	* @returns {boolean} empty
	*/
	isEmpty() {
		throw new Error("Not implemented")
	}
	
	/**
	* Size of collection
	* @returns {number} size
	*/
	size() {
		throw new Error("Not implemented")
	}
}

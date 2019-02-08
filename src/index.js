const crypto = require('crypto');
/**
 * A class for creating a sha1 key based on a provided string
 * @class
 */
/**
 * @typedef {string} Sha1Hash
 */
class Sha1 {
    /**
     * @param {string} input An input string to base the key on
     */
    constructor(input) {
        if (!input) throw new TypeError('Input cannot be blank');

        /**
         * The original input string
         * @type {string}
         */
        this.origin = input;
    }

    /**
     * Generates a new sha1 key, automatically called when the class is initialized
     * @param {string} input The input key
     * @returns {Sha1Hash}
     */
    generateKey(input) {
        console.log(input);
    }
}

module.exports = Sha1;
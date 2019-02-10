const crypto = require('crypto');
const Util = require('../util/Util');
/**
 * A class for creating a sha1 key based on a provided string
 * @class
 */
class Sha1 {
    /**
     * @param {string} input An input string to base the key on, spaces will be removed
     * @param {Sha1Options} [options]
     */
    constructor(input, options = {}) {
        if (!input) throw new TypeError('Input cannot be blank');
        if (options.randomizeInput) input = this.shuffleString(input);
        input = input.toLowerCase();

        /**
         * The original input string
         * @type {string}
         */
        this.origin = options.removeSpaces ? Util.removeSpaces(input) : input;

        /**
         * The hash generated for by the crypto
         * @type {string}
         */
        this.hash = this.generateKey(this.origin);
    }

    /**
     * Generates a new sha1 key, automatically called when the class is initialized
     * @param {string} input The input key
     * @returns {string} The Sha1 hash
     */
    generateKey(input) {
        return crypto.createHash('sha1').update(new Buffer(input)).digest('hex');
    }

    /**
     * Shuffles an array or string and returns a string, if nothing is provided, then the original
     * string used to initialize the sha1 hash will be used
     * @param {Array|String} shuffle Array or string to shuffle
     * @returns {string}
     */
    shuffleString(shuffle) {
        if (!shuffle) shuffle = this.origin;
        shuffle = Util.removeSpaces(shuffle);
        const arr = shuffle.toLowerCase().split('');
        for (let i = arr.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = arr[j];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr.join('');
    }
}
/**
 * @typedef {Object} Sha1Options Options when initializing the Sha1 hash
 * @property {boolean} [removeSpaces] Whether to remove spaces
 * @property {boolean} [randomizeInput] Whether to randomize the input string
 */

module.exports = Sha1;
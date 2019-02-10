/**
 * A class with general Utility methods
 */
class Util {
    constructor() {
        throw new Error(`The class ${this.constructor.name} cannot be initialized`);
    }

    /**
     * Removes spaces from a string
     * @param {string} string String to remove spaces of
     * @returns {string}
     * @static
     */
    static removeSpaces(string) {
        return string.replace(/ +/g, '');
    }
}

module.exports = Util;
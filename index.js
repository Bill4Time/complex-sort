/**
 * Creates a function that can be passed to Array.prototype.sort which will apply the supplied list of sort functions
 * to the array, creating a compound/complex sort.
 * @param args.sortingFunctions {Array} The list of functions to apply to this array for sorting
 * refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort for how to
 * create an appropriate sorting function
 * @param args.invert {Boolean} Invert the order of the sort results, ie ascending or descending
 * @returns {Function} the sorting function which composes the list of supplied sorting functions
 */
module.exports = function (args) {
    var sortingFunctions = args.sortingFunctions,
        invert = args.invert ? -1 : 1;

    function sort (a, b) {
        var i,
            comparisonResult = 0;

        for (i = 0; i < sortingFunctions.length; i += 1) {
            comparisonResult = sortingFunctions[i](a, b);

            comparisonResult *= invert;

            if (comparisonResult !== 0) {
                break;
            }
        }

        return comparisonResult;
    }

    return sort;
};
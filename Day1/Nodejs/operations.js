function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

//By default node modules are encapsulated so they need to be exported to use in other files
//Different ways to export modules
//module.exports = add; 

/*module.exports = {
    add: add,
    subtract: subtract
};
*/

// module.exports.add = add;
// module.exports.subtract = subtract;

exports.add = add;
exports.subtract = subtract;
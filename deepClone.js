function deepClone(value) {
    let returnObj = {}

    function recursiveClone(item, source) {
        if (Array.isArray(item)) {
        } else if (typeof item === 'object') {
        } else {
            return item;
        }
    }
}
const bar = {cat: "dog"};
const one = {foo: bar};

const two = {...one};

two.foo.cat = "elephant";

console.log(bar.cat);

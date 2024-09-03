
function intersectionWith(comparator, ...arrays) {
    if(arrays.length === 0) return [];

    const firstArr = arrays[0];

    const filteredArr = firstArr.filter((item) => {
        let exists = true;

        arrays.forEach((arr) => {
            if(!arr.some((element) => comparator(element, item))) {
                exists = false;
            }
        })

        return exists;
    })

    return filteredArr;
  }

  intersectionWith()
// function intersectionWith(comparator, ...arrays) {
//     for (let index = 0; index < arrays.length; index++) {
//         const array = arrays[index]
//         for (let j = 0; j < array.length; j++) {
//             const array2 = array[j]
//             matchExists(array, array2, comparator)
//         }
//     }
// }

// function matchExists(array1, array2, comparator) {
//     let exists = false
//     for (let index = 0; index < array1.length; index++) {
//         for (let j = 0; j < array2.length; j++) {
//             if (comparator(array1[index], array2[j])) exists = true
//         }
//     }
//     return exists
// }

const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4, 5];
    const arr3 = [3, 4, 5, 6, 7];

    intersectionWith((x, y) => x == y, arr1, arr2, arr3)
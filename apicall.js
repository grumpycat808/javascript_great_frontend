sayHello() // Output: Hello!

function sayHello() {
    console.log('Hello!')
}

/** 
async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        // Handle HTTP errors
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      return data;
    //   return data;
    } catch (error) {
      // Handle any errors
      console.error('Error fetching data:', error.message);
      throw error; // Optionally rethrow the error if needed
    }
  }

const data = fetchData('https://jsonplaceholder.typicode.com/posts/1').then(res => console.log(res));
// console.log("data", data);

function blockMainThread() {
    let i = 0
    while (i < 1000000000000) {
        // Busy wait
        i++
    }
}

// blockMainThread()

// Without anonymous function
function greaterThanOne(num) {
    return num > 1
};
[1, 2, 3].filter(greaterThanOne)

// With anonymous function
const newArr = [1, 2, 3].filter((num) => num > 1)
// console.log('newArr', newArr)

**/

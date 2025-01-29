async function fetchData(url) {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            // Handle HTTP errors
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        // Handle any errors
        console.error('Error fetching data:', error.message)
        throw error // Optionally rethrow the error if needed
    }
}

const data = fetchData('https://jsonplaceholder.typicode.com/posts/1')
console.log('data', data)
const person = {
    name: 'Catherine',
    sayName: () => console.log('arrow: ' + this.name),
}

const person2 = {
    name: 'Catherine',
    sayName: function () {
        console.log('non-arrow: ' + this.name)
    },
}

person.sayName()
person2.sayName()

// https://jsonplaceholder.typicode.com/posts/1

// const getData = async () => {
//     try {
//         const json = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//         const res = await json.json()

//         return res
//     } catch (error) {
//         throw 'Request failed'
//     }
// }

// // getData()
// //     .then((res) => console.log('DAta: ', res))
// //     .catch((err) => console.log(err))

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const task1 = async () => {
//     await delay(1000);
//     return "Task 1 Complete"
// };

// const task2 = async () => {
//     await delay(1000);
//     return "Task 2 Complete";
// };

// const sequential =  async (func1, func2) => {
//    const one = await func1();
//    console.log("one done")
//    const two = await func2();
//    console.log("two done")
//    return [one, two]
// }

// const parallel = async (func1, func2) => {
//     return Promise.all([func1(), func2()])
// }

// // parallel(task1, task2).then(res => console.log('res', res))

// const fetchData = async () => {
//     throw new Error("Failed to fetch data");
//   };

//   const processData = async () => {
//     const data = await fetchData();
//     return data + " processed";
//   };

// const getDataSafe = async () => {
//     try {
//         const data = await processData();
//         return data;
//     } catch (error) {
//         throw "Req failed"
//     }
// }

// getDataSafe().then(res => console.log("Success: ", res)).catch(err => console.log("error 62: " + err))

const getData = async () => {
    // await
    try {
        const json = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const post = await json.json()
        const userId = post.userId

        const userJson = await fetch(
            `https://jsonplaceholder.typicode.com/users/booooo`,
        )
        await userJson.json().then((res) => console.log('name: ' + res.name))
    } catch (err) {
        console.log('error while fetching data: ' + err)
    }
}

getData()

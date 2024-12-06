const getUser1 = () => {
    fetch('https://randomuser.me/api/')
        .then((res) => res.json())
        .then((res) => console.log(res))
}

const hey = new Promise((res) => {
        setTimeout(() => {
            res()
        }, 3000)
    })

const getUser2 = async() => {

    try {

        // const json = await fetch('https://randomuser.me/api/')
        const json = await fetch('does not exist.com');
        const res = await json.json();
        return res;
    } catch (error) {
        // return "Error with the request!"
        throw new Error("Problem with the request")
    }
    
}

// getUser1();
// console.log("Hey")
getUser2().then(res => console.log("Result in then: " + res)).catch(err => console.log("in catch block " + err))
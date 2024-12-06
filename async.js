const getUser1 = () => {
    fetch('https://randomuser.me/api/')
        .then((res) => res.json())
        .then((res) => console.log(res))
}

const getUser2 = async() => {
    const json = await fetch('https://randomuser.me/api/')
    
}

getUser1();
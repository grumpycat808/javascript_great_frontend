function promiseRace(iterable) {
    return new Promise((res, rej) => {
        
    })
}

const p0 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(42);
    }, 100);
  });
  const p1 = new Promise((_, reject) => {
    setTimeout(() => {
      reject('Err!');
    }, 400);
  });
  
  await promiseRace([p0, p1]); // 42

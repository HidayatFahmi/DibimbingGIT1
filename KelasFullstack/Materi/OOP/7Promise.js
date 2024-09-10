// fake request promise

const requestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4000);
        setTimeout(()=>{
            if(delay <= 3000){
                resolve("Success fetching data");
            }
            else{
                reject("Failed fetching data")
            }
        }, delay)
    })
}

requestPromise("google.com");
requestPromise("twitter.com")
    .then((responese) => {
        console.log("Success Alhamdulillah");
    }).then((responese) => {
        console.log("Success Alhamdulillah");
    }).then((responese) => {
        console.log("Success Alhamdulillah");
    }).then((responese) => {
        console.log("Success Alhamdulillah");
    }).catch((error) => {
        console.log(error);
    })


// 


   const requestPromise2 = () => {
    return new Promise((resolve, reject) => {
        resolve(()=>{
            console.log("Running...")
        });
        reject(()=>{
            console.log("Fail....")
        });
    })
   }

   requestPromise2().then(() => requestPromise2())
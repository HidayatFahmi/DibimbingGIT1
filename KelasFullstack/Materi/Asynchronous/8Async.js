// async function hello(){
     
// }

// const hello2 = async () => {
//     // throw `maaf gak kenal`
//     return `Hello world`
// }

// hello2().then((res)=> {
//     console.log('response',res)
// }).catch((err) => {
//     console.log('Error : ', err);
// })

// // Dengan Await

// const delayChangeColor = (color, delay) => {
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             document.body.style.backgroundColor = color;
//             console.log(`Done`);
//             resolve();
//         },delay)
//     })
// }

// async function changeColor() {
//     await delayChangeColor('green', 1000).then((res)=> console.log("green ready",res));
//     await delayChangeColor('yellow', 1000);
//     await delayChangeColor('blue', 1000);
//     return `All Done`
// }

// changeColor().then((res)=> console.log(res));

// handle error

const fetchingData = (url) => {
    return new Promise((resolve, reject) => {
        const waktuTunda = Math.floor(Math.random() * 3000);
        setTimeout(() => {
            if(waktuTunda < 2000){
                resolve("Succes fething data...");
            }
            else{
                reject("Failed fething the data");
            }
        },waktuTunda)
    })
}

async function Test(){
    try {
        let result = await fetchingData("https://palestine.com").then((resp) => console.log(resp));
    } catch (error) {
        console.log(`error from catch : ${error}`)
    }
}

Test();
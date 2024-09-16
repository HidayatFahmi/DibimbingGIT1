

// setTimeout(()=>{
//     document.body.style.backgroundColor = "red";
//     setTimeout(()=>{
//     document.body.style.backgroundColor = "blue";
//     },1000)
// },1000);


const requestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500);
    setTimeout(()=>{
        console.log(delay);
        if(delay > 3000){
            failure('error set time out over 4000 ms');
        }
        else{
            success(`Success fetching data ${url}`);
        }
    },delay)
}

// Callback Hell 

requestCallback("Https://wewewe", function(response){
    console.log(`${response}`);
    requestCallback("Https://wewewe", function(response){
        console.log(`${response}`);
        requestCallback("Https://wewewe", function(response){
            console.log(`${response}`);
            requestCallback("Https://wewewe", function(response){
                console.log(`${response}`);
                requestCallback("Https://wewewe", function(response){
                    console.log(`${response}`);
                }, function(error){
                    console.log(`${error}`);
                })
            }, function(error){
                console.log(`${error}`);
            })
        }, function(error){
            console.log(`${error}`);
        })
    }, function(error){
        console.log(`${error}`);
    })
}, function(error){
    console.log(`${error}`);
})









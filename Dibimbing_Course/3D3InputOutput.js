const rl = require('readline-sync');
const registeredUsername = "hidayatfahmi"
const registeredPass = "fahmi221298"

let nama = rl.question("name : ");
let username = rl.question("Username : ");

let usia = rl.questionInt("Umur :",{
    limitMessage : "input harus angka"
});

let password = rl.question("Pass : ", {
    hideEchoBack : true,
});

console.log(`Nama : ${nama}`);
console.log(`Username : ${username}`);
console.log(`Umur : ${usia}`);
console.log(`Pass : ${password}`);

// proses login

    if(registeredUsername != username){
        console.log("username tidak sesuai")
    }

    else if(registeredPass != password){
    console.log("password tidak sesuai")
    }

    else if(username == registeredUsername && registeredPass == password){
        console.log("Anda berhasil login");
    }
    else{
    console.log("gagal Login")
    }


const form = document.querySelector("form");
const input = document.querySelector("input");
const lists =  document.querySelector("#notes");
let index = 1;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let newNote = input.value;
    const list = document.createElement("li");
    list.classList.add("list", `list${index}`)
    list.innerText = newNote;
    lists.appendChild(list);

    input.value = "";
    index++;
})

input.addEventListener("input", function(e){
    console.log(e.target.value)
})
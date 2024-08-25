const name = "fahmi hidayat";
const data = ["fahmi",25,true];
const nameArray = name.split(",").join(" ").replace(/\s+/g, '');
const nestedArray = [1,2,3,[4,5,6],7,8,9];
const unboxNested = [];
const clubs = [
    {
    Barcelona : [
        {id:1, name:"Messi",position:"RW"},
        {id:2, name:"Pique",position:"RCB"},
        {id:3, name:"Puyol",position:"LCB"},
        {id:4, name:"Alba",position:"LB"},
        ]},
    {realMadrid : [
        {id:1, name:"Ronaldo", position:"RW"},
        {id:2, name:"Benzema", position:"ST"},
        {id:3, name:"Ozil", position:"AMF"},
        {id:4, name:"Ramos", position:"RCB"},
        ]}
]

console.log(nameArray)

for(x of nameArray){
    console.log(x);
}

for(let a=0;a<nestedArray.length;a++){
    if(nestedArray[a].length>1){
        for(let b=0;b<nestedArray[a].length;b++){
            unboxNested.push(nestedArray[a][b]);
        }
    }else{
        unboxNested.push(nestedArray[a]);
    }
}

console.log(unboxNested);
class Person{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
}

class Author extends Person{
    constructor(name){
        super(name, "AUTHOR");
    }
}

class Reader extends Person{
    constructor(name){
        super(name, "READER")

        this.read = function (post){
            post.readers.push(this);
        }
    }
}

class Post{
    constructor(title, author){
        this.title = title;
        this.readers = [];

        let postAuthor = (author) => {
            if(author.type == "AUTHOR"){
                return author.type;
            }
            else{
                return "Type must be Author"
            }
        };

        this.getAuthor = () => {
            return postAuthor(author);
        }

    }
}

const fahmi = new Author("Fahmi");
const dito = new Reader("Dito");
const aldy = new Reader("Aldy");
const leo = new Reader("Leo");

const batamNews1 = new Post("Lay off 2024",fahmi);
const batamNews2 = new Post("Infineon PHK besar2an",fahmi);

dito.read(batamNews1);
aldy.read(batamNews1);

console.log(fahmi.name);
console.log(fahmi.type);
console.log(dito.name);
console.log(dito.type);
console.log(batamNews1.title); 
console.log(batamNews1.getAuthor()); 
console.log(batamNews1.readers); 



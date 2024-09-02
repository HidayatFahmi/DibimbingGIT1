function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function(){
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`;
}

// console.log(Color(2,3,4).rgb());
const objColor = new Color(2,3,4);
console.log(objColor.rgb());

document.body.style.backgroundColor = new Color(100, 70, 150).rgb();
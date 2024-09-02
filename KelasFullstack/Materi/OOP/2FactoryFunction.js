const hex = (r, g, b) => {
    return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

console.log(hex(100,102,90));

function convertColor (r,g,b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function(){
        return `rgb(${this.r},${this.g},${this.b})`;
    }

    color.hex = function(){
       const {r, g, b} = this
        return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

console.log(convertColor(100,80,90).rgb());
console.log(convertColor(100,80,90).hex());
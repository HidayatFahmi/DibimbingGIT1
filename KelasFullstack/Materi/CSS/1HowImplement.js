const inlineStyle = document.querySelector(".inlineStyle");
const inlineStyleButton = document.querySelector(".inlineStyle button");
const internalStyle = document.querySelector(".internalStyle");
const internalStyleButton = document.querySelector(".internalStyle button");
const textAligning = document.querySelector(".textAligning");
const leftAligning = document.querySelector(".textAligning .lefting")
const centerAligning = document.querySelector(".textAligning .centering");
const rightAligning = document.querySelector(".textAligning .righting")

const fontFamilies = ["Arial", "Verdana", "Times New Roman", "Courier New", "Georgia", "Tahoma", "Trebuchet MS"];

const changeColor = () => {
    const randomColor1 = Math.ceil(Math.random()*255);
    const randomColor2 = Math.ceil(Math.random()*255);
    const randomColor3 = Math.ceil(Math.random()*255);
    
    inlineStyle.style.backgroundColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
}

const changeFont = () => {
    const randomFont = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
    console.log(Math.floor(Math.random()*fontFamilies.length));
    internalStyle.style.fontFamily = randomFont;
    internalStyle.style.fontStyle = "normal";
}

inlineStyleButton.addEventListener("click", changeColor);
internalStyleButton.addEventListener("click", changeFont);

leftAligning.addEventListener("click",function(){
    textAligning.style.textAlign = "left";
})
centerAligning.addEventListener("click",function(){
    textAligning.style.textAlign = "center";
})
rightAligning.addEventListener("click",function(){
    textAligning.style.textAlign = "right";
})

const bodyColorSlider = document.querySelector(".bodyColorGroup input");
bodyColorSlider.addEventListener("input", function(e){
    document.body.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${e.target.value})`
})


const score = document.getElementsByClassName("score")[0];
const kurangButton = document.querySelector(".kurang");
const tambahButton = document.querySelector(".tambah");

let point = 0;
kurangButton.onclick = (e) => {
    point--;
    score.innerHTML = point;
}
tambahButton.onclick = (e) => {
   point++;
   score.innerHTML = point;
}

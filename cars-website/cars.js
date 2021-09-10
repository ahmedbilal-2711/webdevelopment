// Changing images automatically
let slideNum = 0;
let specsNum = 0;
function slide() {
  var getImg = document.getElementsByClassName("carSlide");
  for (let i = 0; i < getImg.length; i++) {
      getImg[i].style.display = "none";
  }
  slideNum++;
  if (slideNum > getImg.length) {
      slideNum = 1;
    }
    getImg[slideNum - 1].style.display = "block";
    imgInd(slideNum - 1);
}
setInterval(slide, 4000);

// Circles Indication to Changing Images
let imgInd = (i) => {
  let j = 0;
  let hp = document.getElementById("hp");
  let rim = document.getElementById("rim");
  let seat = document.getElementById("seat");
  let tr = document.getElementById("tr");
  
  for (; j < 6; j++) {
    if (j != i) {
        document.getElementById("c" + j).style.backgroundColor = "black";
    } else {
        document.getElementById("c" + i).style.backgroundColor ="rgb(197, 150, 150)";
        if (i==0) {
            let cns=document.getElementById("carNameSpecs");
            cns.innerHTML="Audi";
            hp.innerHTML="1000 HP";
            rim.innerHTML="Alloy";
            seat.innerHTML="Leather Black";
            tr.innerHTML="Yes";
        }
        else if (i==1) {
            let cns=document.getElementById("carNameSpecs");
            cns.innerHTML="Audi";
            hp.innerHTML="1200 HP";
            rim.innerHTML="Alloy";
            seat.innerHTML="Leather Brown";
            tr.innerHTML="Yes";
        }
        else if (i==2) {
            let cns=document.getElementById("carNameSpecs");
            cns.innerHTML="Sports Car";
            hp.innerHTML="1800 HP";
            rim.innerHTML="Alloy";
            seat.innerHTML="Leather Yellow";
            tr.innerHTML="No";
        }
        else if (i==3) {
            let cns=document.getElementById("carNameSpecs");
            cns.innerHTML="Chevorlet";
            hp.innerHTML="1200 HP";
            rim.innerHTML="Alloy";
            seat.innerHTML="No Covers";
            tr.innerHTML="No";
        }
        else if (i==4) {
            let cns=document.getElementById("carNameSpecs");
            cns.innerHTML="Mercedes";
            hp.innerHTML="1600 HP";
            rim.innerHTML="Alloy";
            seat.innerHTML="Leather Black";
            tr.innerHTML="Yes";
        }
        else {
            let cns=document.getElementById("carNameSpecs");
            cns.innerHTML="Range Rover";
            hp.innerHTML="2000 HP";
            rim.innerHTML="Alloy";
            seat.innerHTML="Leather Red";
            tr.innerHTML="Yes";
        }
    }
  }
};
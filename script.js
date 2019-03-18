var btnOne = document.querySelector("#btn-one");
var btnTwo = document.querySelector("#btn-two");
var btnThree = document.querySelector("#btn-three");
var toast = document.querySelectorAll(".toast");
var section = document.querySelector("section");
var sectionForm =  document.querySelector(".section-form");
var btnFour = document.querySelector("#btn-four");
var form = document.querySelector(".form");
var formText = document.querySelector("#toast-text");
var formBtn = document.querySelector("#toast-btn");
var sectionName = document.querySelectorAll(".section-name");


btnOne.addEventListener('click',function(){
    toast[1].style.visibility = 'hidden';
    toast[0].style.visibility='visible';
    setTimeout(function() {
        toast[0].style.visibility='hidden'},2000)
    });
 btnTwo.addEventListener('click',function(){
     toast[0].style.visibility = 'hidden';
    toast[1].style.visibility='visible';
    setTimeout(function() {
        toast[1].style.visibility='hidden'},2000)
    });
var n=69;
btnThree.addEventListener('click',function(){
    var sectionName = document.createElement("div");
    sectionName.classList.add("section-name");
    var btnFive = document.createElement("button");
    btnFive.innerHTML = String.fromCharCode(n);
    sectionName.appendChild(btnFive);
    section.appendChild(sectionName);
    n++;
    changeColor();
});
btnFour.addEventListener('click', () => {
    sectionForm.style.visibility = "Visible";
    form.style.transitionDuration = "0.2s";
    sectionForm.style.transitionDuration = "0.2s";
    form.style.height = "200px";
    form.style.width = "500px";
});
formBtn.addEventListener('click', (e) => {
    sectionForm.style.visibility = "hidden";
    form.style.transitionDuration = "0s";
    sectionForm.style.transitionDuration = "0s";
    form.style.height = "0px";
    form.style.width = "0px";
    toast[0].style.visibility = "visible";
    toast[0].innerHTML = formText.value;
    setTimeout(function() {
        toast[0].style.visibility = "hidden";
        toast[0].innerHTML = "Saloni singh"
            }, 2000);
            formText.value = "";
});


const changeColor =  () => {
    const btnFive = sectionName[4];
    if(btnFive) {
        console.log(btnFive);
    }else {
        console.log(btnFive);
    }
}


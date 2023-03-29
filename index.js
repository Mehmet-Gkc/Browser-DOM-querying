document.querySelector("body").style.fontSize = "24px";
document.querySelector(".title").style.textAlign = "center";

const menüHeading = document.querySelectorAll(".category");
menüHeading.forEach((head) => {
    head.style.color = "red";
    head.style.fontSize = "32px"
    head.style.textDecoration = "underline";
});

const main = document.querySelector("main");
main.style.display = "flex";
main.style.justifyContent = "space-evenly"

const colorGenerator = () => {
    const zahl1 = Math.floor(Math.random()*255);
    const zahl2 = Math.floor(Math.random()*255);
    const zahl3 = Math.floor(Math.random()*255);
    const zahl4 = Math.random();
    return `rgba(${zahl1},${zahl2},${zahl3},${zahl4})`
}

const allFood = document.querySelectorAll(".food-category");
allFood.forEach((list) => {
    list.style.backgroundColor = colorGenerator();
    list.style.width = "10rem";
    list.style.padding = "1em 3rem"
});

const h3 = document.getElementById("warning");
h3.style.textAlign = "center";
h3.style.fontSize = "2.3rem";

const allergiesUl = document.querySelector(".allergies");
allergiesUl.style.display = "flex";
allergiesUl.style.flexDirection = "column";
allergiesUl.style.justifyContent = "center";
allergiesUl.style.alignItems = "center";

const allAllergy = document.querySelectorAll(".allergy-info");

allAllergy.forEach((li, index) => {
    if(index % 2 === 0) {        
        li.style.backgroundColor = "#99e6ff"
    } else {
        li.style.backgroundColor = "#ff6666"
    };       
    li.style.listStyle = "none";
    li.style.width = "30rem";
    li.style.padding = "1rem";
});

const footer = document.querySelector("footer");
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.gap = "5%";
footer.style.flexWrap = "wrap";

const section = document.querySelectorAll(".food-desc");
section.forEach((sec) => {
    sec.style.display = "flex";
    sec.style.justifyContent = "center";
    sec.style.alignItems = "center";
    sec.style.border = "5px orange solid";
    sec.style.borderRadius = "50%";
    sec.style.padding = "1rem";
    sec.style.margin = "1rem";
    sec.style.width = "7rem";
    sec.style.height = "7rem";
});



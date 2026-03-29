const words=[
"Sales Consultant",
"Systems Developer",
"Business Intelligence Specialist",
"Customer Communication Expert"
];

let i=0;
let j=0;
let currentWord="";
let isDeleting=false;

function type(){

currentWord=words[i];

if(isDeleting){j--;}else{j++;}

document.querySelector(".typing").textContent=
currentWord.substring(0,j);

if(!isDeleting && j===currentWord.length){

isDeleting=true;

setTimeout(type,1500);

return;

}

if(isDeleting && j===0){

isDeleting=false;

i++;

if(i===words.length){i=0;}

}

setTimeout(type,120);
}

type();

window.addEventListener("scroll",()=>{

document.querySelectorAll(".progress").forEach(bar=>{

bar.style.width=bar.dataset.width;

});

});

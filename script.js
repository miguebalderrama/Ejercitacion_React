
const newDog = document.createElement("div");
const image = document.createElement("img");
const title = document.createElement("h2");
const parraf = document.createElement("p");
const btn = document.createElement("button");
const icon = document.createElement("i");
const like = document.createElement("span");
var gustado=0;


image.src="https://picsum.photos/id/237/500/500";
image.alt="Perro bebe";
title.textContent= "Soy un perro bebe, dame likes para ser mas popular!";


newDog.classList.add("dog");
btn.classList.add("moreInfo");
icon.classList.add("far");
icon.classList.add("fa-heart");
like.classList.add("likes");

document.body.appendChild(newDog);
newDog.appendChild(image);
newDog.appendChild(title);
newDog.appendChild(parraf);
newDog.appendChild(like);
like.appendChild(icon);
newDog.appendChild(btn);

const pushlike = ()=>{ 
 gustado=gustado+1;
 console.log(gustado);
}

document.querySelector(".likes").addEventListener("click",pushlike);



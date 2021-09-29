
const newDog = document.createElement("div");
const image = document.createElement("img");
const title = document.createElement("h2");
const parraf = document.createElement("p");
const btn = document.createElement("button");

image.src="https://picsum.photos/id/237/500/500";
image.alt="Perro bebe";
title.textContent= "Lorem lore lrelrlelrlelrlerelrlelr";


newDog.classList.add("dog");
btn.classList.add("moreInfo");
document.body.appendChild(newDog);
newDog.appendChild(image);
newDog.appendChild(title);
newDog.appendChild(parraf);



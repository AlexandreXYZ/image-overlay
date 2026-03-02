const img = document.createElement("img");

img.src = "/a.jpg";
img.style.objectFit = "contain";
img.style.width = "100%";
img.style.height = "100%";
img.style.pointerEvents = "auto";

document.body.style.margin = "0";
document.body.style.overflow = "hidden";
document.body.style.padding = "0";
document.body.style.width = "100vw";
document.body.style.height = "100vh";
(document.body.style as any).webkitAppRegion = "drag";

document.body.appendChild(img);

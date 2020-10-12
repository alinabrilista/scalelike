let qLike = document.getElementById("like");
let qDislike = document.getElementById("dislike");
let scalelike = document.getElementById("scalelike");
let scale = document.getElementById("scale");
let clicks = 0;
let clicks_2 = 0;

qLike.addEventListener("click", function onClick() {
  clicks += 1;
  qLike.innerHTML = `Like ${clicks}`;
  scalelike.style.width = (300 / (clicks + clicks_2)) * clicks + "px";
  scale.style.background = "red";
});

qDislike.addEventListener("click", function onClick_2() {
  clicks_2 += 1;
  qDislike.innerHTML = `Dislike ${clicks_2}`;
  scalelike.style.width = (300 / (clicks + clicks_2)) * clicks + "px";
  scale.style.background = "red";
});

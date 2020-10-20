// built navigation dynamically as an unordered list.
addLists = function() {
  var list = [
    { id: "homeLink", class: "active", href: "#landing", text: "Home" },
    { id: "featuresLink", class: "", href: "#features", text: "Features" },
    { id: "reviewsLink", class: "", href: "#reviews", text: "Reviews" },
    { id: "offerLink", class: "", href: "#specialOffre", text: "Offer" },
  ];
  var nav = document.getElementById("nav");
  var ul = document.createElement("ul");
  ul.setAttribute("id","navigation");
  for (var i = 0; i < list.length; i++) {
    var elm = list[i];
    var a = document.createElement("a");
    a.setAttribute("href",elm.href);
    a.appendChild(document.createTextNode(elm.text));
    var li=document.createElement("li")
    li.setAttribute("id",elm.id);
    li.setAttribute("class",elm.class);
    li.appendChild(a);
    ul.appendChild(li);
  }
  nav.appendChild(ul);
};

addLists();

var id = "homeLink";
// function to hundle scrolling and change active link
handleScroll = function() {
  var newId;
  const tFeatures = document.getElementById("features").offsetTop;
  const tReviews = document.getElementById("reviews").offsetTop;
  const tOffer = document.getElementById("specialOffre").offsetTop;
  if (1.1 * window.pageYOffset >= tOffer) {
    newId = "offerLink";
  } else if (1.1 * window.pageYOffset >= tReviews) {
    newId = "reviewsLink";
  } else if (1.1 * window.pageYOffset >= tFeatures) {
    newId = "featuresLink";
  } else {
    newId = "homeLink";
  }
  if (newId !== id) {
    var old = document.getElementById(id);
    old.classList.remove("active");
    var nw = document.getElementById(newId);
    nw.classList.add("active");
    id = newId;
  }
};
window.addEventListener("scroll", handleScroll);

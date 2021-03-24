var count = 5;
var wrap = document.body.querySelector(".wrap");
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];

for (var i = 0; i < list.length; i++) {
  var ele = document.createElement("div");
  var eleName = document.createElement("h1");
  eleName.textContent = `Name: ${list[i].name}`;
  var eleAge = document.createElement("h2");
  eleAge.textContent = `Age: ${list[i].age}`;
  if (list[i].age >= 25) {
    ele.style.color = "green";
  }
  ele.appendChild(eleName);
  ele.appendChild(eleAge);
  wrap.appendChild(ele);
}
function counts() {
  count += 1;
  document.body.querySelector(".count").innerHTML = count;
}
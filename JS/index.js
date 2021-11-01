// fetching the data
const getData = async () => {
  const response = await fetch("../data/data.json");
  const data = await response.json();
  return data;
};


const mainDiv = document.getElementById("main");


function buildPage(array, element) {
  array.forEach((object) => {
    let listElement = document.createElement("div");
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `id: ${object.id}<br>
    Site Name: ${object.name}<br>
    <a href="${object.url}" target="#">Site URL: ${object.name}</a>`;
    listElement.appendChild(paragraph);
    element.appendChild(listElement);
    if (listElement.parentElement.classList.value == "main") {
      listElement.classList.add("container");
    } else if (listElement.parentElement.classList.value == "container") {
      listElement.classList.add("level-two");
    } else if (listElement.parentElement.classList.value == "level-two") {
      listElement.classList.add("level-three");
    } else if (listElement.parentElement.classList.value == "level-three") {
      listElement.classList.add("level-four");
    }
    if (Object.keys(object).includes("subData")) {
      buildPage(object.subData, listElement);
    }
  });
}

async function mainFunction() {
  const myData = await getData();
  buildPage(myData, mainDiv);
}

mainFunction();

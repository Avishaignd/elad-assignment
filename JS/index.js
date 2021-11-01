// fetching the data
const getData = async () => {
  const response = await fetch("../data/data.json");
  const data = await response.json();
  return data;
};


const mainDiv = document.getElementById("main");

// going over the data array, creating the paragraphs, appending and if a sub data array exists, calling the same function again with the element created last as the parent element. The styling is determined with CSS selectors
function buildPage(array, element) {
  array.forEach((object) => {
    let listElement = document.createElement("div");
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `id: ${object.id}<br>
    Site Name: ${object.name}<br>
    <a href="https://${object.url}" target="#">Site URL: ${object.name}</a>`;
    listElement.appendChild(paragraph);
    element.appendChild(listElement);
    if (Object.keys(object).includes("subData")) {
      buildPage(object.subData, listElement);
    }
  });
}

// eventually calling the get data and build page functions together with the main div as the parent element for the lists
async function mainFunction() {
  const myData = await getData();
  buildPage(myData, mainDiv);
}

mainFunction();
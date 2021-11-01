// fetching the data
const getData = async () => {
  const response = await fetch("../data/data.json");
  const data = await response.json();
  return data;
};

// const listOne = document.getElementById('listOne')
// const listTwo = document.getElementById('listTwo')

// let listArr = [listOne, listTwo]

// const validateSubData = (object) => {
//   if (Object.keys(object).includes("subData")) {
//     console.log("yes");
//   }
// };

// const createList = (object, element) => {
//   let paragraph = document.createElement("p");
//   paragraph.innerHTML = `id: ${object.id}<br>
//     Site Name: ${object.name}<br>
//     <a href="${object.url}" target="#">Site URL: ${object.name}</a>`;
//   element.appendChild(paragraph);
// };

// const buildPage = async () => {
//   const allData = await getData();
//   listOne.classList.add("container");
//   listTwo.classList.add("container");
//   // createList(allData)
//   for (let i = 0; i < allData.length; i++) {
//     createList(allData[i], listArr[i]);
//     //     let paragraph = document.createElement('p')
//     //     paragraph.innerHTML = `id: ${allData[i].id}<br>
//     //     Site Name: ${allData[i].name}<br>
//     //     <a href="${allData[i].url}" target="#">Site URL: ${allData[i].name}</a>`
//     //     if (i == 0) {
//     //         listOne.appendChild(paragraph)
//     //     }
//     //     else {
//     //         listTwo.appendChild(paragraph)
//     //     }
//     if (Object.keys(allData[i]).includes("subData")) {
//       const levelTwoList = document.createElement("div");
//       levelTwoList.classList.add("level-two-list");
//       // console.log(allData[i].subData);
//       const subData = allData[i].subData;
//       for (let i = 0; i < subData.length; i++) {
//         // let paragraph = document.createElement('p')
//         // paragraph.innerHTML = `id: ${subData[i].id}<br>
//         // Site Name: ${subData[i].name}<br>
//         // <a href="${subData[i].url}" target="#">Site URL: ${subData[i].name}</a>`
//         // levelTwoList.appendChild(paragraph)
//         // listTwo.appendChild(levelTwoList)
//         // console.log(subData[i]);
//         createList(subData[i], listArr[0]);
//       }
//     }
//   }
// };
// buildPage();

// const secondary = (array, element) => {
//   array.forEach((object) => {
//     let listElement = document.createElement("div");
//     listElement.classList.add("level-two-list");
//     let paragraph = document.createElement("p");
//     paragraph.innerHTML = `id: ${object.id}<br>
//         Site Name: ${object.name}<br>
//         <a href="${object.url}" target="#">Site URL: ${object.name}</a>`;
//     listElement.appendChild(paragraph);
//     element.appendChild(listElement);
//   });
// };

// const testing = (array, div) => {
//   let listCount = 0;
//   for (let i = 0; i < array.length; i++) {
//     let listElement = document.createElement("div");
//     listElement.classList.add(classArray[listCount]);
//     let paragraph = document.createElement("p");
//     paragraph.innerHTML = `id: ${array[i].id}<br>
//     Site Name: ${array[i].name}<br>
//     <a href="${array[i].url}" target="#">Site URL: ${array[i].name}</a>`;
//     listElement.appendChild(paragraph);
//     // mainDiv.appendChild(listElement);
//     div.appendChild(listElement)
//     if (Object.keys(array[i]).includes("subData")){
//         listCount++
//         testing(array[i].subData, listElement)
//     }
// }
// listCount = 0
// };
const classArray = ["container", "level-two", "level-three", "level-four"];

const mainDiv = document.getElementById("main");


function basic(array, element) {
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
      basic(object.subData, listElement);
    }
  });
}

async function build() {
  const myData = await getData();
  basic(myData, mainDiv);
}

build();

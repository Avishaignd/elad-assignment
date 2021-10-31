// fetching the data
const getData = async () => {
    const response = await fetch('../data/data.json')
    const data = await response.json()
    return data
}

const listOne = document.getElementById('listOne')
const listTwo = document.getElementById('listTwo')

const validateSubData = (object) => {
    if (Object.keys(object).includes('subData')) {
        console.log('yes');
    }
}

const createList = (array) => {

}

const buildPage = async () => {
    const allData = await getData()
    listOne.classList.add('container')
    listTwo.classList.add('container')
    // createList(allData)
    for (let i = 0; i < allData.length; i++) {
        let paragraph = document.createElement('p')
        paragraph.innerHTML = `id: ${allData[i].id}<br>
        Site Name: ${allData[i].name}<br>
        <a href="${allData[i].url}" target="#">Site URL: ${allData[i].name}</a>`
        if (i == 0) {
            listOne.appendChild(paragraph)
        }
        else {
            listTwo.appendChild(paragraph)
        }
        if (Object.keys(allData[i]).includes('subData')) {
            const levelTwoList = document.createElement('div')
            levelTwoList.classList.add('level-two-list')
            console.log(allData[i].subData);
        }
    }
}
buildPage()
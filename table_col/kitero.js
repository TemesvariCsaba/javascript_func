/**
 * @type {{name: string, time: string, love1: string, love2: string}[]}
 */
const arra = [
    {
        name: 'Balassi Bálint',
        time: 'reformáció',
        love1: 'Losonczy Anna',
        love2: 'Dobó Krisztina'
    },
    {
        name: 'Csokonai Vitéz Mihály',
        time: 'felvilágosodás',
        love1: 'Vajda Juliána'
         
    },
    {
        name: 'Petőfi Sándor',
        time: 'magyar romantika',
        love1: 'Mednyánszky Berta',
        love2: 'Szendrey Júlia'
    },
    {
        name: 'Ady Endre',
        time: '20. század',
        love1: 'Léda',
        love2: 'Csinszka'
    }
]

const table = document.createElement('table')
document.body.appendChild(table)

const thead = document.createElement('thead') 
table.appendChild(thead) 

const tr = document.createElement('tr') 
thead.appendChild(tr)


createCell('th',"Szerző neve", tr)

createCell('th',"Korszak", tr)

const fejlec3 = createCell('th',"Szerelmek", tr) 
fejlec3.colSpan = 2

const tbody = document.createElement('tbody')
table.appendChild(tbody)


for (const i of arra) {
    const tr = document.createElement('tr')
    tbody.appendChild(tr)

    createCell('td',i.name, tr)

    createCell('td',i.time, tr)

    const td3 = createCell('td',i.love1, tr)
    
    
    if (i.love2 === undefined){
         td3.colSpan = 2

    }
    else{
    createCell('td', i.love2, tr)
    }
}
/**
 * letrehozzuk a celltype alapjan th vagy td -t,  megadjuk a cellContent segitsegevel a tartalmat majd hozzafuzzuk a trhez
 * 
 * @param {string} cellType -cella típusa (th, td)
 * @param {string} cellContent -cella tartalma 
 * @param {HTMLTableRowElement} parentRow - appendeljuk a "szulohoz"
 * @returns {HTMLTableCellElement} - visszatérunk a letrehozott cella elementel
 */


function createCell(cellType, cellContent, parentRow){
    const cell = document.createElement(cellType)
    parentRow.appendChild(cell)
    cell.innerText = cellContent
    return cell
}

const inputArray = [
    {
        inputtype: "text",
        inputid: "kolto_nev",
        inputame: "kolto_nev"
    },
    {
        inputtype: "text",
        inputid: "korszak",
        inputame: "korszak"   
    },
    {
        inputtype: "text",
        inputid: "szerelem1",
        inputame: "szerelem1",
    },
    {
        inputtype: "text",
        inputid: "szerelem2",
        inputame: "szerelem2",
    },
]


const form = document.createElement("form")
form.id = "form_js"
document.body.appendChild(form)
const h2 = document.createElement("h2")
h2.innerText = "JavaScript form"

const labelNev = document.createElement("label")
form.appendChild(labelNev)
labelNev.innerText = "Költő Neve: "
labelNev.htmlFor = "kolto_nev"

const br = document.createElement("br")
form.appendChild(br)

const inputName = document.createElement("input")
inputName.type = "text"
inputName.id = "kolto_nev"
inputName.name = "kolto_nev"
form.appendChild(inputName)

const br2 = document.createElement("br")
form.appendChild(br2)
const br3 = document.createElement("br")
form.appendChild(br3)

for(i of inputArray)
{
    
    createForm ("input", i.inputtype, form)
}

/**
 * 
 * @param {string} inputType 
 * @param {string} inputContent 
 * @param {HtmlFormElement} parent 
 * @returns {HtmlElement}
 */

function createInput(inputType, inputContent, parent){
    const br = document.createElement("br")
    form.appendChild(br)

    const formRow = document.createElement(inputType)
    parent.appendChild(formRow)
    formRow.innerText = inputContent

    const br2 = document.createElement("br")
    form.appendChild(br2)
    const br3 = document.createElement("br")
    form.appendChild(br3)
    return formRow

}
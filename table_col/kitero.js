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


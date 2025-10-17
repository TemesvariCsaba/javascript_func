console.log("bomba")
/**
 * @type {string}
 */
const k = "T1000-es model"
console.log(k)

const l = ["a", "b"]
console.log(l[1])

for(let i=0; i<l.length; i++){
console.log(l[i])
}

for(const a of l){
    console.log(a)
}

for(const key in l){
    console.log(`${key} : ${l[key]}`) //key+ ":" l[key]
}
/**
 * @type {{name: string, age: number}}
 */
const o = {
    name: 'csaba',
    age: '18',
}

for(const key in o){
    console.log(`${key} : ${o[key]}`)
}

/**
 * @type {{name: string, time: string, love1: string, love2: string}[]}
 */
const arr = [
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

const th = document.createElement('th')
th.innerText = 'Szerző neve'
tr.appendChild(th)

const th2 = document.createElement('th') 
th2.innerText = 'Korszak'
tr.appendChild(th2)

const th3 = document.createElement('th')
th3.innerText = 'Szerelmek'
tr.appendChild(th3)
th3.colSpan = 2

const tbody = document.createElement('tbody')
table.appendChild(tbody)


for (const i of arr) {
    const tr = document.createElement('tr')
    tbody.appendChild(tr)
    const td = document.createElement('td')
    td.innerText = i.name
    tr.appendChild(td)
    const td2 = document.createElement('td')
    td2.innerText = i.time
    tr.appendChild(td2)
    const td3= document.createElement('td')
    td3.innerText = i.love1
    tr.appendChild(td3)
    
    if (i.love2 === undefined){
         td3.colSpan = 2
    }
    else{
    const td4 = document.createElement('td')
    td4.innerText = i.love2
    tr.appendChild(td4)
    }
}
/**
 * letrehozzuk a celltype alapjan th vagy td -t,  megadjuk a cellContent segitsegevel a tartalmat majd hozzafuzzuk a trhez
 * 
 * @param {string} cellType -cella típusa (th, td)
 * @param {string} cellContent -cella tartalma 
 * @param {HTMLTableRowElement} parentRow - appendeljuk a "szulohoz"
 * @returns {HTMLTableCellElement}
 */


function createCell(cellType, cellContent, parentRow){
    const cell = document.createElement(cellType)
    parentRow.appendChild(cell)
    cell.innerText = cellContent
    return cell
}


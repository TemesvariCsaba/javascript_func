/**
 * @type {{theme: string, time: string, scientist1: string, scientist2: string}[]}
 */
const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]
const table = document.createElement('table')
document.body.appendChild(table)
const thead = document.createElement('thead') //létrehozzuk a memóriába a thead html elementet
table.appendChild(thead) //hozzafuzzuk apukahoz a gyereket
const tr = document.createElement('tr') 
table.appendChild(tr)
const th = document.createElement('th')
th.innerText = 'Fizka területe'
tr.appendChild(th)
const th2 = document.createElement('th') 
th2.innerText = 'Időszak'
tr.appendChild(th2)
const th3 = document.createElement('th')
th3.innerText = 'Képviselők'
tr.appendChild(th3)
th3.colSpan = 2

document.tbody.appendChild(table)
table.appendChild(tbody)
for(let i)

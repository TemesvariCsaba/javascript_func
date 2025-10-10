/**
 * @type {{war: string, team1: string, team1Size:string, team2:string, team2Size:string}}
 */
const arr = [
    {
        war: 'Rákóczi szabadságharc',
        team1: 'Kuruc',
        team1Size: '70.000',
        team2: 'Labanc',
        team2Size: '60.000',
    },
    {
        war: '48-as szabadságharc',
        team1: 'Osztrák császárság (+ Orosz birodalom)',
        team1Size: '170.000 (+ 200.000)',
        team2: 'Magyar királyság',
        team2Size: '170.000',
    },
    {
        war: 'I. világháború',
        team1: 'Antant',
        team1Size: '43 millió',
        team2: 'Központi hatalmak',
        team2Size: '25 millió',
    },
    {
        war: 'Bosworthi csata',
        team1: 'Angolok (York + Lancester)',
        team1Size: '15.000',
    }
]
const body = document.createElement("body")
const table = document.createElement("table")
const thead = document.createElement("thead")
const tr = document.createElement("tr")
const tbody = document.createElement("tbody")

document.body.appendChild(table)
table.appendChild(thead)
thead.appendChild(tr)
table.appendChild(tbody)

const i = ["Harc megnevezése" , "Szembenálló felek", "Haderő"]
for(const y of i){
    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = y
}

for(const y of arr){
    const tr = document.createElement("tr")
    tbody.appendChild(tr)
    const td1 = document.createElement("td")
    tr.appendChild(td1)
    td1.rowSpan = "2"
    const td2 = document.createElement("td")
    tr.appendChild(td2)
    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td1.innerText = y.war
    td2.innerText = y.team1
    td3.innerText = y.team1Size

    if(y.team2 && y.team2Size){
        const tr = document.createElement('tr')
        tbody.appendChild(tr)
        const td1 = document.createElement("td")
        tr.appendChild(td1)
        const td2 = document.createElement("td")
        tr.appendChild(td2)
        td1.innerText = y.team2
        td2.innerText = y.team2Size
    }
}


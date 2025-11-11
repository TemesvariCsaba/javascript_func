
const i = {}
const szam = 2
if(szam >5 ){
    i.name = 'szám'
}else{
    i["name"] = "nev"
}
console.log(i)
console.log(i["name"])
console.log(i.age)

/**
 *  @type {{nationality: string, name: string:, title:string, name2.string, title2:string}[]}
 */

const arr = [
    {
        nationality: "Orosz",
        name: "Gogol",
        title: "A köpönyeg",
        name2: "Csehov",
        title2: "A csinovnyik halála",
    },
    {
        nationality: "Cseh",
        name: "Franz Kafka",
        title: "Az átváltozás",
    },
    {
        nationality: "Magyar",
        name: "Örkény István",
        title: "Egyperces Novellák",  
        name2: "József Attila",
        title2: "Klárisok",
    },
    {
        nationality: "Svájc",
        name: "Friedrich Dürrenmatt",
        title: "A fizikusok",
    },
]
const table = document.createElement("table")
const thead = document.createElement("thead")
const tr = document.createElement("tr")
const tbody = document.createElement("tbody")
tbody.id = "jstbody"

document.body.appendChild(table)
table.appendChild(thead)
thead.appendChild(tr)
table.appendChild(tbody)

/**
 * @type {{fejlec:string}[]}
 */
const fejlec = ["Nemzetiseg", "Szerző", "Mű"]

for(const i of fejlec){
    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = i
}
/** //for ciklus függvénybe szervezése
 * @type {{nationality: string, name: string:, title:string, name2.string, title2:string}[]} //megegyezik a kiindulási tömbével
 * @param {Array} tableArr // tömb paraméter
 * 
 */
function renderTableBody(tableArr)
{
    const tbodyJs = document.getElementById("jstbody")
    tbodyJs.innerHTML = "";
    for(const i of tableArr){
    const tr = document.createElement("tr")
    tbodyJs.appendChild(tr)
    const td1 = document.createElement("td")
    tr.appendChild(td1)
    const td2 = document.createElement("td")
    tr.appendChild(td2)
    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td1.innerText = i.nationality
    td1.addEventListener("click", function(e) 
    {
        /**
         * @type {HTMLTableCellElement} // target 
         */
<<<<<<< HEAD
        const target = e.target 
        const tr = target.parentElement
        const tbody = tr.parentElement
        const tbodyRes = tbody.querySelector('.marked')
                
        if (tbodyRes) 
        {
            tbodyRes.classList.remove(marked)
        }
        target.classList.add(marked)
=======
        const target = e.target
        target.classList.add("marked")
>>>>>>> f7571faa2c83a3546c04d54070b49b58ea35f40c
    })
    
    td2.innerText = i.name
    td3.innerText = i.title

    if(i.name2 && i.title2){
        td1.rowSpan = "2"
        const tr = document.createElement('tr')
        tbodyJs.appendChild(tr)
        const td4 = document.createElement("td")
        tr.appendChild(td4)
        
        const td5 = document.createElement("td")
        tr.appendChild(td5)
        td4.innerText = i.name2
        td5.innerText = i.title2

        }
    }
}
<<<<<<< HEAD
renderTableBody(arr)

=======
>>>>>>> f7571faa2c83a3546c04d54070b49b58ea35f40c
/**
 *  @type {HTMLElement} //form
 */
const htmlForm = document.getElementById("htmlform")
htmlForm.addEventListener("submit", function(e)
    {
        e.preventDefault()
        /**
         *  @type {HTMLFormElement}
         */
        const target = e.target

        /**
        * @type {HTMLInputElement}
        */
        const query = target.querySelector("#nemzetiseg")
<<<<<<< HEAD
         /**
        * @type {HTMLInputElement}
        */
        const query2 = target.querySelector("#szerzo1")
         /**
        * @type {HTMLInputElement}
        */
        const query3 = target.querySelector("#mu1")
         /**
        * @type {HTMLInputElement}
        */
        const query4 = target.querySelector("#szerzo2")
         /**
        * @type {HTMLInputElement}
        */
=======
        const query2 = target.querySelector("#szerzo1")
        const query3 = target.querySelector("#mu1")
        const query4 = target.querySelector("#szerzo2")
>>>>>>> f7571faa2c83a3546c04d54070b49b58ea35f40c
        const query5 = target.querySelector("#mu2")
            
        /**
         * @type {string}
         */
        const value = query.value
<<<<<<< HEAD
        /**
         * @type {string}
         */
        const value2 = query2.value
        /**
         * @type {string}
         */
        const value3 = query3.value
        /**
         * @type {string}
         */
        const value4 = query4.value
        /**
         * @type {string}
         */
=======
        const value2 = query2.value
        const value3 = query3.value
        const value4 = query4.value
>>>>>>> f7571faa2c83a3546c04d54070b49b58ea35f40c
        const value5 = query5.value

        /**
         * @type {{nationality: string, name: string, title:string, name2:string, title2:string}}
         */
        const obj = {}
        obj.nationality = value
        obj.name = value2
        obj.title = value3
        obj.name2 = value4
        obj.title2 = value5

<<<<<<< HEAD
        arr.push(obj)
        renderTableBody(arr)
        
=======
        const tbodyForm = document.getElementById("tbody")
        const tr = document.createElement("tr")
        tbodyForm.appendChild(tr)
        const td1 = document.createElement("td")
        tr.appendChild(td1)
        const td2 = document.createElement("td")
        tr.appendChild(td2)
        const td3 = document.createElement("td")
        tr.appendChild(td3)
        td1.innerText = obj.nationality
        
        td1.addEventListener("click", function(e) 
        {
            /**
            * @type {HTMLTableCellElement} // target 
            */
            const target = e.target
            target.classList.add("marked")
        })
    
        td2.innerText = obj.name
        td3.innerText = obj.title

        if(obj.name2 && obj.title2){
            td1.rowSpan = "2"
            const tr = document.createElement('tr')
            tbodyForm.appendChild(tr)
            const td4 = document.createElement("td")
            tr.appendChild(td4)
        
            const td5 = document.createElement("td")
            tr.appendChild(td5)
            td4.innerText = obj.name2
            td5.innerText = obj.title2
        }    
>>>>>>> f7571faa2c83a3546c04d54070b49b58ea35f40c
    }
)

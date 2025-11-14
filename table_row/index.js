
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
 *  @type {CountryWriters[]}
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


/**
 * @type {{fejlec:string}[]}
 */
const fejlec = ["Nemzetiseg", "Szerző", "Mű"]

const table = document.createElement("table")
const tbody = document.createElement("tbody")
tbody.id = "jstbody"

document.body.appendChild(table)

table.appendChild(tbody)

generateHeader(table, fejlec)


renderTableBody(arr)

/**
 *  @type {HTMLElement} //form
 */
const htmlForm = document.getElementById("htmlform")
htmlForm.addEventListener("submit", htmlEventListener)
    {
    }


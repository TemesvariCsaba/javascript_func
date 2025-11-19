
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
 * @type {{label: string, id:string}[]}
 */
const formArr = [
    {
        label: "Nemzetiseg",
        id: "nemzetiseg",
    },
    {
        label: "Szerző",
        id: "szerzo1",
    },
    {
        label: "Mű",
        id: "mu1",
    },
    {
        label: "Másik szerző",
        id: "szerzo2",    
    },
     {
        label: "Mű",
        id: "mu2",
    }
]

/**
 * @type {HTMLFormElement}
 * 
 */
const formJs = createForm("jsform", formArr)

formJs.addEventListener("submit", function(e){
     e.preventDefault()
        /**
         *  @type {HTMLFormElement}
         */
        const target = e.target
        /**
        * @type {HTMLInputElement}
        */
        const query = target.querySelector("#nemzetiseg")
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
        const query5 = target.querySelector("#mu2")      
       
        
        
        const obj = {}
        
        
       
        
        if (validateFields(query, query2, query3)){
        /**
         * @type {string}
         */
        const value = query.value
        obj.nationality = value
         /**
         * @type {string}
         */
        const value2 = query2.value
        obj.name = value2
        /**
         * @type {string}
         */
        const value3 = query3.value
        obj.title = value3
        /**
         * @type {string}
         */
        const value4 = query4.value
        /**
         * @type {string}
         */
        const value5 = query5.value
        
        value4 == "" ? obj.query4=undefined : obj.query4=value4
        value5 == "" ? obj.query5=undefined : obj.query5=value5

        arr.push(obj)
        console.log(arr)
        renderTableBody( arr)
        }
})
     

/**
 *  @type {HTMLElement} //form
 */
const htmlForm = document.getElementById("htmlform")
htmlForm.addEventListener("submit", htmlEventListener)


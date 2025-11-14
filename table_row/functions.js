/**
 * @typedef {{nationality: string, name: string:, title:string, name2.string, title2:string}} CountryWriters 
 */

/** //for ciklus függvénybe szervezése
 * @type {CountryWriters} megegyezik a kiindulási tömbével
 * @param {CountryWriters[]} tableArr  tömb paraméter
 * 
 */
function renderTableBody(tableArr)
{
    const tbodyJs = document.getElementById("jstbody")
    tbodyJs.innerHTML = "";
    for(const i of tableArr){
        renderTableRow(tbodyJs, i)
    }
}

function renderTableRow(tablebody, writerrow){

    const tr = document.createElement("tr")
    tablebody.appendChild(tr)
    const td1 = createCell("td", writerrow.nationality, tr)
    const td2 = createCell("td", writerrow.name, tr)
    const td3 = createCell("td", writerrow.title, tr)
    
    td1.addEventListener("click", function(e) 
    {
        /**
         * @type {HTMLTableCellElement} // target 
         */

        const target = e.target
        const tr = target.parentElement
        const tbody = tr.parentElement
        const tbodyRes = tbody.querySelector('.marked')
                
        if (tbodyRes) 
        {
            tbodyRes.classList.remove(marked)
        }
        target.classList.add(marked)
        

    })

/**
 * 
 * @param {HTMLTableSectionElement} tablebody 
 * @param {CountryWriters} writerrow
 */    
    if(writerrow.name2 && writerrow.title2){
        td1.rowSpan = "2"
        const tr = document.createElement('tr')
        tablebody.appendChild(tr)
        const td4 = createCell("td", writerrow.name2, tr)
        const td5 = createCell("td", writerrow.title2, tr)
          
    }
}



/**
 * @param {"th" | "td"} cellType
 * @param {string} cellContent
 * @param {HTMLTableElement} parent
 */

function createCell(cellType, cellContent, parent){
    const cell = document.createElement(cellType)
    cell.innerText = cellContent
    parent.appendChild(cell)  
    return cell  
}
/**
 * @param {HTMLTableElement} table
 * @param {string[]} headerList
 */
function generateHeader(table, headerList){
    const thead = document.createElement("thead")
    table.appendChild(thead)
    const tr = document.createElement("tr")
    thead.appendChild(tr)
    for (const t of headerList){
       const th = createCell("th", t, tr)
    }

}
function htmlEventListener(e){
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
       
        /**
         * @type {string}
         */
        const value = query.value
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
        const value5 = query5.value
        /**
         * @type {{CountryWriters}}
         */
        const obj = {}
        obj.nationality = value
        obj.name = value2
        obj.title = value3
        obj.name2 = value4
        obj.title2 = value5

        arr.push(obj)
        renderTableBody(arr)

}
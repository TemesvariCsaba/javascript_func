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
    for(const x of tableArr){
        renderTableRow(tbodyJs, x)
    }
}
/**
 * 
 * @param {HTMLTableSectionElement} tablebody 
 * @param {CountryWriters} writerrow
 */   
function renderTableRow(tablebody, writerrow){

    const tr = document.createElement("tr")
    tablebody.appendChild(tr)
    const td1 = createCell("td", writerrow.nationality, tr)
    createCell("td", writerrow.name, tr)
    createCell("td", writerrow.title, tr)
    
    td1.addEventListener("click", function(e) 
    {
        /**
         * @type {HTMLTableCellElement} // target 
         */

        const target = e.target
        const tr2 = target.parentElement.parentElement
        const tbodyRes = tr2.querySelector('.marked')    
        if (tbodyRes != null) 
        {
            tbodyRes.classList.remove("marked")
        }
        tbodyRes.classList.add("marked")
        

    })

 
    if(writerrow.name2 && writerrow.title2){
        td1.rowSpan = "2"
        const tr1 = document.createElement('tr')
        tablebody.appendChild(tr1)
        createCell("td", writerrow.name2, tr1)
        createCell("td", writerrow.title2, tr1)
          
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
/**
 * 
 * @param {HTMLElement} parentBr 
 */
function generateBr(parentBr){
    const br = document.createElement("br")
    parentBr.appendChild(br)
}

/**
 * 
 * @param {HTMLFormElement} parentForm form amihez hozzaadom
 * @param {string} formContent tartalom(szoveg)
 * @param {string} formId id
 * 
 * letrehoz egy formot
 */

function createFormElement(parentForm, formContent, formId){
    const label = document.createElement("label")
    label.innerText = formContent
    label.htmlFor = formId
    parentForm.appendChild(label)
    generateBr(parentForm)
    const input = document.createElement("input")
    input.type = "text"
    input.id = formId
    input.name = formId
    parentForm.appendChild(input)
    generateBr(parentForm)
    generateBr(parentForm)
    
    
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

        const htmlTable = document.getElementById("tbody")

        renderTableRow( htmlTable , obj)

}
/**
 * 
 * @param {string} stringId 
 * @param {{label: string, id:string}[]} stringArr 
 */
function createForm (stringId, stringArr){
    const formJava = document.createElement("form")
    formJava.id = stringId
    document.body.appendChild (formJava)
    for (const x of stringArr){
    createFormElement( formJava, x.label, x.id )
    }

    const gombSzab = document.createElement("button")
    gombSzab.innerText = "Hozzáadás"
    formJava.appendChild(gombSzab)
    return formJava
}
/**
 * 
 * @param {htmlInputField} inputContent 
 * @param {string} errorMessage
 * @returns {boolean}

 */
function validateField(inputContent, errorMessage){
    let inspect = true
    if ( inputContent.value == ""){
        const parent = inputContent.parentElement
        const result = parent.querySelector(".error")
        result.innerText = errorMessage
        inspect = false
        
    }else{
        const parent = inputContent.parentElement
        const result = parent.querySelector(".error")
        result.innerText = ''
    }
    return inspect
}
/**
 * 
 * @param {htmlInputField} inputContent1 
 * @param {htmlInputField} inputContent2 
 * @param {htmlInputField} inputContent3 
 * @returns  {boolean}
 */
function validateFields(inputContent1, inputContent2, inputContent3){
    let inspect = true
    if(validateField(inputContent1,"kötelező") == false){inspect=false}
    if(validateField(inputContent2,"kötelező") == false){inspect =false}
    if(validateField(inputContent3,"kötelező") == false){inspect =false}
    return inspect
}
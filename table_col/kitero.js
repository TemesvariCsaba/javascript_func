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


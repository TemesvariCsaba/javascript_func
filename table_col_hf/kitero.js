const szam = 6; /*globális változó*/
valami1(); /*hoisting*/
valami2();
valami3();
const a = valami4(2);
console.log(a)
/**
 * Ez a függvény kiírja h péntek
 * 
 * @returns {void}
 */
function valami1(){
    console.log("pentek")
}
/**
 * kiírja a szam valtozot
 * 
 * @returns {void}
 */
function valami2(){
    console.log(szam)
}
function valami3(){
    const szam1 = 7;
    console.log(szam1)
}
/**
 * 
 * @param {number} param ez a bemeneti parameter amihez egy masik parametert adunk hozzá
 * @returns {number}
 */
function valami4(param){
    const szam2 = 3
    const osszeg = param+szam2
    return osszeg;   
}


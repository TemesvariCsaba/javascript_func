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

<form id="form">
    <label for="kolto_nev">Költő neve:</label><br>
    <input type="text" id="kolto_nev" name="kolto_nev"><br><br>

    <label for="korszak">Korszak:</label><br>
    <input type="text" id="korszak" name="korszak"><br><br>

    <label for="szerelem1">Szerelme:</label><br>
    <input type="text" id="szerelem1" name="szerelem1"><br><br>

    <label for="szerelem2">Szerelme:</label><br>
    <input type="text" id="szerelem2" name="szerelem2"><br><br>

    <button>Hozzáadás</button>
</form>
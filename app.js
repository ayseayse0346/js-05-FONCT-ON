/*---------FONKSİYONLAR----------- */
/*
 3 FARKLI SYNTAX VAR:

 1-function dec.
 2-func expression
 3-arrow function
 (son ikisi modern js de yani biz.)
*/

// ?ÖRNEK: 1-function decleration(ister altta ister üztte yeni hem altta hem üstte yazabiliriz.selamlamayı çağrmayı) -->>hoisted
// parametresiz fonksiyon şuan ki hali yani dışardan değer almıyor

function selamla (){
    console.log("selam chort16");
}
selamla ()  //? ınvoke (call)
selamla()


// ?ÖRNEK2:
// parametreli fonksiyon örneği

// function selamVer(mesaj){
//     console.log(`merhaba ${mesaj}`);
// }
// selamVer("chort16")
// selamVer("chort15")
// selamVer("javascript")

function selamVer(chort,ders){
    console.log(`merhaba ${chort}-${ders}`);
}
selamVer("chort16","javascript")
selamVer("chort15","css")


// ? ÖRNEK3:

function topla(say1,say2){
console.log("toplam:",say1+say2);
}
const say1 = +prompt("sayı1:")
const say2 = +prompt("sayı2:")
topla(say1,say2)

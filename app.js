/*---------FONKSİYONLAR----------- */
/*
 3 FARKLI SYNTAX VAR:

 1-function dec.
 2-func expression
 3-arrow function
 (son ikisi modern js de yani biz.üç yöntem de piyasa da kullanlıyor. üçünü de öğreenmekte fayda var.)
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

// ?örnek2

function carp(num1,num2){
    console.log(num1*num2);
}
const sonuç = carp(3,5)
console.log(sonuç);  //undifeined geldi.burdaki fonksiyon döndürüyo ama değer vermiyo o yüzden sonuç yani değer undefined olur .bunu şöyle yaparız return ile.-->>
function carp(nu1,nu2){
    return nu1*nu2
}
const sonuc = carp(3,5)
console.log(sonuc); //bu sefer sonuç 15 verdi değer atadı return ile.
// ?örnek 3
function hesapla (s1,s2,işlem){
    if(işlem==="+"){
        return s1+s2
    }
    else if(işlem==="-"){
return s1-s2
    }
    else{
        return 0
    }
}
console.log(hesapla(3,5,"+"));
console.log(hesapla(4,2,"-"));
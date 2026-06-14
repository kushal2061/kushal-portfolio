
function getPassword(){

let length=parseInt(document.getElementById("length").value);
let includeUpperCase=document.getElementById("upper").checked;
let includeLowerCase=document.getElementById("lower").checked;
let includeNumber=document.getElementById("number").checked;
let includeSymbol=document.getElementById("symbol").checked;

function generatePassword(length,includeUpperCase,includeLowerCase,includeNumber,includeSymbol){
    
    let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase="abcdefghijklmnopqrstuvwxyz";
    let number="0123456789";
    let symbol="!@#$%^&*()_+-=[]{}|:";
    let combined="";
    combined =combined + (includeUpperCase ? upperCase : "");
    combined=combined + (includeLowerCase ? lowerCase:"");
    combined=combined + (includeNumber ? number:"");
    combined=combined + (includeSymbol ? symbol:"");
    
    let password="";
    if(length<=0){
        return "enter proper number";
    }
    if(includeUpperCase || includeLowerCase || includeNumber || includeSymbol){
    for(let i=0;i<length;i++){

        let a=Math.floor(Math.random()*combined.length);
        password=password+combined[a];
    }}
    else{
        password="Select at least one option";
    }
    return password;
}
let word=generatePassword(length,includeUpperCase,includeLowerCase,includeNumber,includeSymbol);
console.log(word);
document.getElementById("result").textContent=word;
}

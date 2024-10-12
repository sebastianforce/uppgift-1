function divide() {
    console.log("divide")
    let foo=document.getElementById("field1").value
    let bar=document.getElementById("field2").value
if(bar>0){
    let result=foo/bar
    console.log(result)
    document.getElementById("field3").textContent=result
}
else{
    alert("You can't divide us!")
}
}
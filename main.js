let arr = []
function addBtn(){
    let input = document.getElementById("input").value
    arr.push(input)
    display()
    document.getElementById("input").value = ""
}
function display(){
    // let input = document.getElementById("input").value
    for (let i = 0 ; i < arr.length ; i ++){
        console.log(arr[i])
        document.getElementById("product").innerHTML =
            "<span id='inputspan'></span>\n" +
            "        <input type=\"button\" value=\"Edit\" class=\"Btnadd\">\n" +
            "        <input type=\"button\" value=\"Delete\" class=\"Btnadd\">"

    }
    document.getElementById("inputspan").innerHTML= arr

}

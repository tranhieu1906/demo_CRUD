let arr = []
// function addBtn(){
//     let input = document.getElementById("input").value
//     arr.push(input)
//     display()
//     document.getElementById("input").value = ""
// }
// function display(){
//     // let input = document.getElementById("input").value
//     // for (let i = 0 ; i < arr.length ; i++){
//     //     document.getElementById("product").innerHTML =
//     //         "<span id='inputspan' ></span>\n" +
//     //         "        <input type=\"button\" value=\"Edit\" class=\"Btnadd\">\n" +
//     //         "        <input type=\"button\" value=\"Delete\" class=\"Btnadd\">"
//     //     document.getElementById("inputspan").innerHTML= arr[i]
//     // }
//
//     let str = '<table><th>Product Name</th> <th> </th><th></th><th style="color: #a83231">' + addBtn.length + ' Product</th>';
//     for (let i = 0; i < addBtn.length; i++) {
//         str += '<tr><td>' + addBtn[i] + '</td><td><button onclick="editProduct('+i+')">Edit</button></td><td><button onclick="deleteProduct('+i+')">Delete</button></td><td></td>'
//     }
//     document.getElementById('displayProduct').innerHTML = str;
//
// }
let arrProduct = ['Sony Xperia', 'Samsung Galaxy', 'Nokia 6', 'Xiaomi Redmi Note 4', 'Apple iphone 6S']

function disPlayProduct() {
    let str = '<table border="1"><th>Product Name</th> <th> </th><th></th><th style="color: red">' + arrProduct.length + ' Product</th>';
    for (let i = 0; i < arrProduct.length; i++) {
        str += '<tr><td>' + arrProduct[i] + '</td><td><button onclick="editProduct('+i+')">Edit</button></td><td><button onclick="deleteProduct('+i+')">Delete</button></td><td></td>'
    }
    document.getElementById('displayProduct').innerHTML = str;
}

disPlayProduct();

function addProduct() {
    let inputProduct = document.getElementById('inputProduct').value;
    arrProduct.push(inputProduct);
    disPlayProduct();
    document.getElementById('inputProduct').value ='';
}
function deleteProduct(index) {
    arrProduct.splice(index,1)
    disPlayProduct();
}

function editProduct(index) {
    let str = prompt("Nhap ten moi",arrProduct[index]);
    arrProduct[index]=str;
    disPlayProduct();
}
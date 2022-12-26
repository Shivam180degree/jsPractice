var products = [
    { name: "Micromax", price: 100 },
    { name: "Iphone", price: 800 },
    { name: "Samsung", price: 400 }
]

//insert all products on screen inside productsData div
const data = products.map((data) => {
    var link1 = document.createElement('p');
    var link2 = document.createElement('p');
    var link3 = document.createElement('button');
    link3.setAttribute("class","buttonCart");
    var item = document.createElement('li');
 
    link1.textContent = data.name;
    link2.textContent = data.price;
    link3.textContent = "Add To Cart"
    item.appendChild(link1);
    item.appendChild(link2);
    item.appendChild(link3);
    //console.log("data.name", data.name);
    document.getElementById('list').appendChild(item);
});

 //create cart dropdown

function ToggleCart() {
    var styleType = document.getElementById('dropdown').style.display
    if(styleType == "block"){
        document.getElementById('dropdown').style.display = "none"
    } else {
        document.getElementById('dropdown').style.display = "block"
    }
}
var btn = document.getElementsByClassName("buttonCart");
btn.addEventListener('click', function(){
    // var cartItems = [];
    console.log("Button Clicked");
})
//add and remove products in cart and from productsData div
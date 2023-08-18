let cart =[];

function AddItems(_product, _price){
    let itemPurchased = {
        Product: _product,
        Price: _price
    };

    let totalPrice = 0;
    cart.push(itemPurchased);

    cart.forEach((c) => {
        console.log(c);
        totalPrice += c.Price;
    });
    

    console.log(cart);
    console.log("Total:" + totalPrice);

    let list = document.getElementById("cart");

cart.forEach((_product) => {
    let li =
        document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
});
}


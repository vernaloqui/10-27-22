let items = {
    cart: []
};



function addToCart(){
    let InputItem = document.getElementById("addItem").value;
    let InputPrice = Number(document.getElementById("addPrice").value);
    // alert(InputItem + InputPrice);
    items.cart.push({item: InputItem, price: InputPrice});
    ShowCart();
    localStorage.setItem("items", JSON.stringify(items));

    document.getElementById("addItem").value = " ";
    document.getElementById("addPrice").value = " ";
}

function ShowCart(){
    let list = document.getElementById("ItemsList");
    let current = "";
    if (items.cart == "") {
        list.innerHTML = "<b>Your shopping cart is empty.</b>";
    }
    else {
        items.cart.forEach(function(showItem){
            current += "<b>Item: </b>" + showItem.item + "&nbsp;" + "<b>Price: </b>" + showItem.price + "<hr>";
        });
        list.innerHTML = current;
    }
}

ShowCart();
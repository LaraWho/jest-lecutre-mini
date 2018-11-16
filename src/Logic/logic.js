const axios = require('axios');

  export function toggle(value) { 
    return !value;
  }
  export function addToCart(cart, product) {
    var newCart = [...cart];
    let newProduct = {...product}
    let found = false;
    //add a qty property
    newProduct.qty = 1;
    //check if item exists in cart
    newCart = newCart.map(item => {
      if(item.id === newProduct.id) {
        let newItem = {...item}
        //up the qty
        found = true;
        newItem.qty++;
        return newItem
      }
      return item;
    })

    if (!found) {
      //push the item to the cart
      newCart.push(newProduct)
    }
    return newCart
  }

  export function calculateSubTotal() {
    // Build me!
  }
  export function calculateTotal() {
    // Build me!
  }
  export function removeItem() {
    // Build me!
  }

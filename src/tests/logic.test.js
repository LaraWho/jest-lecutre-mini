const { toggle, addToCart } = require('../Logic/logic');

const product = {
  id: 1,
  product: 'Fillets',
  price: 69.41,
  image: 'http://goodtogostore.com/product-package-images/192837494.jpg',
};

describe('Tests Toggle Show button', () => {
  test('if given true, return false', () => {
    expect(toggle(true)).toBe(false);
  })
  test('if given false, return true', () => {
    expect(toggle(false)).toBe(true);
  })
  test('if given a falsey value, it returns true', () => {
    expect(toggle(0)).toBeTruthy();
  })
});

describe('Can add item to cart', () => {
  var cart = [];
  beforeEach(() => {
    cart = []
  })

  test('can add item to the cart', () => {
    expect(addToCart(cart, product)).toHaveLength(1);
  })
  test('the returned array has the correct item', () => {
    let newCart = addToCart(cart, product)
    expect(newCart[0].id).toEqual(product.id);
  })
  test('should return new cart', () => {
    let newCart = addToCart(cart, product)
    expect(newCart).not.toBe(cart);
  })
  test('when adding a repeat item, should update quantity', () => {
    let newCart = addToCart(cart, product);
    newCart = addToCart(newCart, product);
    expect(newCart[0].qty).toBe(2);
  })
  test('added item should not be the same object', () => {
    let newCart = addToCart(cart, product);
    expect(newCart[0]).not.toBe(product);
  })
  test('if adding a duplicate item, should not be the same object', () => {
    let newCart = addToCart(cart, product);
    let reallyNewCart = addToCart(newCart, product);
    expect(newCart[0].qty).toBe(1);
  })
});

describe('can calculate sub total', () => {
  // can get correct sub total
  // has 2 decimal points at the end
  // does not go past 2 decimal places
  // returns a string(because numbers can't be 1.00 it has to be a string to keep the two decimals)
  // string starts with a $
  // does not modify passed in object
});

describe('can calculate Total', () => {
  // can get correct sub total
  // does have 2 decimal points at the end
  // does not go past 2 decimal places
  // returns a string(because numbers can't be 1.00 it has to be a string to keep the two decimals)
  // starts with a $
  // does not modify passed in array
});

describe('can remove item', () => {
  // before each setUp a test cart with 2 items of varying quantity

  // can lower quantity by one if quantity is over 1
  // can remove item from cart if quantity is 1
  // returns a new array
  // does not modify the items from the original cart
  // can handle being given an empty array
  // can handle if the item is not found in the array
});

const {} = require('../Logic/logic');

const product = {
  id: 1,
  product: 'Fillets',
  price: 69.41,
  image: 'http://goodtogostore.com/product-package-images/192837494.jpg',
};

describe('Tests Toggle Show button', () => {});

describe('Can add item to cart', () => {});

describe('can calculate sub total', () => {
  // can get correct sub total
  // has 2 decimal points at the end
  // does not go past 2 decimal palces
  // returns a string(because numbers can't be 1.00 it has to be a string to keep the two deciamals)
  // string starts with a $
  // does not modify passed in object
});

describe('can calculate Total', () => {
  // can get correct sub total
  // does have 2 decimal points at the end
  // does not go past 2 decimal palces
  // returns a string(because numbers can't be 1.00 it has to be a string to keep the two deciamals)
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

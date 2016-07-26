// 1.  array that stores shopping items
var shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

// 5. creates an empty array to represent  shopping cart
var shoppingCart = [];

//  2. added fruit loops to shoppingList array
shoppingList.push('fruit loops');

//  3. updated  'coffee' to 'fair trade coffee'
shoppingList[4] = 'fair trade coffee';

//  4. replace Replace 'chips' and 'salsa' with 'rice' and 'beans'
shoppingList.splice(2,3, 'rice', 'beans');

//  6. Remove the last item from your shopping list and add it to your cart
shoppingCart.push(shoppingList.pop());

// 7. Remove the first item from your shopping list and add it to the cart
shoppingCart.push(shoppingList.shift());

// 8. Write a 'while' loop that takes items from your shopping list and moves them to your cart until there are no items left on the list
while (shoppingList.length > 0) {
  shoppingCart.push(shoppingList.pop());
}

// 9. Sort the items in your cart alphabetically... backwards
shoppingCart.sort();
shoppingCart.reverse();

// 10. Print the list of items in your shopping cart to the console as comma separated string.
var shoppingCartList = shoppingCart.join(', ');

console.log(shoppingCartList);




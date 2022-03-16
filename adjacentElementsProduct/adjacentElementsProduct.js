function adjacentElementsProduct(items) {
    var product = 0;
    for (var i = 0; i < items.length - 1; i++) {
        product = Math.max(product, items[i] * items[i + 1]);
    }
    return product;
}
module.exports = adjacentElementsProduct;
//console.log(adjacentElementsProduct(data));
//console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

// // assert
// expect(response).toBe(21);
//Given an array of integers, find the pair of adjacent elements 
//that has the largest product and return that product.

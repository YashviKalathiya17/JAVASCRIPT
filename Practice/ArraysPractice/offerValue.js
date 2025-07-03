// In a given Array have one offer of 10% per item. at last calculate final price after an applying offer.

let array = [250, 645, 300, 900, 50];

for (i = 0; i < array.length; i++) {
    let offer = array[i] / 10;
    array[i] -= offer;
}
console.log(array);

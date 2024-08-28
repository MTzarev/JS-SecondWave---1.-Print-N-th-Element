function printNthElement(arr) {
    let step = Number(arr.pop());
    let newArr = [];
    for (let i = 0; i < arr.length; i += step) {
        // if(i = 0 && i==Number(step)){
        newArr.push(arr[i]);
        // }
    }
    console.log(newArr.join(` `));

}
printNthElement(['1', '2', '3', '4', '5', '6']

);

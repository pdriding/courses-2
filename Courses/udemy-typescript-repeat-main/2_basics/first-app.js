function add(a, b) {
    return a + b;
}
function calcNum(a, b, addFunc) {
    console.log(addFunc(a, b));
}
calcNum(1, 3, add);

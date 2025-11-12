// ---------------- PROMISE CHAINING WITH DATA & ERRORS

new Promise((resolve, reject) => {
  alert("A");
  resolve(["B", "C", "D"]);
  // reject();
})
  .then((data) => {
    // throw new Error('Error at B');
    alert(data.shift());
    return data;
  })
  .then((data) => {
    throw new Error("Error at C");
    alert(data.shift());
    return data;
  })
  .then((data) => {
    // throw new Error('Error at D');
    alert(data.shift());
    return data;
  })
  .catch((error) => {
    console.log(error);
    alert(error);
  });

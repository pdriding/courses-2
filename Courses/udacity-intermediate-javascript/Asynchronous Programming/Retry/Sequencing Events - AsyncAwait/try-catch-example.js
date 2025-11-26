// Video Example One

try {
  let two = 2;
  foo / two;
} catch (err) {
  console.error(err.message);
} finally {
  console.error("finally");
}

// Video Example Two
try {
  let result = 2 - "fifteen";
  if (Number.isNaN(result)) {
    try {
      throw new Error("something's not right!");
    } catch (err) {
      console.error(err.message);
    }
  }
} catch (err) {
  console.error(err.message);
} finally {
  console.error("finally");
}

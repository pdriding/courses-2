const fetch = require("node-fetch");
// We have set up an endpoint at http://localhost:3000.

// Make one fetch request for each CRUD action below and print the response.

// Create a GET request to http://localhost:3000
fetch("http://localhost:3000")
  .then((res) => res.json)
  .then((res) => console.log(1, res))
  .catch((error) => console.log(2, error));

fetch("http://localhost:3000", {
  method: "GET", // GET is the default method, so you can omit it in this case.
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Assuming the response is in JSON format.
  })
  .then((data) => {
    // Process the data received in the response.
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// Create a POST request to http://localhost:3000
fetch("http://localhost:3000", {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // Set the appropriate content type
  },
  body: JSON.stringify({ text: "Peter" }),
})
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// Create a PUT request to http://localhost:3000

fetch("http://localhost:3000", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json", // Set the appropriate content type
  },
  body: JSON.stringify({ text: "Peter" }),
})
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// Create a DELETE request to http://localhost:3000

fetch("http://localhost:3000", {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json", // Set the appropriate content type
  },
})
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

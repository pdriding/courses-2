const fs = require("fs");
const http = require("http");

const requestHandler = (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<!doctype html><html><head><title>My first page</title></head><body>" +
        "<h1>Hello from my Node.js server</h1>" +
        '<form action="/create-user" method="POST">' +
        '<label for="username">Username:</label> ' +
        '<input id="username" name="username" type="text" placeholder="Enter username" required /> ' +
        '<button type="submit">Create user</button>' +
        "</form>" +
        "</body></html>"
    );
    return res.end();
  }

  if (req.url === "/create-user" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => body.push(chunk)); // collect chunks
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString(); // join + string
      const user = parsedBody.split("=")[1];
      fs.writeFileSync("hello.txt", user);
    });
    return res.end();
  }

  if (req.url === "/users") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(
      "<!doctype html><html><head><title>My first page</title></head><body><h1>Users</h1></body></html>"
    );
    res.end();
  }
};

const server = http.createServer(requestHandler);
server.listen(3000);

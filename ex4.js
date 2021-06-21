const http = require("http");
const url = require("url");
const querystring = require("querystring");
const math = require("./mathModule");

const port = 3000;
const server = http.createServer();

server.on("request", (req, res) => {
  const parsed = url.parse(req.url, true).query;

  const a = parseInt(parsed.a);
  const b = parseInt(parsed.b);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
        <ul>
            <li>${a} + ${b} = ${math.sum(a, b)}</li>
            <li>${a} - ${b} = ${math.sub(a, b)}</li>
            <li>${a} x ${b} = ${math.mul(a, b)}</li>
            <li>${a} / ${b} = ${math.div(a, b)}</li>
        </ul>
    `);
});

server.listen(port);

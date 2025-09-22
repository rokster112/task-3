const http = require("http");

function gcd(a, b) {
  while (b) [a, b] = [b, a % b];
  return a;
}

function lcm(a, b) {
    if (a === 0) return b;
    if (b === 0) return a;
  return (a * b) / gcd(a, b);
}

http
  .createServer((req, res) => {
    const u = new URL(req.url, `http://${req.headers.host}`);
    const x = +u.searchParams.get("x");
    const y = +u.searchParams.get("y");

    if (u.pathname !== "/rokster112_gmail_com") return res.end("NaN");
    if (!(x >= 0 && y >= 0 && x % 1 === 0 && y % 1 === 0)) return res.end("NaN");

    res.end(String(lcm(x, y)));
  })
  .listen(process.env.PORT || 3000);

const http = require("http");

function gcd(a, b) {
  while (b !== 0n) [a, b] = [b, a % b];
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

http
  .createServer((req, res) => {
    const u = new URL(req.url, `http://${req.headers.host}`);
    const x = BigInt(u.searchParams.get("x"));
    const y = BigInt(u.searchParams.get("y"));

    if (u.pathname !== "/rokster112_gmail_com") return res.end("NaN");
    if (x < 0n || y < 0n) return res.end("NaN");

    res.end(lcm(x, y).toString());
  })
  .listen(process.env.PORT || 3000);

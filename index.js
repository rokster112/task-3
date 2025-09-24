const http = require("http")
function gcd(a, b) {
  while (b !== 0n) [a, b] = [b, a % b]
  return a
}
function lcm(a, b) {
  if (a === 0 && b === 0) return 0
  return (a * b) / gcd(a, b)
}
http
  .createServer((req, res) => {
    const u = new URL(req.url, `http://${req.headers.host}`)
    const xs = u.searchParams.get("x"),
      ys = u.searchParams.get("y")
    if (xs == null || ys == null) return res.end("NaN")
    const x = BigInt(xs),
      y = BigInt(ys)

    if (u.pathname !== "/rokster112_gmail_com") return res.end("NaN")
    if (x < 0n || y < 0n) return res.end("NaN")
    res.end(lcm(BigInt(x), BigInt(y)).toString())
  })
  .listen(process.env.PORT || 3000)

const http = require("http");
function gcd(a, b) {
  while (b !== 0n) [a, b] = [b, a % b]
  return a
}
function lcm(a, b) {
  if (a === 0n && b === 0n) return 0n
  return (a * b) / gcd(a, b)
}
function isValidIntegerString(s) {
  if (!/^\d+$/.test(s)) return false
  try {
    BigInt(s)
    return true
  } catch {
    return false
  }
}
http
  .createServer((req, res) => {
    const u = new URL(req.url, `http://${req.headers.host}`)
    const xs = u.searchParams.get("x")
    const ys = u.searchParams.get("y")
    if (xs == null || ys == null) return res.end("NaN")
    if (!isValidIntegerString(xs) || !isValidIntegerString(ys)) return res.end("NaN")
    const x = BigInt(xs)
    const y = BigInt(ys)
    if (u.pathname !== "/rokster112_gmail_com") return res.end("NaN")
    res.end(lcm(x, y).toString())
  }).listen(process.env.PORT || 3000)

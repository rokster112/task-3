const http=require("http")
http
  .createServer((req, res) => {
    const u=new URL(req.url, `http://${req.headers.host}`),
    x=+u.searchParams.get("x"),
    y=+u.searchParams.get("y")
    if (u.pathname !== "/rokster112_gmail_com") return res.end("NaN")
    if(!(x>0&&y>0&&x%1==0&&y%1==0)) return res.end("NaN")
    let m=Math.max(x, y)
    while (m%x||m%y) m++
    res.end(m+"")
  }).listen(process.env.PORT || 3000)

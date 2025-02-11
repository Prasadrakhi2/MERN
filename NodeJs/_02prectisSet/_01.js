const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>prectice page 1</title></head>");
    res.write("<body>");
    res.write("<nav>");
    res.write('<a href="/">Home</a><br>');
    res.write('<a href="/women">Women</a><br>');
    res.write('<a href="/man">Man</a><br>');
    res.write('<a href="/kids">Kids</a><br>');
    res.write('<a href="/cart">Cart</a><br>');
    res.write("</nav>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/women") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>prectice page 1</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Women sections</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/man") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>prectice page 1</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Mens sections</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/kids") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>prectice page 1</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Kids sections</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/cart") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>prectice page 1</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Cart sections</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>prectice page 1</title></head>");
  res.write("<body>");
  res.write("<h1>sorry you came at the wrong section</h1>");
  res.write("</body>");
  res.write("</html>");
  return res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server has been started at [http://localhost:${PORT}]`);
});

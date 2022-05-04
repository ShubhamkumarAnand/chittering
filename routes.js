const displayContent = (req, res) => {

  const url = req.url

  if (url == '/profile') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<h2> This is a Profile Page </h2>')
    return res.end()
  } else if (url == '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>cheeseburger</h1>')
    return res.end()
  }

  res.setHeader('Content-Type', 'text/html')
  res.write('<h1>Page Not Found</h1>')
  res.end()
}

module.exports = displayContent

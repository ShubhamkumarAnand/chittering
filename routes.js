const displayContent = (req, res) => {

  const url = req.url
  const method = req.method

  if (url == '/profile') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<h2> This is a Profile Page </h2>')
    return res.end()
  } else if (url == '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>cheeseburger</h1>')
    return res.end()
  } else if (url == '/settings' && method=='POST') {
    res.setHeader('Content-Type', 'text/html')
    res.write(`
      <h1> Form Was submitted Boy</h1>
      `
    )
    return res.end()
  } else if (url == '/settings') {
    res.setHeader('Content-Type', 'text/html')
    res.write(`
      <h1> settings</h1>
      <form action='/settings' method='POST'> 
        <input type='text'/>
        <button type='submit'>submit</button>
      </form>`
    )
    return res.end()
  }

  res.setHeader('Content-Type', 'text/html')
  res.write('<h1>Page Not Found</h1>')
  res.end()
}

module.exports = displayContent

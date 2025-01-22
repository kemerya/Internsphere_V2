const http = require('http');
const fs = require('fs');
const path = require('path');

const users = [
  { username: 'user1', password: 'password123' },
  { username: 'user2', password: 'mypassword' },
];

// Create the server
const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'POST' && req.url === '/api/login') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString(); // Collect incoming data
    });

    req.on('end', () => {
      const { username, password } = JSON.parse(body);

      // Check credentials
      const user = users.find(user => user.username === username && user.password === password);

      if (user) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Login successful', user }));
      } else {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Invalid username or password' }));
      }
    });
  } else if (req.method === 'GET' && req.url === '/Components/Dashboard_IntershipUnit.html') {
    // Serve the Dashboard_IntershipUnit.html file
    const filePath = path.join(__dirname, 'Components', 'Dashboard_IntershipUnit.html');
    
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading the file');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.method === 'OPTIONS') {
    // Handle preflight requests
    res.writeHead(200);
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start the server
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

const http = require('http');

// Dummy user data
const users = [
  { email: 'user1@example.com', password: 'password123' },
  { email: 'user2@example.com', password: 'mypassword' },
];

// Create a server
const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/api/login') {
    let body = '';

    // Collect data from the request
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { email, password } = JSON.parse(body);

      // Authenticate user
      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Login successful', user }));
      } else {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Invalid email or password' }));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

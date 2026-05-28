const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
 res.send('<h1>Praktikum Azure App Service</h1><p>Aplikasi Node.js milik <b>Nadira Anindita (0920240052)</b> sedang berjalan.</p>');
});

app.get('/status', (req, res) => {
 res.json({ status: 'running', service: 'Azure App Service', timestamp: new Date() });
});

app.get('/profil', (req, res) => {
 res.json({ nama: 'Nadira Anindita', nim: '0920240052', prodi: 'TRPL', topik: 'Serverless Azure' });
});

app.listen(port, () => console.log(`Server berjalan pada port ${port}`));

const sqlite3 = require('sqlite3').verbose();

// Cria/abre o banco de dados
const db = new sqlite3.Database('./banco.db', (err) => {
  if (err) {
    console.error('Erro ao abrir o banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});

// Cria a tabela se ela não existir
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS pessoas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL
    )
  `);
});

module.exports = db;

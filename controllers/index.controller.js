const { join } = require('path');
const { getWsServer } = require('../ws-server');

function index(req, res) {
  res.sendFile(join(__dirname, '../public/index.html'));
}

function create(req, res) {
  getWsServer().emit('button-clicked');
  res.status(201).json({ message: 'done' });
}

module.exports = {
  index,
  create,
};
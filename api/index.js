module.exports = (req, res) => {
  const { a, b } = req.query;
  const resultado = parseFloat(a) - parseFloat(b);
  res.json({ resultado });
};

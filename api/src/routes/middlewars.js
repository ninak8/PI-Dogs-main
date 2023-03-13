const validate1 = (req, res, next) => {
  const {
    race,
    life_span_min,
    life_span_max,
    height_min,
    height_max,
    weight_min,
    weight_max,
  } = req.body;
  if (!race) return res.status(400).json({ error: "race missing" });
  if (!life_span_min)
    return res.status(400).json({ error: "life_span_min missing" });
  if (!life_span_max)
    return res.status(400).json({ error: "life_span_max missing" });
  if (!height_min) return res.status(400).json({ error: "height_min missing" });
  if (!height_max) return res.status(400).json({ error: "height_max missing" });
  if (!weight_min) return res.status(400).json({ error: "weight_min missing" });
  if (!weight_max) return res.status(400).json({ error: "weight_max missing" });
  next();
};

module.exports = {
  validate1,
};

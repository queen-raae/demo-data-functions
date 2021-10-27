export default function handler(req, res) {
  const { city, year } = req.body;
  res.send(`You time-travelled to ${city}, in year ${year}`);
}

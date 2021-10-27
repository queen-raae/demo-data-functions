export default function handler(req, res) {
  const { city, year } = req.params;
  res.send(`You time-travelled to ${city}, in year ${year}`);
}

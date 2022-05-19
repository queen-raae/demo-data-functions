export const config = {
  bodyParser: {
    raw: {
      type: `*/*`,
    },
  },
};

export default function handler(req, res) {
  // Should not work as body should not be json
  const { city, year } = req.body;
  res.send(`You time-travelled to ${city}, in year ${year}`);
}

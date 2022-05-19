export default function handler(req, res) {
  console.log(req.body);
  res.status(200).json({ hello: `raw` });
}

export const config = {
  bodyParser: {
    raw: {
      type: `*/*`,
    },
  },
};

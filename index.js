const express = require('express');
const getMetaData = require('metadata-scraper');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/api/meta', async (req, res) => {
  const url = req.query.link;
  try {
    const data = await getMetaData(url);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT || 6000, () => {
  console.log('Server running in port 6000...');
});

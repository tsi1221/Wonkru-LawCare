require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json()); // Important for JSON POST bodies

const {
  CLIENT_ID,
  REDIRECT_URI,
  AUTHORIZATION_ENDPOINT,
  TOKEN_ENDPOINT,
  USERINFO_ENDPOINT,
  CLIENT_ASSERTION_TYPE,
  MONGO_URI,
  PRIVATE_KEY,
} = process.env;

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(console.error);

// === Routes ===
app.use('/api/auth', authRoutes);

// === Fayda Login ===
app.get('/login', (req, res) => {
  const state = uuidv4();
  const scope = 'openid profile email';

  const authUrl = `${AUTHORIZATION_ENDPOINT}?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(scope)}&state=${state}`;
  
  res.redirect(authUrl);
});

app.get('/callback', async (req, res) => {
  const { code } = req.query;
  const now = Math.floor(Date.now() / 1000);
  const assertion = jwt.sign(
    {
      iss: CLIENT_ID,
      sub: CLIENT_ID,
      aud: TOKEN_ENDPOINT,
      jti: uuidv4(),
      exp: now + 300,
      iat: now
    },
    PRIVATE_KEY.replace(/\\n/g, '\n'),
    { algorithm: 'RS256', header: { typ: 'JWT' } }
  );

  try {
    const tokenRes = await axios.post(
      TOKEN_ENDPOINT,
      new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_assertion_type: CLIENT_ASSERTION_TYPE,
        client_assertion: assertion
      }).toString(),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    const accessToken = tokenRes.data.access_token;

    const userinfoRes = await axios.get(USERINFO_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    const userData = userinfoRes.data;

    await User.findOneAndUpdate(
      { sub: userData.sub },
      { ...userData },
      { upsert: true, new: true }
    );

    res.redirect(`http://localhost:3000/client-dashboard?sub=${userData.sub}`);
  } catch (err) {
    console.error(err?.response?.data || err.message);
    res.status(500).json({ error: 'Fayda authentication failed' });
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`✅ Backend running at http://localhost:${port}`);
});

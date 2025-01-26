const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Personal Information about yourself
const personalInfo = `
My name is Leon Tang. I am a junior at the University of Maryland, Baltimore County (UMBC), majoring in Information Systems. 
I am passionate about tech innovation, cybersecurity, and project management. 
I have leadership experience as the President of the ISSA UMBC Chapter and as Vice President of UMBC Men's Rugby. 
My projects include research on cybersecurity threats in autonomous systems, machine learning for dropout prediction, and donation optimization campaigns.
My skills include Python, C++, JavaScript, SQL, React, and project management methodologies like Agile and Scrum.
`;

// OpenAI GPT Endpoint
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5',
        messages: [
          { role: 'system', content: `You are a helpful assistant. Answer questions about Leon Tang based on the following information: ${personalInfo}` },
          { role: 'user', content: message },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const botMessage = response.data.choices[0].message.content;
    res.status(200).json({ message: botMessage });
  } catch (error) {
    console.error('Error communicating with OpenAI API:', error.response.data);
    res.status(500).json({ error: 'Failed to get response from OpenAI API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const botMessage = response.data.choices[0].message.content;
    res.status(200).json({ message: botMessage });
  } catch (error) {
    console.error('Error with OpenAI API:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to get response from OpenAI API' });
  }
});

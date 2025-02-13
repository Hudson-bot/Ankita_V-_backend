const Response = require('../models/Response');

exports.saveResponse = async (req, res) => {
  const { answer } = req.body;

  try {
    const newResponse = new Response({ answer });
    await newResponse.save();
    res.status(201).json({ message: 'Response saved successfully', answer });
  } catch (error) {
    res.status(500).json({ message: 'Error saving response', error });
  }
};
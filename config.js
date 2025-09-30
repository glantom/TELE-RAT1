const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8189336653:AAGk9CF0wZEJyoEGD3bw8gKzEGPGXbF-BhI',
  id: isNaN(parsedId) ? 871968660 : parsedId // replace 12345.. with your telegram chat id
};

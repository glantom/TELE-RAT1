const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8129118866:AAHCbMKMEJLp9ROq8ViBRzNnoFIShaKPhxo',
  id: isNaN(parsedId) ? 871968660 : parsedId // replace 12345.. with your telegram chat id
};

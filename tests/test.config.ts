export const environment = {
  NODE_ENV: 'test',
  SERVICEURL: 'https://localhost',
  CHATBOT: '123456',
  CHATBOT_ENV: 'production',
  CHATBOT_USER: 'cahtbotuser',
  CHATBOT_PASS: 'chatbotpass',
  TOKEN: 'testtoken',
  APIKEY: 'testkey',
};

Object.keys(environment).forEach((key) => {
  process.env[key] = environment[key];
});


import readlineSync from 'readline-sync';

const welcome = (text) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(text);
  return userName;
};

export default welcome;
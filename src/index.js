import { copyToClipBoard } from './copy';
import './sass/main.scss';

const codeTranslation = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',

  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '----.',
  0: '-----',
};

const ALPHANUMERIC = '^[a-z0-9 ]+$';

const inputBox = document.querySelector('input');
const textArea = document.querySelector('textarea');
const copyBtn = document.querySelector('.copy');

// Event Listeners
copyBtn.addEventListener('click', e => {
  copyToClipBoard();
});

textArea.addEventListener('input', e => {
  /* prevent line break in the text area */
  if (e.key == 'Enter') {
    e.preventDefault();
  }
});

inputBox.addEventListener('input', e => {
  if (!checkValidity(e.key, ALPHANUMERIC)) return;

  const text = inputBox.value;

  const isValid = checkValidity(text, ALPHANUMERIC);
  if (isValid) {
    inputBox.classList.remove('error');
    const translation = textToCode(text);
    textArea.value = translation;
  } else {
    inputBox.classList.add('error');
  }

  /* Check if empty, remove error*/
  if (text.length === 0) {
    inputBox.classList.remove('error');
    textArea.value = '';
  }
});

// Functions
function checkValidity(text, pattern) {
  pattern = new RegExp(pattern);
  return pattern.test(text);
}

function charToCode(char) {
  return codeTranslation[char];
}

function textToCode(text) {
  const splitText = [...text];
  const translation = [];

  splitText.forEach(char => {
    if (char === ' ') {
      translation.push('||');
    } else {
      const code = charToCode(char);
      translation.push(code);
    }
  });

  return translation.join(' ');
}

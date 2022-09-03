const textArea = document.querySelector('textarea');

function copyToClipBoard() {
  /* Mobile Device */
  textArea.select();
  textArea.setSelectionRange(0, 99_999);

  navigator.clipboard.writeText(textArea.value);
  console.log('copied to clipboard');
}

export { copyToClipBoard };

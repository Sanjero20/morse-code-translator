const textArea = document.querySelector('textarea');
const tooltip = document.getElementById('myToolTip');

function copyToClipBoard() {
  /* Mobile Device */
  textArea.select();
  textArea.setSelectionRange(0, 99_999);

  navigator.clipboard.writeText(textArea.value);
  console.log('copied to clipboard');

  tooltip.innerHTML = 'Copied Text';
}

function tooltipText() {
  tooltip.innerHTML = 'Copy to Clipboard';
}

export { copyToClipBoard, tooltipText };

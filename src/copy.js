const textArea = document.querySelector('textarea');
const tooltip = document.getElementById('myToolTip');

function copyToClipBoard() {
  /* Mobile Device */
  textArea.select();
  textArea.setSelectionRange(0, 99_999);

  navigator.clipboard.writeText(textArea.value);
  console.log('copied to clipboard');

  tooltip.innerHTML = 'Copied Text';
  tooltip.classList.add('copied');
}

function tooltipText() {
  tooltip.innerHTML = 'Copy to Clipboard';
  tooltip.classList.remove('copied');
}

export { copyToClipBoard, tooltipText };

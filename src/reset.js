const inputBox = document.getElementById('input-box');
const outputBox = document.getElementById('output-box');

function resetInput() {
  inputBox.value = '';
  outputBox.value = '';
}

export { resetInput };

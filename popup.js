const noteField = document.getElementById('note');
const saveButton = document.getElementById('save');
const status = document.getElementById('status');

// Carrega nota salva
chrome.storage.local.get(['quickNote'], (result) => {
  if (result.quickNote) {
    noteField.value = result.quickNote;
  }
});

// Salva a nota
saveButton.addEventListener('click', () => {
  const text = noteField.value;
  chrome.storage.local.set({ quickNote: text }, () => {
    status.textContent = 'Nota salva!';
    setTimeout(() => (status.textContent = ''), 1500);
  });
});
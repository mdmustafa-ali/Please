document.getElementById('sorryForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const to = document.getElementById('toInput').value.trim() || 'friend';
  const from = document.getElementById('fromInput').value.trim() || 'someone who cares';
  const message = document.getElementById('messageInput').value.trim() || "I didn’t mean to hurt you. Please forgive me.";

  document.getElementById('toName').textContent = to;
  document.getElementById('fromName').textContent = from;
  document.getElementById('messageText').textContent = message;

  alert('Message updated! 💌');
});

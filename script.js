document.getElementById('sorryForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const to = document.getElementById('toInput').value.trim() || 'MIRHA';
  const from = document.getElementById('fromInput').value.trim() || 'MOYA';
  const message = document.getElementById('messageInput').value.trim() || "jo bhi hua, unexpected tha.. and ig mene jan ke hi kiya, cuz ignore bhi kiya jaa skta tha.. but nae , mai to hu hi vella.. and tumhare sth bkwas krte rehta hu.. yhi socha ki shyd tum normally baat krogi, isliye maine pooch liyaaa....";

  document.getElementById('toName').textContent = to;
  document.getElementById('fromName').textContent = from;
  document.getElementById('messageText').textContent = message;

  alert('Message updated! 💌');
});


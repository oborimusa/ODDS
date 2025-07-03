// Main HTML file
fetch('discover-how.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('discover-how-container').innerHTML = html;
  });
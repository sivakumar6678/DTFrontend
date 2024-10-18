document.getElementById('toggle-button').addEventListener('click', function() {
    var content = document.getElementById('journey-content');
    var header = document.getElementById('journey-head');
    var icon = this.querySelector('i');
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
      header.style.display = 'block';
      icon.classList.remove('fa-arrow-circle-right');
      icon.classList.add('fa-arrow-circle-left');
    } else {
        header.style.display = 'none';
      content.style.display = 'none';
      icon.classList.remove('fa-arrow-circle-left');
      icon.classList.add('fa-arrow-circle-right');
    }
  });

  // Initially hide the button if no content
  window.addEventListener('load', function() {
    var content = document.getElementById('journey-content');
    var button = document.getElementById('toggle-button');
    if (content.innerHTML.trim() === '') {
      button.style.display = 'none';
    }
  });
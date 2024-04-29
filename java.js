document.getElementById('watch-trailer').addEventListener('click', function() {
    document.querySelector('.trailer-popup').style.display = 'inline-block';
    document.getElementById('trailer-video').src += "?autoplay=1";
});

document.querySelector('.trailer-popup').addEventListener('click', function(e) {
    if (e.target !== document.getElementById('trailer-video')) {
        this.style.display = 'none';
        
        var iframeSrc = document.getElementById('trailer-video').src;
        document.getElementById('trailer-video').src = iframeSrc;
    }
});
  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.details-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const moreInfo = this.nextElementSibling;
            if (moreInfo.style.display === 'block') {
                moreInfo.style.display = 'none';
                this.textContent = 'Read more';
            } else {
                moreInfo.style.display = 'block';
                this.textContent = 'Read less';
            }
        });
    });
});
const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('change', () => {
      document.body.classList.toggle('night', darkModeToggle.checked);
    });


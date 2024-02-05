var text1 = document.getElementsByClassName("calsstextconaner");
// var no = -300; // Initial position






// text1[0].style.transform = 'translateY(-1200px)'; 











$(document).ready(function(){
    var words = ["🦋BEAUTY🦋", "PASSION", "SMARTNESS"];
    var index = 0;
    setInterval(function() {
      index = (index + 1) % words.length;
      $(".txt-rotate").fadeOut(function() {
        $(this).text(words[index]).fadeIn();
      });
    }, 2500); 
  });




setTimeout(function() {text1[0].style.transform = 'translateY(-300px)'; }, 8000);

setTimeout(function() {text1[0].style.transform = 'translateY(-600px)'; }, 12000);

setTimeout(function() {text1[0].style.transform = 'translateY(-900px)'; }, 19000);

setTimeout(function() {text1[0].style.transform = 'translateY(-1200px)'; }, 25000);

setTimeout(function() {text1[0].style.transform = 'translateY(-1500px)'; }, 32000);

setTimeout(function() {text1[0].style.transform = 'translateY(-1800px)'; }, 40000);

// no
document.addEventListener("DOMContentLoaded", function() {
  var words = ["Are you sure, No", "it will be fun",  "another word", "and so on"];
  var currentIndex = 0;

  var noElement = document.querySelector('.no');
  noElement.addEventListener('click', function() {
      noElement.textContent = words[currentIndex];
      currentIndex = (currentIndex + 1) % words.length;
  });
});




// yes

const IMG = document.querySelector('.IMG');

document.addEventListener("DOMContentLoaded", function() {
  var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']; // Different colors for fireworks
  var shapes = ['circle', 'triangle', 'square', 'star', 'diamond']; // Different shapes for fireworks
  var yesElement = document.querySelector('.yes');

  yesElement.addEventListener('click', function() {
      for (var i = 0; i < 20 + Math.floor(Math.random() * 11); i++) {
          setTimeout(createFirework, Math.random() * 2500); // Create fireworks at random intervals
      }
  });


  function createFirework() {
      IMG.classList.add('active');

      var numParticles = 20; // Number of particles in one firework

      var container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.left = Math.random() * window.innerWidth + 'px';
      container.style.top = Math.random() * window.innerHeight + 'px';
      document.body.appendChild(container);

      for (var i = 0; i < numParticles; i++) {
          var particle = document.createElement('div');
          particle.classList.add('firework-particle');
          particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          particle.style.left = 0;
          particle.style.top = 0;
          container.appendChild(particle);
      }

      // Remove the container after animation completes
      container.addEventListener('animationend', function() {
          document.body.removeChild(container);
      });
      IMG.classList.add('active');

  }
});
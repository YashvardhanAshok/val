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



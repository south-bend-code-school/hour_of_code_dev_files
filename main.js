(function(){

  $(document).ready(initialize);

  function initialize(){
    setBGColor();
    $('button').click(changeColor);
  }

  function changeColor(){
    var newColor = $(this).text();
    console.log(newColor);
    $('h2').css('color', newColor);
  }

  function setBGColor(){
    $('button').each(function(i){
      var bgColor = $(this).text();
      console.log(bgColor);
      $(this).css('background-color', bgColor);
    });
  }

})();

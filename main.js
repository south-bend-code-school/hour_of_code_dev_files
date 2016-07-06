(function(){

  $(document).ready(initialize);

  function initialize(){
    setBGColor();
    $('button').click(changeColor);
    $('button').hover(bgShiftIn, bgShiftOut);
  }

  function changeColor(){
    var newColor = $(this).text();
    $('h2').css('color', newColor);
  }

  function setBGColor(){
    $('button').each(function(i){
      var bgColor = $(this).text();
      $(this).css('background-color', bgColor);
    });
  }

  function bgShiftIn(){
    var color = $(this).text();
    $(this).css({
      'background-color' : 'white',
      'color' : color,
      transition : '0.7s'
    });
  }

  function bgShiftOut(){
    var color = $(this).text();
    $(this).css({
      'background-color' : color,
      'color' : 'white',
      transition : '0.5s'
    });
  }

})();

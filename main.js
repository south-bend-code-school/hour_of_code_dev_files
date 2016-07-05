(function(){

  $(document).ready(initialize);

  function initialize(){
    $('button').click(changeColor);
  }


  function changeColor(){
    var newColor = $(this).text();
    console.log(newColor);
    $('h2').css('color', newColor);
  }

})();

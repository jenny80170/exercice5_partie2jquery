// Appel de la librairie Jquery
$(function(){
  // Fonction qui met une bordure verte quand il y a le focus
  $('#firstName').focus(function(){
    $('#firstName').css('border', '1px solid green');
  });
  // Fonction qui met une bordure rouge quand il y a plus le focus
  $('#firstName').blur(function(){
    $('#firstName').css('border', '1px solid red');
  });
  // Fonction qui met une bordure verte quand il y a le focus
  $('#lastName').focus(function(){
    $('#lastName').css('border', '1px solid green');
  });
  // Fonction qui met une bordure rouge quand il y a plus le focus
  $('#lastName').focusout(function(){
    $('#lastName').css('border', '1px solid red');
  });
});

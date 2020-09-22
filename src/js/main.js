$(function(){

  $('.tab').on('click', function(e){
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
  });

  // скрыть таб-3
  var btn = document.getElementById ('push');
  btn.addEventListener('click',func1);
 
  function func1() {
    var shadow = document.getElementById ('tab-3');
    if (shadow.style.display !== 'none'){
      shadow.style.display="none";
    }else{
      shadow.style.display="block";
    }
  
  };
   // скрыть таб-3

});
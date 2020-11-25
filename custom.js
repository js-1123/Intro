$(function(){
/* Trigger jquery */
  $(".trigger").click(function(){
    $(this).toggleClass("active")
    $(".gnb").toggleClass("active")
})
  $("section").click(function(){
    $(".gnb").removeClass("active")
  })
  $(".menu > a").click(function(){
    $(".gnb,.trigger").removeClass("active")
  })
})
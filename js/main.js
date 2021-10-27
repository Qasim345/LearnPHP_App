// menu button
$("#menu").click(()=>{
  $(".back,#menu,#sidebar").toggleClass("act");
  $("#menu").html("arrow_back")
});
document.onclick = ((e)=>{
  if(e.target.id !== 'menu' && e.target.id !== 'sidebar'){
    $("#menu,.back,#sidebar").removeClass("act");
    $("#menu").html("menu");
  }
})
$("#back").click(()=>{
  window.history.back();
});
$(".acc").click(()=>{
  $(".privacy").fadeIn(100);
});
$("#acc").click(()=>{
  $(".privacy").hide(100)
});

// about
$("#about").click(()=>{
  $(".about").fadeIn(100)
});

$("#close-about").click(()=>{
  $(".about").hide(100)
})
/*$(".back").on("touchstart",()=>{
  $("#sidebar,#menu,.back").removeClass("act");
    $("#menu").html("menu");
})*/
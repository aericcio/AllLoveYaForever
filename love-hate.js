$(document).ready(function(){
  $("#love-button").click(function(){
    $.ajax({url: "doyouloveme.html", success: function(result){
      $("#love-div").html(result);
    }});
  });
  $("#hate-button").click(function(){
    $.ajax({url: "doyouhateme.html", success: function(result){
      $("#hate-div").html(result);
    }});
  });
});

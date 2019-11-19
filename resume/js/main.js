function centerElementsOfMenuBar()
{
  var height = 74;
  var canfit = 480/height;  
  var has = $("#menu-bar").find("a");
  var left = canfit - has.length;
  $("#ht-adj").css("margin-top",((left/2)*height)+"px");
  console.log(canfit);
  console.log(has.length);
  console.log(left);
}

function hideAllData() 
{
  $("#info-card").find('#about-me').hide();
  $("#info-card").find('#fb-me').hide();
  $("#info-card").find('#ig-me').hide();
  $("#info-card").find('#git-me').hide(); 
}

function showData(elm)
{
  hideAllData();
  $("#info-card").find('#'+elm).show();
  $("#info-card").addClass("animated fadeIn").one('animationend webkitAnimationEnd oAnimationEnd', function() {
    $("#info-card").removeClass("animated fadeIn");
  });
}

//class="animated bounce delay-2s"
$(function() 
{
  centerElementsOfMenuBar();
  hideAllData();
  $("#mb-fb").click(function(){ showData("fb-me")  })
  $("#mb-ig").click(function(){ showData("ig-me")  })
  $("#mb-git").click(function(){ showData("git-me")  })
  $("#mb-home").click(function(){ showData("about-me")  })
  setTimeout(function(){
        $("#loader").hide();
        $("#content").show();
        $("#content").addClass("animated fadeIn").one('animationend webkitAnimationEnd oAnimationEnd', function() {
          $("#content").removeClass("animated fadeIn");
        });
        showData("about-me");
    }, 2000);
});
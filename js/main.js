//首頁動畫
$(document).ready(function(){
    $('#maintitle').mousemove(function(e){
      var x = (e.pageX + this.offsetLeft) / 30;
      $(this).css('background-position', x + 'px bottom');
    });    
});
//tabs
$(document).ready(function() {
  $(".myTabs").each(function() {
      var $myTabs = $(this);
      $myTabs.find(".tab_content").hide().eq(0).show();
      $myTabs.find("ul.tabs li:first").addClass("tabsBTN_active").show();
  
      $myTabs.find("ul.tabs li").click(function() {
          var $this = $(this);
          $this.addClass("tabsBTN_active").siblings().removeClass("tabsBTN_active");
          $myTabs.find(".tab_content").hide();
          var activeTab = $this.find("a").attr("href");
          $(activeTab).fadeIn();
          $('html, body').animate({
            scrollTop: activeTab.offset().top
          }, 600);
          return false;
      });
  });
});
//按鈕禁用
$("#check").click(function check(){
  var checkbox = document.getElementById("check");//选中checkbox的id；
  if(checkbox.checked==true){//按钮已选中
    document.getElementById("submit").style.backgroundColor="#ee9fc9";
    document.getElementById("submit").removeAttribute("disabled");//移除disabled
  }
  else{
    document.getElementById("submit").style.backgroundColor="#6b6b6b";
    document.getElementById("submit").disadled="disabled";
  }
});
//vots
function vote(index){
  var a=$('#vote'+index).html();
  num = parseInt(a); 
  $("#vote"+index).html(num+1);
  $(".stars3").addClass("no_stars");
}
//pop//
$(".popclose").click(function() {
  $('.popup').fadeOut(200);
});
$(".blacklayer").click(function() {
  $('.popup').fadeOut(200);
});
$(".list_picture img").click(function() {
$("div[id=" + $(this).attr("data-pop") + "]").fadeIn(200);
});

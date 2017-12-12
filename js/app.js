$(document).ready(function() {
  var $actionBtn = $("#action_btn"),
        $iconBtn = $("#action_btn .fa"),
        $lockBtn = $("#lock_btn");
  $actionBtn.click(function() {
    //alert("clicked");
    $iconBtn.toggleClass("fa-times fa-comment");
    $lockBtn.toggleClass("showing-button");
  });
});
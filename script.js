$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/ericDK89",
    dataType: "json",
    success: function (res) {
      $(".profile-avatar").attr("src", res.avatar_url);
      $(".profile-name").text(res.name);
      $(".profile-username").text(`@${res.login}`);
      $("#followers-amount").text(res.followers);
      $("#following-amount").text(res.following);
      $("#github-profile-link").attr("href", res.html_url);

      $.ajax({
        type: "GET",
        url: "https://api.github.com/users/ericDK89/repos",
        dataType: "json",
        success: function (res) {
          $(".numbers-item").find("#repos-amount").text(res.length);
        },
      });
    },
  });
});

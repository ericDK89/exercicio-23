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

  // fetch("https://api.github.com/users/ericDK89").then(async (res) => {
  //   const data = await res.json();

  //   // $(".profile-avatar").attr("src", data.avatar_url);
  //   // $(".profile-name").text(data.name);
  //   // $(".profile-username").text(`@${data.login}`);
  //   // $("#followers-amount").text(data.followers);
  //   // $("#following-amount").text(data.following);
  //   // $("#github-profile-link").attr("href", data.html_url);

  //   fetch(data.repos_url).then(async (res) => {
  //     const data = await res.json();

  //     $(".numbers-item").find("#repos-amount").text(data.length);
  //   });
  // });
});

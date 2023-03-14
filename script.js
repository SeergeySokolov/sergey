$(document).ready(function() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      type: "GET",
      success: function(data) {
        var list = $("#task-list");
        $.each(data, function(index, item) {
          var li = $("<li></li>").text(item.title);
          list.append(li);
        });
      },
      error: function(xhr, status, error) {
        console.log("Error: " + error);
      }
    });
  });
  
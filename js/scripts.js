$(document).ready(function() {
    $("form#add-new-task").submit(function(event) {
        event.preventDefault();

        var task = $("input#new-task").val();

        $("ul#tasks").append("<li><span class='task'>" + task +"</span></li>");

        $(".task").last().click(function() {
            $(this).hide();
            $("ul#completed-tasks").append("<li>"+ task + "</li>");
        });

        $("input#new-task").val("");
    });
});

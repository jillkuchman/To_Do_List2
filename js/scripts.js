$(document).ready(function() {
    $("form#add-new-task").submit(function(event) {
        event.preventDefault();

        var task = $("input#new-task").val();
        var is_completed = false;
        var newTask = {taskname: task, status: is_completed};

        $("ol#tasks").append("<li class='list-item'><span class='task'>" + newTask.taskname +"</span></li>");



        $(".task").last().click(function() {
            $(this).toggleClass('donetask');
        });

        $("input#new-task").val("");

    });
});

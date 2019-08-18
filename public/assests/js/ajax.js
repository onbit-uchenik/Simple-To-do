let id = 0;
//strike through animation
$('ul').on('click','li',function(event) {
    $(this).toggleClass('done');
    event.stopPropagation();
});

//delete item functionality..

$('ul').on('click','span',function(event) {
    $(this).parent().fadeOut(200,function() {
        let taskId = $(this).attr('id');
        let ref = $(this);
        $.ajax({
            type: "delete",
            url: `/task/${taskId}`,
            dataType: "json",
            success: function (res) {
                ref.remove();        
            }
        });
        
    });
    event.stopPropagation();
});
//https://medium.com/@yaniv_g/dont-use-bodyparser-json-with-jquery-post-d034c44ac7ad

$('input').keypress(function(event){
    if(event.which === 13) {
        let str =  $(this).val();
        $(this).val('');
        let data = {
            "id" : (id++),
            "task" : str
        };
        
        $.post("/task",data,
            function (res, textStatus, jqXHR) {
                $('ul').append(`<li id=${res.id}> <span class="delete"> <i class="fa fa-trash" aria-hidden="true"></i> </span>${res.task}</li>`);
            },
            "json"
        );
        
    }
});
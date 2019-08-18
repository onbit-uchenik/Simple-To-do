//strike through animation
$('ul').on('click','li',function(event) {
    $(this).toggleClass('done');
    event.stopPropagation();
});

//delete item functionality..

$('ul').on('click','span',function(event) {
    $(this).parent().fadeOut(200,function() {
        $(this).remove();
    });
    event.stopPropagation();
})

$('input').keypress(function(event){
    if(event.which === 13) {
        let str =  $(this).val();
        $('ul').append(`<li> <span class="delete"> <i class="fa fa-trash" aria-hidden="true"></i> </span>${str}</li>`);
        $(this).val('')
    }
});
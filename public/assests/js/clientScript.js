// strike thorugh functionality


/*$('li').click(function() {
    console.log($(this).css("color"));
    if($(this).css("color") === "rgb(0, 128, 0)"){
        $(this).css({
            color: "black",
            textDecoration : "none"
        })
    }
    else{
        $(this).css({
            color : "green",
            textDecoration : "line-through"
        })
    }
});*/
// the same work can be done easily by using function toggle class..

//$("li").click(function() {
  //  $(this).toggleClass("done");
//});

//bubbling of events

/*$('span').click(function(event){
    alert('this is span');
    event.stopPropagation();
})

$('li').click(function(event){
    alert('this is li');
    event.stopPropagation();
})

$('ul').click(function(event){
    alert('this is ul');
    event.stopPropagation();
})

$('body').click(function(event){
    alert('this is body');
    event.stopPropagation();
})*/





//adding
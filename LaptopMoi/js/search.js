$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        var keyword = $("#search").val().toLowerCase();
        $(".pro-1").each(function(){
            var productName = $(this).find("h6").text().toLowerCase();

            if(productName.indexOf(keyword) !== -1){
                $(this).show(); 
            } else {
                $(this).hide();
            }
        });
    });
});
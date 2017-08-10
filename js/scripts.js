function questionClick(){
$(this).find(".question , .answer").toggleClass("hidden")
};

$(".col-md-3").on("click",questionClick);

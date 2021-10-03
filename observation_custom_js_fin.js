var elems = $("form[name='mainform']>div")
.not(".text")
	.find(".question")
	.not("#comm")
	.not("#version")
	.not("[id^='dopcheck']")
		.filter(":hidden")
		.map(function(){return $(this).attr("id")});

$("#hidden_ques").val(elems.get().join(";"))

var dop = $("[type='checkbox'][id^='dopcheck']:checked");
if (dop.length > 0){
  alert("Если Вы уверены в ответе на вопрос, \nснимите галочку 'Сомневаюсь в ответе / Заполнить вопрос позже'");
  dop.filter(":first").focus();
  return false;
}

$("#comm_r1_c1").val($("#comments_r1_c1").val());
$("#comm_r1_c2").val($("#comments_r1_c2").val());
$("#comm_r1_c3").val($("#comments_r1_c3").val());
return true;
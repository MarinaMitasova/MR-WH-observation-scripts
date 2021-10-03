var allQues = $("form[name='mainform']>div").filter(":hidden");
allQues.each(function(i, e){
	if ($(e).hasClass("select") && $(e).find("[type='radio']").length){
		$(e).find("[type='radio']:first").prop("checked", true);
		var id = $(e).find("[type='radio']:first").attr("id");
		if ($("#" + id + "_other").length){
			$("#" + id + "_other").val("none");
		}
	}else if ($(e).hasClass("select") && $(e).find("[type='checkbox']").length){
		if ($(e).find("[id^=dopcheck]").length){
			$(e).find("[type='checkbox']").prop("checked", false);
			$(e).find(".red_checkbox").css("background", "#fafafa");
		}else{
			$(e).find("[type='checkbox']:first").prop("checked", true);
			var id = $(e).find("[type='checkbox']:first").attr("id");
			if ($("#" + id + "_other").length){
				$("#" + id + "_other").val("none");
			}
		}
	}if ($(e).hasClass("select") && $(e).find("select").length){
		$(e).find("select").val(1);
	}else if ($(e).hasClass("grid") && $(e).find("[id^='q5x1x1p']").length){
		$(e).find("[type='text']").val("none");
		$(e).find("[type='checkbox'][id$='_c4']").prop("checked", true);
	}else if ($(e).hasClass("grid") && $(e).find("[id^='q5x1x1Ap']").length){
		$(e).find("[type='text']").val("none");
		$(e).find("[type='checkbox'][id$='_c4']").prop("checked", true);
	}else if ($(e).hasClass("grid") && $(e).find("[type='checkbox']").length){
		$(e).find("[type='checkbox']:first").prop("checked", true);
	}else if (($(e).hasClass("grid") || $(e).hasClass("open_end")) && $(e).find("input[type='text'], textarea").length){
		$(e).find("input[type='text'], textarea").val("none");
	}else if ($(e).hasClass("numeric")){
		$(e).find("input[type='text']").val("99");
	}
});


for (var i = 1; i<=3; i++){
	if ($("#q5x1x1p"+i).length && $("#q5x1x1p"+i).is(":visible")){
		if ( !$("#q5x1x1p"+i).find("[type='checkbox']:checked").length ){
			alert("Укажите ответ в вопросе 5.1.1 Детейлинга №"+i);
			$("#q5x1x1p"+i).find("[type='checkbox']:visible:first").focus();
			return false;
		}
	}
	if ($("#q5x1x1Ap"+i).length && $("#q5x1x1Ap"+i).is(":visible")){
		if ( !$("#q5x1x1Ap"+i).find("[type='checkbox']:checked").length ){
			alert("Укажите ответ в вопросе 5.1.1 Детейлинга №"+i);
			$("#q5x1x1Ap"+i).find("[type='checkbox']:visible:first").focus();
			return false;
		}
	}
}

var res = true;
$("[id^=q5x1x1p][type='text']:visible, [id^=q5x1x1Ap][type='text']:visible").each(function(){
	var tmp = this.id.split("_")
	var answ = $("#"+tmp[0]).find("[type='checkbox'][id*="+tmp[1]+"]").not("[id$='_c5']")
	if ($(this).val() != "" && answ.filter(":checked").length == 0){
		alert("Укажите ответ в вопросе 5.1.1");
		answ.eq(0).focus();
		answ.parents("tr:first").addClass("not_answered")
		res = false;
		return false;
	}
})
if (!res) return false;

var res = true;
$("[id^=q5x1x1p][type='checkbox'][id$='_c5']:visible, [id^=q5x1x1Ap][type='checkbox'][id$='_c5']:visible").each(function(){
	var tmp = this.id.split("_")
	var answ = $("#"+tmp[0]).find("[type='checkbox'][id*="+tmp[1]+"]").not("[id$='_c5']")
	if ($(this).prop("checked") && answ.filter(":checked").length == 0){
		alert("Укажите ответ в вопросе 5.1.1");
		answ.eq(0).focus();
		answ.parents("tr:first").addClass("not_answered")
		res = false;
		return false;
	}
})
if (!res) return false;

if ($("#timeEndP1_r3_c1").is(":hidden")){
	$("#timeEndP1_r3_c1").prop("checked", true);
	$("#timeEndP1_r1_c1, #timeEndP1_r2_c1").val("none");
}else if (!$("#timeEndP1_r3_c1").prop("checked") && !$("#timeEndP1_r3_c1").is(":hidden")){
  alert("Проверьте длительность Детейлинга №1.\nЕсли верно, отметьте соответствующую галочку.");
  $("#timeEndP1_r3_c1").focus();
  return false;
}

if ($("#timeEndP2_r3_c1").is(":hidden")){
	$("#timeEndP2_r3_c1").prop("checked", true);
	$("#timeEndP2_r1_c1, #timeEndP2_r2_c1").val("none");
}else if (!$("#timeEndP2_r3_c1").prop("checked") && !$("#timeEndP2_r3_c1").is(":hidden")){
  alert("Проверьте длительность Детейлинга №2.\nЕсли верно, отметьте соответствующую галочку.");
  $("#timeEndP2_r3_c1").focus();
  return false;
}

if ($("#timeEndP3_r3_c1").is(":hidden")){
	$("#timeEndP3_r3_c1").prop("checked", true);
	$("#timeEndP3_r1_c1, #timeEndP3_r2_c1").val("none");
}else if (!$("#timeEndP3_r3_c1").prop("checked") && !$("#timeEndP3_r3_c1").is(":hidden")){
  alert("Проверьте длительность Детейлинга №3.\nЕсли верно, отметьте соответствующую галочку.");
  $("#timeEndP3_r3_c1").focus();
  return false;
}

var bln = true;
$("[id^='q3x4p'].question:visible").each(function(){
	var bl = this.id.match(/p\d/)[0].replace("p", "");	
	
	var lev1 = $("#q3x4p"+bl).find(".tbl_level1 [type='checkbox']:checked");
	if (lev1.length == 0){
		alert("Выберите ИР в вопросе 3.4 в "+bl+"-м детейлинге");
		$("#dopcheckq3x3p"+bl+"_1").focus();
		bln = false;
		return false;
	}

})
return bln;
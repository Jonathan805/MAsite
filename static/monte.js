 $(document).ready(function(){
 	 $("#urlButton").click(Kappa);

	
 });
 

 $('#normalText').bind('keypress', function(e) {
	if(e.keyCode==13){
		Kappa();
	}
});
var colors = [		"#FF0000",  		//0
					"#FF4000",  		//1
					"#FF8000",  		//2
					"#FFBF00", 			//3
					"#80FF00",  		//4
					"#40FF00",  		//5
					"#00BF80",  		//6
					"#0080BF", 			//7
					"#0080FF",  		//8
					"#0000FF",  		//9
					"#4000FF",  		//10
					"#8000FF", 			//11
					"#BF00FF",  		//12
					"#FF00FF",  		//13
					"#FF00BF",  		//14
					"#FF00BF",  		//15
					"#FF0080"			//16;
					]
function Kappa()
{
	console.log("inside function");
	//get the input
	var text = $("#urlText").val();
	var length = text.length;
	
	//result string
	var result = "[size=100]";
	var pos = 0;
	var endcolor = "[/color]";
	var supertxt = "[super]";
	var endsuper = "[/super]";
	var sub = "[sub]";
	var endsub = "[/sub]";
	//for every letter of the input
	for (int i = 0; i < length; i++){
		var colortext = "[color=" + colors[i%17] + "]";
		var c = text[i];
		if (text[i+1]== " "){
				i++;
				c+=" ";
			}
		switch (pos%4){
		case 0:
		case 2:
			result = result.concat(colortext,c, endcolor);
		break;
		case 1:
			result = result.concat(sub, colortext,c, endcolor, endsub);
		break;
		case 3:
			result = result.concat(supertxt, colortext, c, endcolor, endsuper);
		break;
		}
	}

	result = result.concat("[size]");
	$("resultText").val(result);
}
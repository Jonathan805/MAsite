 $(document).ready(function(){
 	 $("#urlButton").click(Kappa);
	
	
 });

 $('#Text').keyup( function(e) {
		if(e.keyCode==13){
			Kappa();
		}
	});

//  $('#normalText').bind('keypress', function(e) {
// 	if(e.keyCode==13){
// 		Kappa();
// 	}
// });
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
	var text = $("#Text").val();
	var length = text.length;
	
	//result string
	var result = "[size=200]";
	var pos = 0;
	var endcolor = "[/color]";
	var supertxt = "[super]";
	var endsuper = "[/super]";
	var sub = "[sub]";
	var endsub = "[/sub]";

	var checked = document.getElementById("checkbox1");
	var capsbox = document.getElementById("checkbox2");
	var colorbox = document.getElementById("checkbox3");
	var sizebox = document.getElementById("checkbox4");

	if (sizebox.checked){
		result = "";
	}

	//disable colors
	if (colorbox.checked){
		endcolor = "";
	}


	//for every letter of the input
	for (var i = 0; i < length; i++){
		
		var colortext ="";
		if (!colorbox.checked){
			colortext = "[color=" + colors[i%17] + "]";
		}		
		var c = text[i];
		if (text[i+1]== " "){
				i++;
				c+=" ";
		}
		console.log(i +" " + pos);
		if (checked.checked)
			pos = 0;
		else
			pos = pos+1;
		switch (pos%4){
			case 0:
			case 2:{
				result = result.concat(colortext,c, endcolor);
				break;
			}
			case 1:{
				result = result.concat(sub, colortext,c, endcolor, endsub);
				break;
			}
			case 3:{
				result = result.concat(supertxt, colortext, c, endcolor, endsuper);
				break;
			}
		
		}
	}
	//disable size
	if (!sizebox.checked)
		result = result.concat("[/size]");

	//disable caps
	if (!capsbox.checked)
			result = result.toUpperCase();
	
	document.getElementById("result").innerHTML = result+" ";	
	$( "#result" ).fadeIn( "slow" );

	
}
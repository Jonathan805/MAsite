 $("#urlButton").click(Kappa);

 $('#normalText').bind('keypress', function(e) {
	if(e.keyCode==13){
		Kappa();
	}
});

function Kappa()
{
	var text = $("#urlText").val();

}
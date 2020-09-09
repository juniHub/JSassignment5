/*****************************************
File: JQuery_Asgn5_Nguyen.html
Author: Thuy Tien Nguyen
Assignment: 5
Create Date: 7/14/2019
Last Modified: 7/20/2019
****************************************/

var newTextImg; //global

$(document).ready(function() 
{ 
	$("#submitme").click(
		function () 
		{
			$("#question span").text("");
			$("#mymessage").text(""); 
			var myfirst = $("#firstname").val(); 
			if (myfirst == "") 
			{ 
			
				$("#question span").text("Must enter first name"); 
				return;
				
			}
			
			$("#mymessage").text(myfirst + " you want a " + newTextImg + " vacation");
		
		}); //end of click "Submit ME" handler
	
	$("#vacationimages img").click(
		
		function () 
		{ 
			
			var changeImg = $(this).attr("src");
			var changeText = $(this).attr("alt");
			newTextImg = changeText;
			
			$("#bigimage").show("slow");
			$("#bigimage img").attr("src", changeImg);
			$("#imagedesc").text(changeText);
			
			$("#bigimage img").hover( 
				function() 
				{ 
					$("#bigimage img").css("border", "outset 10px");
				},
				
				function() 
				{ 
					$("#bigimage img").css("border", "none");
				}	
	
			);  //end hover
						
		}); //end of click to make images bigger handler 
	
	$("#vacationimages img").mouseover( 
		function() 
		{
			$(this).css("border", "outset 10px");
						
		}); //end of mouseover function
		
	$("#vacationimages img").mouseout( 
		function() { 
		
			$(this).css("border", "none");
			
		}); //end of mouseout function
		
	$("#showhidebutton").click(
		function () 
		{
			var showButton = $("#bigimage").css("display");
			if (showButton == "none") 
			{ 
				$("#bigimage").show("slow");
				$(this).val("Hide Image");
				
			} else {
				
				$("#bigimage").hide("slow");
				$(this).val("Show Image");
			}

		}); //end of click to show and hide images handler
		
}); // END OF READY
	


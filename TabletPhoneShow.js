	
	function showParty() {
              //alert("I am an alert box!");
			  var stats =  document.getElementById("PartySec").style.display;
		//alert(stats);
			if (stats == "block"){  
				
				document.getElementById("PartySec").style.display = "block";
				document.getElementById("SeasonalSec").style.display = "none";
				document.getElementById("WeddingSec").style.display = "none";
				
				document.getElementById("PartySlider").style.backgroundColor = '#352E2E'; // this keeps the hover color
				document.getElementById("PartySlider").style.color = 'white'; // this keeps the hover color
				document.getElementById("WeddingSlider").style.backgroundColor = 'white'; // this keeps the hover color
				document.getElementById("WeddingSlider").style.color = 'black'; // this keeps the hover color
				document.getElementById("SeasonalSlider").style.backgroundColor = 'white'; // this keeps the hover color
				document.getElementById("SeasonalSlider").style.color = 'black'; // this keeps the hover color
			} 
			else if (stats="none"){
				
				document.getElementById("PartySec").style.display = "block";
				document.getElementById("SeasonalSec").style.display = "none";
				document.getElementById("WeddingSec").style.display = "none";
				
				document.getElementById("PartySlider").style.backgroundColor = '#352E2E'; // this keeps the hover color
				document.getElementById("PartySlider").style.color = 'white'; // this keeps the hover color
				document.getElementById("WeddingSlider").style.backgroundColor = 'white'; // this keeps the hover color
				document.getElementById("WeddingSlider").style.color = 'black'; // this keeps the hover color
				document.getElementById("SeasonalSlider").style.backgroundColor = 'white'; // this keeps the hover color
				document.getElementById("SeasonalSlider").style.color = 'black'; // this keeps the hover color
				
			}
			
	}
		   
	function showWedding() {
			  var stats =  document.getElementById("WeddingSec").style.display;
			//alert(stats);
			
			if (stats == "block"){  
				
				document.getElementById("WeddingSec").style.display = "block";
				document.getElementById("SeasonalSec").style.display = "none";
				document.getElementById("PartySec").style.display = "none";
				document.getElementById("WeddingSlider").style.backgroundColor = '#848484'; // this keeps the hover color  
				
				document.getElementById("WeddingSlider").style.backgroundColor = '#352E2E'; // this keeps the hover color
				document.getElementById("WeddingSlider").style.color = 'white'; // this keeps the hover color
				document.getElementById("PartySlider").style.backgroundColor = 'white'; // this keeps the hover color
				document.getElementById("PartySlider").style.color = 'black'; // this keeps the hover color
				document.getElementById("SeasonalSlider").style.backgroundColor = 'white'; // this keeps the hover color
				document.getElementById("SeasonalSlider").style.color = 'black'; // this keeps the hover color
			} 
			else if (stats="none"){
				
				document.getElementById("WeddingSec").style.display = "block";
				document.getElementById("SeasonalSec").style.display = "none";
				document.getElementById("PartySec").style.display = "none";

				document.getElementById("WeddingSlider").style.backgroundColor = '#352E2E'; // this keeps the hover color
				document.getElementById("WeddingSlider").style.color = 'white'; // this keeps the hover color
				document.getElementById("PartySlider").style.backgroundColor = 'white'; // this keeps the hover color
				document.getElementById("PartySlider").style.color = 'black'; // this keeps the hover color
				document.getElementById("SeasonalSlider").style.backgroundColor = 'white'; // this keeps the hover color
				document.getElementById("SeasonalSlider").style.color = 'black'; // this keeps the hover color		
			} 
           }
	function showSeason() {
              var stats =  document.getElementById("SeasonalSec").style.display;
			//alert(stats);
			
			if (stats == "block"){  
				
				document.getElementById("SeasonalSec").style.display = "block";
				document.getElementById("WeddingSec").style.display = "none";
				document.getElementById("PartySec").style.display = "none";
				
				document.getElementById("SeasonalSlider").style.backgroundColor = '#352E2E'; // this keeps the hover color
				document.getElementById("SeasonalSlider").style.color = 'white'; // this keeps the hover color
				document.getElementById("PartySlider").style.backgroundColor = 'white'; // this keeps the hover color
				document.getElementById("PartySlider").style.color = 'black'; // this keeps the hover color
				document.getElementById("WeddingSlider").style.backgroundColor = 'white'; // this keeps the hover color
				document.getElementById("WeddingSlider").style.color = 'black'; // this keeps the hover color
			} 
			else if (stats="none"){
				
				document.getElementById("SeasonalSec").style.display = "block";
				document.getElementById("WeddingSec").style.display = "none";
				document.getElementById("PartySec").style.display = "none";
				
				document.getElementById("SeasonalSlider").style.backgroundColor = '#352E2E'; // this keeps the hover color
				document.getElementById("SeasonalSlider").style.color = 'white'; // this keeps the hover color
				document.getElementById("PartySlider").style.backgroundColor = 'white'; // this keeps the hover color
				document.getElementById("PartySlider").style.color = 'black'; // this keeps the hover color
				document.getElementById("WeddingSlider").style.backgroundColor = 'white'; // this keeps the hover color
				document.getElementById("WeddingSlider").style.color = 'black'; // this keeps the hover color
				
			} 
           }

	
	/*
	function showParty(){
		alert("HI");
		var stats =  document.getElementById("PartySec").style.display;
		alert(stats);
			if (stats == "none"){  
				document.getElementById("PartySec").style.display = "inline-block";
				document.getElementById("SeasonalSec").style.display = "none";
				document.getElementById("WeddingSec").style.display = "none";
			//} 
			//else{
			
			//}
			stats = ocument.getElementById("PartySec").style.display;
			alert(stats);
			
	}

	function showWedding(){
		var stats =  document.getElementById("WeddingSec").style.display;
		alert(stats);
			if (stats == "none"){  
				document.getElementById("WeddingSec").style.display = "inline-block";
				document.getElementById("SeasonalSec").style.display = "none";
				document.getElementById("PartySec").style.display = "none";
			} 
			else{
			
			}
			stats = ocument.getElementById("WeddingSec").style.display;
			alert(stats);
	}

	function showSeason(){
		var stats =  document.getElementById("SeasonalSec").style.display;
		alert(stats);
			if (stats == "none"){  
				document.getElementById("SeasonalSec").style.display = "inline-block";
				document.getElementById("WeddingSec").style.display = "none";
			document.getElementById("PartySec").style.display = "none";
			} 
			else{
			
			}
			stats = ocument.getElementById("SeasonalSec").style.display;
			alert(stats);
	}
	*/

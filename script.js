     
		

		var add = document.getElementById('add').onclick = function(){

		       var wert1 = document.getElementById('wert1').value;
			   var wert2 = document.getElementById('wert2').value;  

		    	var result = parseFloat(wert1) + parseFloat(wert2);

		    	document.getElementById('result1').value = result;     
		}

		var sub =  document.getElementById('sub').onclick = function(){

			       var wert1 = document.getElementById('wert3').value;
				   var wert2 = document.getElementById('wert4').value;  

			    	var result = parseFloat(wert1) - parseFloat(wert2);

			    	document.getElementById('result2').value = result;    
			}

		var mult =  document.getElementById('mult').onclick = function(){

			       var wert1 = document.getElementById('wert5').value;
				   var wert2 = document.getElementById('wert6').value;  

			    	var result = parseFloat(wert1) * parseFloat(wert2);

			    	document.getElementById('result3').value = result;    
			}

		var div =   document.getElementById('div').onclick = function(){

			       var wert1 = document.getElementById('wert7').value;
				   var wert2 = document.getElementById('wert8').value;  

			    	var result = parseFloat(wert1) / parseFloat(wert2);

			    	document.getElementById('result4').value = result;    
			}

		
	

	    function isprime(){
	    	var	num = document.getElementById("nr").value;

	   		if(num == '' || num < 1) {
				document.getElementById("result").innerHTML = "Bitte geben Sie eine gültige Zahl an!";
				return;
				
			}
			else
			{

				var primArray = [];

	    	for(var n = 1; n <= num; n++){

			var isPrimNum =checkIfPrime(n);

	    		if(isPrimNum){
	    			primArray.push(isPrimNum);
	    		}

	    		
	    		
	    			document.getElementById("result").innerHTML ="Die Primzahlen zwichen 1 und " + num + " sind : &#40; " + primArray + " &#41;";
	    			
	    
	    	
	    	}
	    		}	
	    }

	   function checkIfPrime(n) {
			var num = n;
			var i;
			var flag = true;

				if (num == 1) {

					flag = false;

				} else{
						for(i = 2; i < num-1; i++) {
							if (num % i == 0) {
							flag = false;
							break;
							}
						 }
					}

				if(flag == true) {
					document.getElementById("result").innerHTML = "Die Zahl: " + num + " ist eine Primzahl!";
					return num;
				} else {
					flag = false;
				}
			
		}


			var zero = document.getElementById('zero').onclick = function(){
				document.getElementById("resultcul").value += 0;
			}
			var one = document.getElementById('one').onclick = function(){
				document.getElementById("resultcul").value += 1
			}
			var tow = document.getElementById('two').onclick = function(){
				document.getElementById("resultcul").value += 2;
			}
			var three = document.getElementById('three').onclick = function(){
				document.getElementById("resultcul").value += 3;
			}
			var four = document.getElementById('four').onclick = function(){
				document.getElementById("resultcul").value += 4;
			}
			var five= document.getElementById('five').onclick = function(){
				document.getElementById("resultcul").value += 5;
			}
			var six = document.getElementById('six').onclick = function(){
				document.getElementById("resultcul").value += 6;
			}
			var seven = document.getElementById('seven').onclick = function(){
				document.getElementById("resultcul").value += 7;
			}
			var eight= document.getElementById('eight').onclick = function(){
				document.getElementById("resultcul").value += 8;
			}
			var nine= document.getElementById('nine').onclick = function(){
				document.getElementById("resultcul").value += 9;
			}
			
			var add1= document.getElementById('add1').onclick = function(){
				var opp = " +" ;
				var firstnr = paseInt(document.getElementById("resultcul").value) + opp;
			}

			var sub1= document.getElementById('sub1').onclick = function(){
				var opp = " -" ;
				var firstnr = paseInt(document.getElementById("resultcul").value) + opp;
			}

			var mul1= document.getElementById('mul1').onclick = function(){
				var opp = "* " ;
				var firstnr = paseInt(document.getElementById("resultcul").value) + opp;
			}

			var div1= document.getElementById('div1').onclick = function(){
				var opp = " /" ;
				var firstnr = paseInt(document.getElementById("resultcul").value) + opp;
			}



			var equal= document.getElementById('equal').onclick = function(){

				var secnr = paseInt(document.getElementById("resultcul").value);

				if(opp == "+"){
					result = firstnr + secnr;
				}else if(opp == "-"){
					result = firstnr + secnr;
				}else if(opp == "*"){
					result = firstnr + secnr;
				}else if(opp == "/"){
					result = firstnr + secnr;
				}

				document.getElementById("resultcul").value = result;
			}
 

	        var clr = document.getElementById('clr').onclick = function(){
	        	document.getElementById("resultcul").value = "";
	        }
	
	    		
	    		

	    		
	    		
	    	
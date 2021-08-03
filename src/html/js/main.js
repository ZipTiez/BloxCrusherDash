let Tab = {
	activeButton: $("#overview"),
	activeFrame: $("#overview_frame")
};

$('.tab').on('click', function(){
	
	let e = $("#"+this.id);

	if(!e.hasClass("active")){
	
		if(Tab.activeButton != undefined){
			if(Tab.activeButton.hasClass("active")){
				Tab.activeButton.removeClass("active");
			}
		}
		
		let newFrame = $("#"+this.id+"_frame");
				
		newFrame.css("left", "96px");	
		newFrame.css("right", "9px");
		newFrame.css("opacity", "1");
		
		if(e.hasClass("active")){
			e.removeClass("active");
		}
		else{
			e.addClass("active");
		}
		
		Tab.activeFrame.css("left", "1000px");	
		Tab.activeFrame.css("right", "-1000px");
		Tab.activeFrame.css("opacity", "0");

		Tab.activeButton = e;
		Tab.activeFrame = newFrame;
	
	}
	
});

let Values = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function UpdateChartData(se){
			
		if(se !== Values[Values.length - 1] && se > 0){
			
			chart.updateSeries([{
				data: Values
			}])
			
			chart.updateOptions({
			  xaxis: {
				categories: Values,
				labels: {
				  show: true
				}
			  },
			});

			setTimeout(function(){

				chart.updateOptions({
					  xaxis: {
						categories: Values,
						labels: {
						  show: true
						}
					  },
					});
			},1000);

			Values.shift();
			Values.push(se);
		
		}
	
}
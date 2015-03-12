

$( document ).ready(function() {
      


//var interval = self.setInterval(function(){

	

	var links = ['google','google','facebook','facebook','twitter','twitter','linkedin','linkedin','linkedin'];

  
    var time = 1000;

	$.each(links,function(index)
	{
	
		setTimeout(function() {			
         
    	$('.product-carousel').css('-webkit-transform','translateY(' + index*(-288) + 'px)'); 
    	$('.link').attr("href", "http://www."+ links[index]+".com")
		}, time);
         
         //if(index%2==0)
         	//time+=1500;
         //else
		time += 1000;
		
	});

	

//},1000);


});
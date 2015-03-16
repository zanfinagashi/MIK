

$( document ).ready(function() {

	
	var pos = [0,-282.593,-565.186,-847.779,-1130.372,-1412.965,-1695.558,-1978.151,-2260.744];
	var links = ['google','google','facebook','facebook','twitter','twitter','linkedin','linkedin','google'];

  
    var time = 500;

	$.each(pos,function(index)
	{
	
		setTimeout(function() {			
         
    	$('.product-carousel').css('-webkit-transform','translateY(' + pos[index] + 'px)'); 
    	$('.link').attr("href", "http://www."+ links[index]+".com")
		}, time);
         
         //if(index%2==0)
         	//time+=1500;
         //else
		time += 500;
		
	});

	
      
});



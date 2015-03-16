
  var waypoint = new Waypoint({
  element: document.getElementById('bg-div-id'),
  handler: function() {

    $("#bg-div-id").css({

      position: "fixed",
    	top: "0px",   

    });
 


    var lastScrollTop = 0, delta = 5, i=0;
    $(window).scroll(function(event){

       var st = $(this).scrollTop();
       //$("span").text(st);
       if(Math.abs(lastScrollTop - st) <= delta)
          return;
       
       if (st > lastScrollTop){
           // downscroll code
           console.log('scroll down');
           if(i>=0 && i<8)
            i = i + 1;
       } else {
          // upscroll code
          console.log('scroll up');
          if(i>0 && i<=8)
            i = i - 1;

       }

       $('.product-carousel').css('-webkit-transform','translateY(' + i*(-288) + 'px)');
       lastScrollTop = st;
       
       if(i==8)
       {
           $("#bg-div-id").css({

        	   position: "relative",   

   		       });

       }

    });
}
})

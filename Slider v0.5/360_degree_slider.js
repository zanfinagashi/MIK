
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
           if(i>=0 && i<16)
            i = i + 1;
          
            var time=70; 
            var pos=[4,5,6];
           $.each(pos,function(index){
              
                setTimeout(function(){
                        
                        i++;
                        $('.product-carousel').css('-webkit-transform','translateY(' + i*(-236) + 'px)');
                        
                }, time);
                        
                        time+=70;
             
                    });

           //this line will be executed before the each loop
            $('.product-carousel').css('-webkit-transform','translateY(' + (i)*(-236) + 'px)');
                  
       } else {
          // upscroll code
          console.log('scroll up');
          if(i>0 && i<=16)
            i = i - 1;
          console.log(i);
          
       }

       
                              
       lastScrollTop = st; 
       if(i==16)
       {
       }

    });
}
})


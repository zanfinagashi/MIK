
  var waypoint = new Waypoint({
  element: document.getElementById('bg-div-id'),
  handler: function() {

   

    var lastScrollTop = 0, delta = 5, i=0;
    $(window).scroll(function(event){

       var st = $(this).scrollTop();
       //$("span").text(st);
       if(Math.abs(lastScrollTop - st) <= delta)
          return;
       
       if (st > lastScrollTop){
           // downscroll code
           console.log('scroll down');
             if(i==16)
               {
                  i=0;
               }

           if(i>=0 && i<=12)
           {  

              i = i + 1;
            console.log(i );
            var time=70; 
            var pos=[4,5,6];
           $.each(pos,function(){
              
                setTimeout(function(){
                        
                        i++;
                        console.log(i + "in loop plus " +  Math.floor(Date.now() / 1000) );
                        $('.product-carousel').css('-webkit-transform','translateY(' + i*(-236) + 'px)');
                        
                }, time);
                        
                        time+=70;
             
                    });

           //this line will be executed before the each loop
            $('.product-carousel').css('-webkit-transform','translateY(' + (i)*(-236) + 'px)');

           }
            
                  
       } else {
          // upscroll code
          console.log('scroll up');
         if(i==0)
               {
                  i=16;
               }

          if(i>=4 && i<=16)
          {
             i = i - 1;
            console.log(i);
          
          var time=70; 
          var pos=[4,5,6];
           $.each(pos,function(){
              
                setTimeout(function(){
                        
                        i--;
                        console.log(i + "in loop minus");
                        $('.product-carousel').css('-webkit-transform','translateY(' + i*(-236) + 'px)');
                        
                }, time);
                        
                        time+=70;
             
                    });

           //this line will be executed before the each loop
            $('.product-carousel').css('-webkit-transform','translateY(' + (i)*(-236) + 'px)');
          
          }
           
       }

       
                              
       lastScrollTop = st; 
      
    });
}
})

  Date.now = function() { return new Date().getTime(); }
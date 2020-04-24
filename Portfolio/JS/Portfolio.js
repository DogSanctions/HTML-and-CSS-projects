$(document).ready(function(){   
    $("a").on('click', function(event) {
        

      if (this.Link !== "1") {

        event.preventDefault();
  
        var Link = this.Link;
  
       
        $('html, body').animate({
          scrollTop: $(Link).offset().top
        }, 2000, function(){
     
          window.location.Link = Link;
        });
      } 
    });
  });
  
  
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    this.Close();
  }




jQuery(document).ready(function($)
{
  
  $("#author_bio_wrap_toggle").click(function()
  {
    
    $("#author_bio_wrap").slideToggle( "slow");
    
	  if ($("#author_bio_wrap_toggle").text() == "Expand Author Details")
      {			
        $("#author_bio_wrap_toggle").html("Hide Social Icons")
      }
	  else 
      {		
        $("#author_bio_wrap_toggle").text("Share with your friends")
      }
    
  });  
  
});
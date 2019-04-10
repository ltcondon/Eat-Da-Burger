// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    // Select person element's ID 
    var id;
    var newHealth;

    $(".name-button").on("click", function() {
        if (typeof id === 'undefined') {
            $(this).css("background-color", "blue");
        }
        newHealth = $(this).data("newhealth");
        id =  $(this).attr("id")
        console.log(id + " new health: " + newHealth);
    })




    $(".change").on("click", function() {
        
        if (typeof id === 'undefined') {
            return alert("Please select a character first.");
        }

        var changeHealth = {
            id: id,
            alive: newHealth
        };

        $.ajax("/api/people", {
            type: "PUT",
            data: changeHealth
        }).then(function() {
            location.reload();
            console.log("updated health for " + id);
        })


    })





    
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newPerson = {
        name: $("#person").val().trim(),
        alive: 1,
        notAlive: 0,
      };
  
      // Send the POST request.
      $.ajax("/api/people", {
        type: "POST",
        data: newPerson
      }).then(
        function() {
          console.log("created new person");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  

$(document).ready(function() {
    $("#formlogin").validate ({
        rules: {
           password: {
               required: true
           },
           email: {
               required: true,
               email: true
           }
        },
        messages: { 
            password: "Please provide a password",
            email: "Please enter a valid email address"
        },
    });
});
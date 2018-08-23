$(document).ready(function(){

    $("#submit-form").on("click", function(){

        let name = document.querySelector('#name').value;
        let phone = document.querySelector('#phone').value;
        let email = document.querySelector('#email').value;
        let zipcode = document.querySelector('#zipcode').value;
        let city = document.querySelector('#city').value;

        let feedback = document.querySelector('#feedback').value;
                        
        if(name.length == 0){
            feedback = "You must enter your name";

        } else if(phone.length == 0){

            feedback = "You must enter your phone number";

        } else if(email.length == 0){

            feedback = "You must enter your e-mail";

        } else if(zipcode.length == 0){

            feedback = "You must enter zip code";

        } else if(city.length == 0){

            feedback = "You must enter city name";

        }else {


            const base_url = "https://jsonplaceholder.typicode.com/";

            let data = {
                pName: name,
                pPhone: phone,
                pEmail: email,
                pZipcode: zipcode,
                pCity: city
            };

            $.ajax({

                url: base_url,
                data: JSON.stringify(data),
                contentType: 'application/json',
                type: 'POST',
                success: function(result){
                    feedback = "Your request has been received";
                },
                error: function (xhr, status, error) {
                    feedback = "Something went wrong";
                }

            });

            // document.querySelector('#feedback').innerHTML = feedback;

            //temporary answer
            document.querySelector('#feedback').innerHTML = "Your request has been received!";


            $("#name").val("");
            $("#phone").val("");
            $("#email").val("");
            $("#zipcode").val("");
            $("#city").val("");


            return true;

        }

        document.querySelector('#feedback').innerHTML = feedback;
        

    });

});
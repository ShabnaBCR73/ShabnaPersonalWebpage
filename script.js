$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            fname:{
                required:true,
            },
            place:{
                required:true,
            },
            mobile:{
                required:true,
                number:true
            },
            email:{
                required:true,
                email:true
            },
            comments:{
                required:true,
                
            }

        }
        
    })
})



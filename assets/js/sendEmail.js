function sendMail(objectReturnedFromSubmittingForm) {
    emailjs.send("service_abxazg8", "template_mrj0ubk",{
        "from_name":objectReturnedFromSubmittingForm.fullname.value,
        "from_email":objectReturnedFromSubmittingForm.emailaddress.value ,
        "project_request": objectReturnedFromSubmittingForm.projectsummary.value ,
    })
    .then(
        function(response){
            console.log("WORKS",response);
        },
        function(error) {
            console.log("Failed",error);
        },
    )
}
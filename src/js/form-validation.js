// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
				else
				{
					event.preventDefault()
					event.stopPropagation()
					submitForm();					
				}

                form.classList.add('was-validated')
            }, false)
        })
})()

function submitForm(){
  // Initiate Variables With Form Content
  var name = $("#inputName").val();
  var email = $("#inputEmail").val();
  var tel = $("#inputTel").val();
  var subject =$('#inputSub').val();
  var message = $("#inputMessage").val();

  console.log(name+" "+ email+" "+message+ " "+ subject)
  $.ajax({
      type: "POST",
      url: "post.php",
      data: "name=" + name + "&email=" + email + "&message=" + message+"&subject="+ subject + "&tel=" + tel,
      success : function(text){
          if (text == "success"){
              formSuccess();
          }
      }
  });
}
function formSuccess(){
  document.getElementById("msgSubmit").style.display = 'block';
  document.getElementById("contactForm").style.display = 'none';
}
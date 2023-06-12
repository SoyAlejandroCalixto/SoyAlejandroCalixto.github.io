let emailregex = /\w+\@\w+\.\w+/;

let main = document.getElementById("main");
let submitbutton = document.getElementById("cont_submitbutton");
submitbutton.addEventListener("click", submitbutton_click);

let errormsg = document.createElement("p");
errormsg.textContent = "Error. Comprueba lo que has escrito.";
errormsg.className = "cont_errormsg";

function submitbutton_click(e)
{
    if(emailregex.test(document.getElementById("emailinput").value)
    && document.getElementById("nameinput").value.length > 0
    && document.getElementById("msginput").value.length > 0)
    {
        if(main.lastChild.className != "cont_registeredmsg")
        {
            errormsg.remove();
            let registereddiv = document.createElement("div");
            registereddiv.className = "cont_registeredmsg";
            main.appendChild(registereddiv);
            
            let rd_topP = document.createElement("p");
            rd_topP.textContent = "Enviado";
            rd_topP.className = "cont_rm_top_p";
            registereddiv.appendChild(rd_topP);
            
            let checkimage = document.createElement("img");
            checkimage.src = "generalimages/check.png";
            registereddiv.appendChild(checkimage);
            
            let rd_bottomP = document.createElement("p");
            rd_bottomP.textContent = "Pronto recibirás respuesta.";
            rd_bottomP.className = "cont_rm_bottom_p";
            registereddiv.appendChild(rd_bottomP);
            setTimeout((function(){registereddiv.remove()}), 4800);
        }
    }
    else
    {
        main.appendChild(errormsg);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('ContactForm');
    var submitButton = document.getElementById('cont_submitbutton');

    submitButton.addEventListener('click', function(event) {

        if(emailregex.test(document.getElementById("emailinput").value)
        && document.getElementById("nameinput").value.length > 0
        && document.getElementById("msginput").value.length > 0)
        {
            if(main.lastChild.className != "cont_registeredmsg")
            {
                event.preventDefault(); // Evita que el formulario se envíe de forma convencional

                var nombre = document.getElementById('nameinput').value;
                var email = document.getElementById('emailinput').value;
                var mensaje = document.getElementById('msginput').value;
          
                var formData = new FormData();
                formData.append('name', nombre);
                formData.append('email', email);
                formData.append('message', mensaje);
          
                fetch('enviar_formulario.php', {
                  method: 'POST',
                  body: formData
                })
                .then(function(response) {
                  if (response.ok) {
                    // Realizar cualquier acción adicional después del envío exitoso
                    console.log('El formulario se ha enviado correctamente');
                    // Aquí puedes agregar tu animación en JavaScript después del envío del formulario
                  } else {
                    // Manejar cualquier error ocurrido durante el envío del formulario
                    console.error('Error al enviar el formulario:', response.status);
                  }
                })
                .catch(function(error) {
                  console.error('Error al enviar el formulario:', error);
                });

                errormsg.remove();
                let registereddiv = document.createElement("div");
                registereddiv.className = "cont_registeredmsg";
                main.appendChild(registereddiv);
                
                let rd_topP = document.createElement("p");
                rd_topP.textContent = "Enviado";
                rd_topP.className = "cont_rm_top_p";
                registereddiv.appendChild(rd_topP);
                
                let checkimage = document.createElement("img");
                checkimage.src = "generalimages/check.png";
                registereddiv.appendChild(checkimage);
                
                let rd_bottomP = document.createElement("p");
                rd_bottomP.textContent = "Pronto recibirás respuesta.";
                rd_bottomP.className = "cont_rm_bottom_p";
                registereddiv.appendChild(rd_bottomP);
                setTimeout((function(){registereddiv.remove()}), 4800);
            }
        }
        else
        {
            main.appendChild(errormsg);
        }
    });
  });
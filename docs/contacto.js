let emailregex = /\w+\@\w+\.\w+/;

let main = document.getElementById("main");
let submitbutton = document.getElementById("cont_submitbutton");
submitbutton.addEventListener("click", submitbutton_click);

let errormsg = document.createElement("p");
errormsg.textContent = "Error. Comprueba lo que has escrito.";
errormsg.className = "cont_errormsg";

let ContactForm = document.getElementById("ContactForm");

function submitbutton_click(e)
{
    if(emailregex.test(document.getElementById("emailinput").value)
    && document.getElementById("nameinput").value.length > 0
    && document.getElementById("msginput").value.length > 0)
    {
        if(main.lastChild.className != "cont_registeredmsg")
        {
            ContactForm.submit();
        }
    }
    else
    {
        main.appendChild(errormsg);
    }
}
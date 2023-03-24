const request = new XMLHttpRequest();
alert(a);
request.addEventListener("load", ()=>{
    if(request.status == 200)
    {
        alert("¡Todo ha salido bien!");
    }
    else
    {
        alert("Algo ha salido mal.");
    }
})

request.open("GET", "formdata.txt");
request.send();

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
            document.getElementById("ContactForm").submit();
        }
    }
    else
    {
        main.appendChild(errormsg);
    }
}
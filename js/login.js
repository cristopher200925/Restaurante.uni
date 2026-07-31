function ValidarInformacion() {
    let tipo_documento = document.getElementById("tipo_documento").value;
    let numero_documento = document.getElementById("numero_documento").value;
    let contraseña = document.getElementById("contraseña").value;

    if (!tipo_documento || !numero_documento || !contraseña) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos Incompletos",
            showConfirmButton: false,
            timer: 1500
        });
    }
    else {
        console.log(
            `Informacion del Usuario: \n
            ${tipo_documento} \n
            ${numero_documento} \n
            ${contraseña}`
        );
        if (!/^[a-zA-Z]+$/.test(tipo_documento)) {
            console.log("Tipo de documento debe contener solo letras")
            Swal.fire({
                title: "Tipo de documento debe contener solo letras",
                icon: "error"
            });
            return;
        }
        if (!/^\d+$/.test(numero_documento)) {
            console.log("Numero de documento debe contener solo números")
            Swal.fire({
                 title: "Numero de documento debe contener solo números",
                icon: "error"
            });
            return;
        }   
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(contraseña)) {
            console.log("Contraseña no cumple con los requisitos de seguridad")
            Swal.fire({
                title: "Contraseña no cumple con los requisitos de seguridad",
                icon: "error"
            });
            return;
        }
        
            Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Inicio de sesión exitoso",
            showConfirmButton: false,
            timer: 1500
        });
    }
}

document.getElementById("btnGuardar").onclick = ValidarInformacion;

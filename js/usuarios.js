function ValidarInformacion () {
    let nombre = document.getElementById("nombre_usuario").value;
    let Apellido = document.getElementById("apellido_usuario").value;
    let Tipo_documento = document.getElementById("tipo_documento").value;
    let Numero_documento = document.getElementById("numero_documento").value;
    let Telefono = document.getElementById("telefono").value;
    let Correo_electronico = document.getElementById("correo_electronico").value;
    let Genero = document.getElementById("genero").value;
    let Cargo = document.getElementById("cargo").value;
    let Fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    let Contraseña = document.getElementById("contraseña").value;

   if (!nombre || !Apellido || !Tipo_documento || !Numero_documento || !Telefono || !Correo_electronico || !Genero || !Cargo || !Fecha_nacimiento || !Contraseña) {
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
            ${nombre} \n
            ${Apellido} \n
            ${Tipo_documento} \n
            ${Numero_documento} \n
            ${Telefono} \n
            ${Correo_electronico} \n
            ${Genero} \n
            ${Cargo} \n
            ${Fecha_nacimiento} \n
            ${Contraseña}`
        );
        if (!/^[a-zA-Z]+$/.test(nombre)) {
            console.log("Nombre debe contener solo letras")
            Swal.fire({
                title: "Nombre debe contener solo letras",
                icon: "error"
            });
            return;
        }
        if (!/^[a-zA-Z]+$/.test(Apellido)) {
            console.log("Apellido debe contener solo letras")
            Swal.fire({
                title: "Apellido debe contener solo letras",
                icon: "error"
            });
            return;
        }   
        if (!/^[a-zA-Z]+$/.test(Tipo_documento)) {
            console.log("Tipo de documento debe contener solo letras")
            Swal.fire({
                title: "Tipo de documento debe contener solo letras",
                icon: "error"
            });
            return;
        }
        if (!/^\d+$/.test(Numero_documento)) {
            console.log("Numero de documento debe contener solo números")
            Swal.fire({
                 title: "Numero de documento debe contener solo números",
                icon: "error"
            });
            return;
        }
        if (!/^\+?\d{1,3}[\s-]?\d{6,10}$/.test(Telefono)) {
            console.log("Telefono debe contener solo números y puede incluir un prefijo internacional")
            Swal.fire({
                title: "Telefono debe contener solo números y puede incluir un prefijo internacional",
                icon: "error"
            });
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Correo_electronico)) {
            console.log("Correo electrónico no es válido")
            Swal.fire({
                title: "Correo electrónico no es válido",
                icon: "error"
            });
            return;
        }
        if (!/^[a-zA-Z]+$/.test(Genero)) {
            console.log("Genero debe contener solo letras")
            Swal.fire({
                title: "Genero debe contener solo letras",
                icon: "error"
            });
            return;
        }
        if (!/^[a-zA-Z]+$/.test(Cargo)) {
            console.log("Cargo debe contener solo letras")
            Swal.fire({
                title: "Cargo debe contener solo letras",
                icon: "error"
            });
            return;
        }
        if (!/^\d{4}-\d{2}-\d{2}$/.test(Fecha_nacimiento)) {
            console.log("Fecha de nacimiento debe tener el formato yyyy-mm-dd")
            Swal.fire({
                title: "Fecha de nacimiento debe tener el formato yyyy-mm-dd",
                icon: "error"
            });
            return;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(Contraseña)) {
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
            title: "Usuario registrado exitosamente",
            showConfirmButton: false,
            timer: 1500
        });
    }
}

document.getElementById("btnGuardar").onclick = ValidarInformacion;
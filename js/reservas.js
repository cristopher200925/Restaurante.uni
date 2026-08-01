function ValidarInformacion() {
    let Tipo_mesa = document.getElementById("tipo_mesa").value;
    let Nombre_completo = document.getElementById("nombre_usuario").value;
    let fecha_reserva = document.getElementById("fecha_reserva").value;
    let cantidad_personas = document.getElementById("cantidad_personas").value;

    if (!Tipo_mesa || !Nombre_completo || !fecha_reserva || !cantidad_personas) {
        Swal.fire({
            icon: "error",
            title: "Campos Incompletos",
            showConfirmButton: false,
            timer: 1500
        });
    }
    else {
        console.log(
            `Informacion de la Reserva: \n
            ${Tipo_mesa} \n
            ${Nombre_completo} \n
            ${fecha_reserva} \n
            ${cantidad_personas}`
        );

        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(Nombre_completo)) {
            console.log("Nombre completo debe contener solo letras")
            Swal.fire({
                title: "Nombre completo debe contener solo letras",
                icon: "error"
            });
            return;
        }
        if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha_reserva)) {
            console.log("Fecha de reserva debe tener el formato yyyy-mm-dd")
            Swal.fire({
                title: "Fecha de reserva debe tener el formato yyyy-mm-dd",
                icon: "error"
            });
            return;
        }
        if (!/^\d+$/.test(cantidad_personas)) {
            console.log("Cantidad de personas debe contener solo números")
            Swal.fire({
                title: "Cantidad de personas debe contener solo números",
                icon: "error"
            });
            return;
        }

        Swal.fire({
            icon: "success",
            title: "Reserva realizada exitosamente",
            showConfirmButton: false,
            timer: 1500
        });
    }
}

document.getElementById("btnGuardar").onclick = ValidarInformacion;  
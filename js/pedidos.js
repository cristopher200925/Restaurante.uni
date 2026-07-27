function validarInformacion () {
    let Producto = document.getElementById("producto").value;
    let Direccion = document.getElementById("direccion").value;
    let Nombre_usuario = document.getElementById("nombre_usuario").value;
    let Cantidad = document.getElementById("cantidad").value;
    let Metodo_pago = document.getElementById("metodo_pago").value;
    let telefono = document.getElementById("telefono").value;

    if (!Producto || !Direccion || !Nombre_usuario || !Cantidad || !Metodo_pago || !telefono) {
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
            `Informacion del Pedido: \n
            ${Producto} \n
            ${Direccion} \n
            ${Nombre_usuario} \n
            ${Cantidad} \n
            ${Metodo_pago} \n
            ${telefono}`
        );
        if (!/^[a-zA-Z]+$/.test(Producto)) {
            console.log("Producto debe contener solo letras")
            Swal.fire({
                title: "Producto debe contener solo letras",
                icon: "error"
            });
            return;
        }
        if (!/^[a-zA-Z]+$/.test(Nombre_usuario)) {
            console.log("Nombre de usuario debe contener solo letras")
            Swal.fire({
                title: "Nombre de usuario debe contener solo letras",
                icon: "error"
            });
            return;
        }
        if (!/^\d+$/.test(Cantidad)) {
            console.log("Cantidad debe contener solo números")
            Swal.fire({
                title: "Cantidad debe contener solo números",
                icon: "error"
            });
            return;
        }
        if (!/^[a-zA-Z]+$/.test(Metodo_pago)) {
            console.log("Metodo de pago debe contener solo letras")
            Swal.fire({
                title: "Metodo de pago debe contener solo letras",
                icon: "error"
            });
            return;
        }
       
        if (!/^\+?\d{1,3}[\s-]?\d{6,10}$/.test(telefono)) {
            console.log("Telefono debe contener solo números y tener entre 6 a 10dígitos")
            Swal.fire({
                 title: "Telefono debe contener solo números y tener entre 6 a 10 dígitos",
                icon: "error"
            });
            return;
    }

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Pedido realizado exitosamente",
        showConfirmButton: false,
        timer: 1500
    });
    }
}

document.getElementById("btnGuardar").onclick = validarInformacion;
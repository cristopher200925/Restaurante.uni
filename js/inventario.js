function ValidarInformacion() {
    let categoria = document.getElementById("categoria").value;
    let codigo_prodt = document.getElementById("codigo_producto").value;
    let nombre_prodt = document.getElementById("nombre_producto").value;
    let descripcion_prodt = document.getElementById("descripcion_producto").value;
    let cantidad_prodt = document.getElementById("cantidad_productos").value;
    let precio_unitario = document.getElementById("precio_unitario").value;
    let provedor = document.getElementById("provedor").value;

    if (!categoria || !codigo_prodt || !nombre_prodt || !descripcion_prodt || !cantidad_prodt || !precio_unitario || !provedor) {
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
            `Informacion del Producto: \n
            ${categoria} \n
            ${codigo_prodt} \n
            ${nombre_prodt} \n
            ${descripcion_prodt} \n
            ${cantidad_prodt} \n
            ${precio_unitario} \n
            ${provedor}`
        );
        if (!/^[a-zA-Z]+$/.test(categoria)) {
            console.log("Categoria debe contener solo letras")
            Swal.fire({
                title: "Categoria debe contener solo letras",
                icon: "error"
            });
            return;
        }
        if (!/^\d+$/.test(codigo_prodt)) {
            console.log("Codigo del producto debe contener solo números")
            Swal.fire({
                 title: "Codigo del producto debe contener solo números",
                icon: "error"
            });
            return;
        }
        if (!/^[a-zA-Z]+$/.test(nombre_prodt)) {
            console.log("Nombre del producto debe contener solo letras")
            Swal.fire({
                title: "Nombre del producto debe contener solo letras",
                icon: "error"
            });
            return;
        }
        if (!/^[a-zA-Z]+$/.test(descripcion_prodt)) {
            console.log("Descripcion del producto debe contener solo letras")
            Swal.fire({
                title: "Descripcion del producto debe contener solo letras",
                icon: "error"
            });
            return;
        }
        if (!/^\d+$/.test(cantidad_prodt)) {
            console.log("Cantidad del producto debe contener solo números")
            Swal.fire({
                 title: "Cantidad del producto debe contener solo números",
                icon: "error"
            });
            return;
        }
        if (!/^\d+(\.\d{1,2})?$/.test(precio_unitario)) {
            console.log("Precio unitario debe ser un número válido con hasta dos decimales")
            Swal.fire({
                title: "Precio unitario debe ser un número válido con hasta dos decimales",
                icon: "error"
            });
            return;
        }
        if (!/^[a-zA-Z]+$/.test(provedor)) {
            console.log("Provedor debe contener solo letras")
            Swal.fire({
                title: "Provedor debe contener solo letras",
                icon: "error"
            });
            return;
        }

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Informacion Guardada Correctamente",
            showConfirmButton: false,
            timer: 1500
        });
    }
}

document.getElementById("btnGuardar").onclick = ValidarInformacion;

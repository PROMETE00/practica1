                window.alert("entro funcion");
                console.log("Mensaje recibido del worker");
                alert("Número de control no válido");
                function validarFormulario() {
                
                // Obtener los valores de los campos
                var numeroControl = document.getElementById("numeroControl").value;
                var nombres = document.getElementById("nombres").value;
                var apellido1 = document.getElementById("apellido1").value;
                var apellido2 = document.getElementById("apellido2").value;
                var curp = document.getElementById("curp").value;
                var nss = document.getElementById("nss").value;
                var correo = document.getElementById("correo").value;
                var rfc = document.getElementById("rfc").value;
                var fechaInicio = document.getElementById("fechaInicio").value;
                var fechaFin = document.getElementById("fechaFin").value;
    
                // Expresiones regulares

                var LetrasMayusculas = /^[A-ZÑÁÉÍÓÚÜ\s]+$/;
                var NumeroControl = /^[0-9]{8}$/;
                var Curp = /^[A-Z]{4}[0-9]{6}[HM]{1}[A-Z]{5}[0-9]{2}$/;
                var Correo = /^[0-9]{8}+@itoaxaca\.edu\.mx$/;
                var NSS = /^[0-9]{11}$/;
                var RFC = /^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$/;
                var Fecha = /^\d{2}-\d{2}-\d{4}$/;
    
                // Validaciones
                if (!NumeroControl.test(numeroControl)) {
                    alert("Número de control no válido");
                    return false;
                }
                if (!LetrasMayusculas.test(nombres) || !LetrasMayusculas.test(apellido1) || !LetrasMayusculas.test(apellido2)) {
                    alert("Nombre(s) y apellidos deben contener solo letras mayúsculas");
                    return false;
                }
                if (!Curp.test(curp)) {
                    alert("CURP no válido");
                    return false;
                }
                if (!NSS.test(nss)) {
                    alert("NSS no válido");
                    return false;
                }
                if (!Correo.test(correo)) {
                    alert("Correo institucional no válido");
                    return false;
                }
                if (!RFC.test(rfc)) {
                    alert("RFC no válido");
                    return false;
                }
                if (!Fecha.test(fechaInicio)) {
                    alert("Fecha de inicio no válido");
                    return false;
                }
                if (!Fecha.test(fechaFin)) {
                    alert("Fecha de Fin no válido");
                    return false;
                }
                alert("Formulario válido, se puede enviar.");
                return true;
            }    
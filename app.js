// Declaracion de variables

const $mensaje = document.getElementById('textEncriptar');
const $resultado =document.getElementById('textarea2');
const $infoResultado= document.getElementById('mensaje');
const $resultadoVacio =document.getElementById('mensaje_alternativo');
const $image = document.getElementById('muñeco');
const $copy = document.getElementById('copy');


// Eventos 


const mensajeEncriptado = (mensaje,cifrar =true)=>{
    mensaje=`${mensaje}`;
    if(cifrar){
        return mensaje
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    }
    return mensaje
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
};

function $cifrar (cifrar = true){
    const mensaje= $mensaje.value;
    if (mensaje && mensaje.length){
        const encriptado =mensajeEncriptado(mensaje, cifrar);
        setEncriptado(encriptado, cifrar);
    }else{
        swal("¡Atención!", "No existe contenido para encriptar.", "error");
    }
}

function $reiniciar(){
    setEncriptado('');

}


function $cambiarMensaje() {
	let mensaje = $mensaje.value;
   
	$mensaje.value = `${mensaje}`.replace(/[^a-z ]/g, "");

	if (mensaje === "") {
		$resultadoVacio.style.display = "block";
		$infoResultado.style.display = "none";
	} else {
		$resultadoVacio.style.display = "none";
	}
}

function $copiarResultado(){
        const value =$resultado.value;
        if(value && value.length){
            navigator.clipboard.writeText(value);
            swal(
                "mensaje copiado",
                "¡El mensaje ha sido copiado !",
                "success"
            );
        } else{
            swal("¡Atención!", "No existe contenido para copiar.", "warning");

        }
}

function $darkMode(){
    document.body.classList.toggle('dark-mode');
}

const setEncriptado =(encriptado ,cifrar=true)=>{
    $mensaje.value='';
    $resultado.value=encriptado;
    if(encriptado && encriptado.length){
        $infoResultado.textContent=`mensaje ${!cifrar ? 'des':''}encriptado exitosamente`;
        $infoResultado.style.color="#0A3871";
        $resultado.style.display='block';
        $image.style.display='none';
        $copy.style.display='block';

    }else{
        
        $infoResultado.textContent="Ingrese el texto que desea encriptar o desencriptar";
        $infoResultado.style.color="#495057";
        $resultadoVacio.style.display='block'
        $resultado.style.display='none'
        $image.style.display='block'
        $copy.style.display='none'
    }
   
};
interface Alumna {
    nombre: String,
    
}

function registrar() {
    let alumna: Alumna = {
        nombre: document.forms[0]["nombre"].value,
    }
    alert(`hola ${alumna.nombre}`);
    
    const htmlElement: HTMLElement = document.getElementsByName("nombre")[0];
    const htmlInput: HTMLInputElement = htmlElement as HTMLInputElement;
   
    alert(htmlInput.value);

    alert(document.querySelector("input[name='nombre']"));
    
    const formulario = document.querySelector("form[name='myform']")
    const nombre = formulario?.querySelector("input[name='nombre']");
    alert(`formulario: hola ${nombre}`);
}


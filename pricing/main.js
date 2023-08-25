/* console.log("Hola 1");
setTimeout(()=>{ 
    console.log("Hola 2");

},1000);

setInterval(()=>{
    console.log("Hola 3");
},1000)

let obtener = async(p1) =>{
    let peticion = await fetch(`${p1}.json`);
    let res = await peticion.json();
    console.log(res);
}
obtener("config");


(async(p1)=>{
    let peticion = await fetch(`${p1}.json`);
    let res = await peticion.json();
    console.log(res);
})("config")*/

const path ="config";

(async ()=>{
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector("#nav");
    seleccion.insertAdjacentHTML("beforeend",/*html*/`
    <div  class="d-flex flex-column flex-md-row align-items-center justify-content-between  ">
        <a href="" class="d-flex align-items-center link-body-emphasis text-decoration-none">
        <img src=${res.nav.img} width="140px" margin>
        </a>
        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <a class="fs-5 py-2 link-body-emphasis text-decoration-none" href="#">${res.nav.txtLog}</a>
        </nav>
    </div>
    <hr>
    <div  id="section1" class="pricing-header pt-md-2 pb-md-5 mx-2  text-start"></div>
        `)
    }
)(path);

//let construirEncabezado1 = async()=>{
    //let peticion = await fetch(`${path}.json`);
    //let res = await peticion.json();
    ///let seleccion = document.querySelector("#section1");
    //seleccion.insertAdjacentHTML("beforeend",/*html*/` 
        //<h6 class="fs-6 text-body-secondary">${res.seccion1.titulo1}</h6>
        //<h1 class="display-6 fw-normal text-body-emphasis">${res.seccion1.titulo2}</h1>
        //<p class="fs-5 text-body-secondary ">
            //${res.seccion1.parrafo.map((value) =>/*html*/ ` 
                //${value.img} ${value.texto} <br>`).join("")}
          
        //</br></p>`)}

//construirEncabezado1()

(async()=>{
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector("#section1");
        seleccion.insertAdjacentHTML("beforeend",/*html*/` 
            <h6 class="fs-6 text-body-secondary">${res.seccion1.titulo1}</h6>
            <h1 class="display-6 fw-normal text-body-emphasis">${res.seccion1.titulo2}</h1>
            <p class="fs-5 text-body-secondary ">
            ${res.seccion1.parrafo.map((value) =>/*html*/ ` 
                ${value.img} ${value.texto} <br>`).join("")}
            </p>`)}
)(path);

(async()=>{
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector("#tarjetas");
    seleccion.insertAdjacentHTML("beforeend",/*html*/`
        ${res.seccion2.map((value) =>/*html*/ ` 
        <div  class="col">
            <div class="card mb-4 rounded-0  shadow-sm">
                <div class="card-header  rounded-0  bg-transparent-danger py-3 text-bg-danger border-danger">
                    <h4 class="my-0 fw-normal">${value.titulo}</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">${value.precio}<small class="text-body-secondary fw-light">${value.tipoMoneda}</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>
                            ${ value.contenidoTarget.map((cont)=>/*html*/` 
                            ${cont.p1}</li>` ).join("")}
                    </ul>
                    <button type="button" class="w-100 btn btn-lg btn-outline-danger bs-blue">${value.btn}</button>
                </div>
            </div>
        </div>
        `).join(" ")}
    
    `)})(path);

    (async()=>{
        let peticion = await fetch(`${path}.json`);
        let res =  await peticion.json();
        let seleccion = document.querySelector('#tabla');
        seleccion.insertAdjacentHTML("beforeend",/*html*/`
            ${res.seccion3.map((value=>/*html*/` 
            
            `))}
        `)
    }
    )(path)
        
            
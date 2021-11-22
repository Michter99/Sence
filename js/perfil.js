//importamos la app de firebase
import app from "./FireBase.js";
//para agregar data que sería el create en las funciones se necesita collection y addoc
import {
    getFirestore,doc, getDoc,updateDoc
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
var idTutor=localStorage.getItem("textvalue")
const db = getFirestore(app);

const getTask = (idTutor) => getDoc(doc(db, "tutores", idTutor));
const docu =await getTask(idTutor);
const task = docu.data();


const arriba=document.getElementById("arriba");
const arribad=document.getElementById("arribad");
const ai=document.getElementById("ai");
const ad=document.getElementById("ad");
arriba.innerHTML=`
<h1>${task.nombre} ${task.apellidos}</h1>
<br/>
<h2>Estudiante de la carrera ${task.carrera} en la universidad ${task.uni}</h2>
<br/>
<h3>Educación a tu medida con clases personalizadas</h3>
`
ai.innerHTML=`
<h2>Materias ofertadas</h2>
<p>${task.materia}<p>
<h2>Mi experiencia dando asesorías</h2>
<p>${task.exp}</p>

`
ad.innerHTML=`
<h2>Mis intereses</h2>
<p>${task.intereses}</p>
<h2>Estudios</h2>
<p>${task.estudios}</p>
<h2>Contacto</h2>
<p>Correro:${task.correo}<br/>
   Celular:${task.ce}
</p>

`



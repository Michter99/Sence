//importamos la app de firebase
import app from "./FireBase.js";
//para agregar data que sería el create en las funciones se necesita collection y addoc
import {
    getFirestore,doc, getDoc,updateDoc
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
var idTutor="p8rqrKXR7FRWBPvMZZ4m";
const db = getFirestore(app);
const taskForm = document.getElementById("task-form");

//Llamados a tutores
const updateTask = (idTutor, updateTask) =>
  updateDoc(doc(db, "tutores", idTutor), updateTask);
const getTask = (idTutor) => getDoc(doc(db, "tutores", idTutor));
const docu =await getTask(idTutor);
const task = docu.data();
taskForm["task-nombre"].value = task.nombre;
taskForm["task-apellidos"].value = task.apellidos;
taskForm["task-correo"].value = task.correo;
taskForm["task-cel"].value = task.cel;
taskForm["task-uni"].value = task.uni;
taskForm["task-carrera"].value = task.carrera;
taskForm["task-exp"].value = task.exp;
taskForm["task-estudios"].value = task.estudios;
taskForm["task-intereses"].value = task.intereses;
taskForm["task-materia"].value = task.materia;
taskForm["task-link"].value = task.link;
taskForm["task-progreso"].value = task.progreso;

console.log(task.nombre);

taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombre = taskForm["task-nombre"];
    const apellidos = taskForm["task-apellidos"];
    const correo=taskForm["task-correo"];
    const cel=taskForm["task-cel"];
    const uni=taskForm["task-uni"];
    const carrera=taskForm["task-carrera"];
    const exp=taskForm["task-exp"];
    const estudios=taskForm["task-estudios"];
    const intereses=taskForm["task-intereses"];
    const materia=taskForm["task-materia"];
    const link=taskForm["task-link"];
    const progreso=taskForm["task-progreso"];
    await updateTask(idTutor, {
        nombre: nombre.value,
        apellidos: apellidos.value,
        correo:correo.value,
        cel:cel.value,
        uni:uni.value,
        carrera:carrera.value,
        exp:exp.value,
        estudios:estudios.value,
        intereses:intereses.value,
        materia:materia.value,
        link:link.value,
        progreso:progreso.value
      });
     
});
//Perfil
const perfil = document.getElementById("btn-perfil");
perfil.addEventListener("click",() => {

 localStorage.setItem("textvalue",idTutor);

});
//Alumnos
//var idAl="nyXzUlJe4oD7Gu25YuQL";
//Llamado a alumnos
var idAl=task.IDalumno;
const updateTaskAlumnos = (idAl, updateTask) =>
  updateDoc(doc(db, "alumnos", idAl), updateTask);
const getTaskAlumnos = (idAl) => getDoc(doc(db, "alumnos", idAl));
const infoAlumnos = document.getElementById("info-alumnos");//en vez de taskform info-alumnos
if(idAl!="null"){
  const docuA =await getTaskAlumnos(idAl);
  const infoA=docuA.data();
  if(task.link!="null"){
    await updateTaskAlumnos(idAl, {
      link:task.link
    });
  }
  if(infoA.progreso!=task.progreso){
    await updateTaskAlumnos(idAl, {
      progreso:task.progreso
    });
  }
  infoAlumnos.innerHTML=`
  <h4>Nombre:${infoA.nombre}</h4>
  <h4>Apellidos:${infoA.apellidos}</h4>
     <h4>Celular:${infoA.cel}</h4>
     <h4>Correo:${infoA.correo}</h4>
     <h4>Materia:${infoA.materia}</h4>
     <h4>Link de clase:${infoA.link}</h4>
     <h4>Progreso de clases:${infoA.progreso}</h4>
   <p> <small> Si por algún motivo quieres eliminar a algún alumno de tu lista debes ponerte en contacto con el administrador</small>
  </p>
  
  `

}
else{
  infoAlumnos.innerHTML=`
  <p>Ningún alumno se ha inscrito con usted todavía</p>
  `
}

function passvalues(){
  localStorage("textvalue",idTutor);
}
//Llamados a tutores
/*
const updateTask = (idTutor, updateTask) =>
  updateDoc(doc(db, "tutores", idTutor), updateTask);

const docu =await getTask(idTutor);
const task = docu.data();*/
//"https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
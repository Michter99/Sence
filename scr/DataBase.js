import app from "./FireBa.js";

import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js";

const db = getFirestore(app);

const taskForm = document.getElementById("task-form");
const name = document.getElementById("task-name");
const phone = document.getElementById("task-phone");
const correo = document.getElementById("task-correo");
const mensaje = document.getElementById("task-mensaje");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  saveTask(name.value, phone.value, correo.value, mensaje.value);
  taskForm.reset();
});

const saveTask = (name, phone, correo, mensaje) => {
  addDoc(collection(db, "social"), {
    name,
    phone,
    correo,
    mensaje,
  });
};

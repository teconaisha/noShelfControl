// ============================================================
// CONFIGURACIÓN DE FIREBASE — No Shelf Control
// ============================================================
// Sustituye los valores "PEGA_AQUI..." por los de TU NUEVO proyecto de
// Firebase (el de No Shelf Control, NO el de ningún otro club):
//   Firebase Console > Configuración del proyecto (⚙️) > General
//   > Tus apps > Web app > SDK setup and configuration > Config
//
// Esta app no usa Firebase Storage (plan gratuito Spark, sin tarjeta),
// así que "storageBucket" es indiferente.
//
// Instrucciones completas en README.md
// ============================================================
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyB2aQpHX-QWtWLS1EpGLSP2tP0tVkBLCxY",
  authDomain: "no-shelf-control-e48f1.firebaseapp.com",
  projectId: "no-shelf-control-e48f1",
  storageBucket: "no-shelf-control-e48f1.firebasestorage.app",
  messagingSenderId: "915684293024",
  appId: "1:915684293024:web:0e27c2664e8725b17a8cc5"
};

// Initialize Firebase
export const isFirebaseConfigured = !Object.values(firebaseConfig).some((v) =>
  String(v).startsWith("PEGA_AQUI")
);




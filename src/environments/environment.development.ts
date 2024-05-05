
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {
   url_cep : 'https://viacep.com.br/ws/',
};
export const firebaseConfig = {
     apiKey: "AIzaSyCc2y4U-WPKjwBdOXj097999LzfOhy4Nuw",
     authDomain: "ifoodclone-aaea0.firebaseapp.com",
     projectId: "ifoodclone-aaea0",
     storageBucket: "ifoodclone-aaea0.appspot.com",
     messagingSenderId: "270761116575",
     appId: "1:270761116575:web:443c7f81215a05c1a2b3aa",
     measurementId: "G-ZLZMB4PJBV"
   };

   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);

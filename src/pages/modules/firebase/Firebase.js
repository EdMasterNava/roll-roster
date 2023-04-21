import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDXGStdTjTizoWQ5jBDAumGIjyC3zd6pJQ",
    authDomain: "roll-roster-dev.firebaseapp.com",
    projectId: "roll-roster-dev",
    storageBucket: "roll-roster-dev.appspot.com",
    messagingSenderId: "215051033224",
    appId: "1:215051033224:web:9ed686ed4a4fbd48a99d3d"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
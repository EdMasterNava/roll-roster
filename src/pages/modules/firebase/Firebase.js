import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDFrCu9stq36FeS6UdAK8iCk3ZxSZEeC94",
    authDomain: "roll-roster-dev-e7642.firebaseapp.com",
    projectId: "roll-roster-dev-e7642",
    storageBucket: "roll-roster-dev-e7642.appspot.com",
    messagingSenderId: "410849207383",
    appId: "1:410849207383:web:cdf02511c28f20caedaf12"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
import * as React from 'react';
//Importing Firebase Auth functions
import { auth } from './Firebase';
import { 
    signOut,
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword
} from 'firebase/auth';
//Setting up Auth context
const AuthContext = React.createContext();
export function useAuth() {
    return React.useContext(AuthContext);
}
//Setting up Auth functions
export function AuthProvider({ children }) {
    //State to store user
    const [currentUser, setCurrentUser] = React.useState();
    //State to handle async wait times
    const [loading, setLoading] = React.useState(true);
    //Creates a new user
    function join(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //Logs in existing user
    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }
    //Logs out user
    function logout(){
        return signOut(auth);
    }
    //Updates currentUser 
    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);
    //User and Auth functions to be used within the rest of the app
    const value = {
        currentUser,
        join,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}


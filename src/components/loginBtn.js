import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const LoginBtn = ({ user, pass }) => {
    const [commuters, setCommuters] = useState([]);

    useEffect(() => {
        const fetchDataFromFirebase = async () => {
            const db = getDatabase();
            const commutersRef = ref(db, "commuters");

            onValue(commutersRef, (snapshot) => {
                const commutersData = snapshot.val();
                if (commutersData) {
                    const commutersArray = Object.entries(commutersData).map(([key, value]) => ({ id: key, ...value }));
                    setCommuters(commutersArray);
                }
            });
        };

        fetchDataFromFirebase();
    }, []);

    const cta = () => {
        const log = commuters.find(commuter => commuter.email === user && commuter.password === pass);
        if (log) {
            window.location.href = `book/${log.id}`;
            return log.id; 
        }
        return null; 
    };

    return (
        <div>
            <button onClick={cta}>Login</button>
        </div>
    );
};

export default LoginBtn;

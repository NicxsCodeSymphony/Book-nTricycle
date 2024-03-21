import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const FetchData = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchDataFromFirebase = async () => {
            const db = getDatabase();
            const dataRef = ref(db, url);

            onValue(dataRef, (snapshot) => {
                const firebaseData = snapshot.val();
                setData(firebaseData);
            }, {
                onlyOnce: true 
            });
        };

        fetchDataFromFirebase();
    }, [url]);

    return data;
};

export default FetchData;

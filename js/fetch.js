import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"
import { db } from "./app.js"

export async function fetchData(user) {
    const ref = collection(db, "courses")
    const q = query(ref, where("allowedUsers", "array-contains", user.uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
}

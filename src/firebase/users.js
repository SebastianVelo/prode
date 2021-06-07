import { db } from "./firebase";

function saveUser(u) {
    const user = {
        name: u.displayName,
        uuid: u.uid,
    };
    db.collection("users").doc(user.uuid).set(user);
}

export { saveUser };
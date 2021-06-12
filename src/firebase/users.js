import { db } from "./firebase";

function saveUser(u) {
    const user = {
        name: u.displayName,
        nick: u.displayName.split('').reverse().join(''),
        uid: u.uid,
        pts: 0,
    };
    db.collection("users").doc(user.uid).set(user);
}

function getUser(uid) {
    let user = null;
    db.collection("users").doc(uid).get().then((u) => {
        user = u.data();
    });
    return user;
}

export { getUser, saveUser };
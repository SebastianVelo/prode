import { db } from "./firebase";

function getAllTeams() {
    let teams = [];
    db.collection("teams").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((t) => {
            teams.push({ id: t.id, ...t.data() });
        });
    });
    return teams;
}

export { getAllTeams };
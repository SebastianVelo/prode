import { db } from "./firebase";
import { getAllTeams } from "./teams";

function getAllMatches() {
    let matches = [];
    let teams = getAllTeams();
    db.collection("matches").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((m) => {
            let match = {
                ...m.data(),
                id: m.id,
                home: teams.find((t) => t.id === m.data().home),
                away: teams.find((t) => t.id === m.data().away),
            };
            matches.push(match);
        });
    });
    return matches;
}

export { getAllMatches };
import { db } from "./firebase";
import { getAllMatches } from "./matches";

function getAllDates() {
    let dates = [];
    let matches = getAllMatches();
    db.collection("dates").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((d) => {
            let date = {
                ...d.data(),
                id: d.id,
                matches: matches.filter((m) => m.date === d.id),
            };
            dates.push(date);
        });
    });
    return dates;
}

export { getAllDates };
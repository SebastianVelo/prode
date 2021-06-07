import { db } from "./firebase";
import { getAllDates } from "./dates";

 function getAllGroups() {
    let groups = [];
    let dates = getAllDates();
    db.collection("group").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((g) => {
            let group = {
                ...g.data(),
                id: g.id,
                dates: dates.filter((d) => {
                    return d.group === g.id;
                }),
            };
            groups.push(group);
        });
    });
    return groups;
}

export { getAllGroups };
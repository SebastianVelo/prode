import { db } from "./firebase";

function savePrediction(prediction) {
    return db.collection("predictions").doc().set(prediction);
}

export { savePrediction };
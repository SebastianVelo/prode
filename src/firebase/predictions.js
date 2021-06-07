import { db } from "./firebase";

function savePrediction(userId, matchId, prediction) {
    return db.collection(`users`).doc(userId).collection(`predictions`).doc(matchId).set(prediction);
}

function getPrediction(userId, matchId) {
    let prediction;
    db.collection(`users`).doc(userId)
        .collection(`predictions`).doc(matchId).get()
        .then((doc) => {
            prediction = doc.data();
        })
        .catch(() => {
            prediction = null;
        });
    return prediction;
}

export { getPrediction, savePrediction };
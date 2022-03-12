import {DateTime} from "luxon";

let wakeTime = DateTime.now().set({hour: 6, minute: 0, second: 0});
const currentTime = DateTime.now();

export const getCurrentPhase = () => {
    if(getTimeDifference(currentTime, wakeTime).hours > 15 ) {
        return 'Phase 3'
    } else if (getTimeDifference(currentTime, wakeTime).hours > 8) {
        return 'Phase 2'
    }
    else return 'Phase 1';
}

const getTimeDifference = (phase, wakingTime) => {
    return phase.diff(wakingTime, 'hours').toObject();
}
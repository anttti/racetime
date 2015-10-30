const isValid = time => {
    return parseInt(time, 10) > 0;
};

const toString = time => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time - (minutes * 60000)) / 1000);
    const millis = time % 1000;

    const minStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const milStr = millis < 10 ? `00${millis}` : millis < 100 ? `0${millis}` : `${millis}`;

    return `${minStr}:${secStr}.${milStr}`;
};

const fromString = time => {
    if (!isValid(time)) {
        return 0;
    }

    while (time.length < 7) {
        time = "0" + time;
    }

    const minutes = parseInt(time.substr(0,2), 10);
    const seconds = parseInt(time.substr(2,2), 10);
    const millis = parseInt(time.substr(4,3), 10);

    const totalInMs = minutes * 60000 + seconds * 1000 + millis;

    return totalInMs;
};

export default {
    isValid,
    toString,
    fromString
};

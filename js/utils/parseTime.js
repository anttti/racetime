const parseTime = time => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time - (minutes * 60000)) / 1000);
    const millis = time % 1000;

    const minStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const milStr = millis < 10 ? `0${millis}` : `${millis}`;

    return `${minStr}:${secStr}.${milStr}`;
};

export default parseTime;

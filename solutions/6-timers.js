import fs from 'fs';

// BEGIN
const watch = (filepath, time, cb) => {
    let lastCheckTime = Date.now();

    const timerId = setInterval(() => {
        fs.stat(filepath, (_error, stats) => {
            if (_error) {
                clearInterval(timerId);
                cb(_error);
                return;
            }
            let currentMTime = stats.mtimeMs;
            if (currentMTime > lastCheckTime) {
                lastCheckTime = currentMTime;
                cb(null);
            }
        });
    }, time);
    return timerId;
}

export default watch
// END

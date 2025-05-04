import fs from 'fs';

// BEGIN
export const compareFileSizes = (filepath1, filepath2, callback) => {
    fs.stat(filepath1, (_error1, stats1) => {
        let size1 = stats1.size;
        fs.stat(filepath2, (_error2, stats2) => {
            let size2 = stats2.size;
            callback(null, Math.sign(size1-size2));
        });
    });
}
// END
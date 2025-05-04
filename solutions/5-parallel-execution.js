import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export const getDirectorySize = (dirPath, cb) => {
    fs.readdir(dirPath, (_error1, files) => {
        if (_error1) {
            cb(_error1);
            return;
        };
        const fullPath = files.map(file => path.join(dirPath, file));
        async.map(fullPath, (filepath, done) => {
            fs.stat(filepath, (_error2, stats) => {
                if (_error2) {
                    done(null, 0);
                    return;
                }
                done(null, stats.isFile() ? stats.size : 0);
            });
        }, 
        (_error3, results) => {
            if (_error3) {
                cb(_error3);
                return;
            }
            const totalSize = _.sumBy(results);
            cb(null, totalSize);
        });
    });
}
// END

import fs from 'fs';

// BEGIN
export const move = (filepathFrom, filepathTo, cb) => {
    fs.readFile(filepathFrom, 'utf-8', (_error1, data) => {
        if (_error1){
            cb(_error1);
            return;
        };
        fs.writeFile(filepathTo, data, (_error2) => {
            if(_error2){
                cb(_error2);
                return;
            };
            fs.unlink(filepathFrom, (_error3) => {
                if(_error3){
                    cb(_error3);
                    return;
                };
                cb(null)
            });
        });
    });
}
// END

import fs from 'fs';

// BEGIN
const write = (filepath, data, callback) => {
    if (data === ''){
        return;
    }
    fs.writeFile(filepath, data, callback);
}

export default write;
// END
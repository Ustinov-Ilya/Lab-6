import fs from 'fs';

// BEGIN
const print = (filepath) => {
    const callback = (_error, data) => console.log(data);
    fs.readFile(filepath, 'utf-8', callback);
}
export default print
// END

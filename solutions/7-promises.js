import fsp from 'fs/promises';

// BEGIN
export const reverse = (file) => {
    return fsp.readFile(file, 'utf-8')
        .then((lines) => lines.split('\n').reverse().join('\n'))
        .then((lines) => fsp.writeFile(file, lines))
}
// END
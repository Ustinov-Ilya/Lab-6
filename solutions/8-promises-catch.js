import fsp from 'fs/promises';

// BEGIN
export const touch = (filepath) => {
    return fsp.access(filepath, fsp.constants.R_OK | fsp.constants.W_OK)
        .catch(() => {
            fsp.writeFile(filepath, '')
        })
}

// END
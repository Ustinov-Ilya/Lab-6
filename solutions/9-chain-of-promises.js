import fsp from 'fs/promises';
import path from 'path';

// BEGIN
export const getTypes = (listPaths) => {
    return Promise.all(listPaths.map((path) => fsp.stat(path)
            .then((types) => types.isDirectory() ? 'directory' : 'file')
            .catch(() => null)
        )
    );
}
// END
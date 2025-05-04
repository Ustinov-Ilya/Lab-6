import fsp from 'fs/promises';

// BEGIN
export const exchange = async (file1, file2) => {
    const data1 = await fsp.readFile(file1, 'utf-8');
    const data2 = await fsp.readFile(file2, 'utf-8');
    await fsp.writeFile(file1, data2);
    await fsp.writeFile(file2, data1);
}
// END
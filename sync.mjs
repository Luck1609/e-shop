import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productsFolder = path.join(__dirname, './src/assets/products'); // Adjust the path if necessary
const menFolder = path.join(__dirname, './src/assets/products/men'); // Adjust the path if necessary
const womenFolder = path.join(__dirname, './src/assets/products/women'); // Adjust the path if necessary

const outputFile = path.join(__dirname, 'products.json');

function getImagesBySubdirectory(folderPath) {
    const result = {};

    // Read the products folder
    const subdirectories = fs.readdirSync(folderPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory()) // Only get directories
        .map(dirent => dirent.name);

    subdirectories.forEach(subdir => {
        const subdirPath = path.join(folderPath, subdir);
        
        // Read files in the subdirectory
        const files = fs.readdirSync(subdirPath)
            .filter(file => fs.statSync(path.join(subdirPath, file)).isFile()); // Ensure it's a file

        if (files.length > 0) result[(subdir.toLowerCase()).replace(' ', '-')] = files;
    });

    return result;
}

const imagesList = getImagesBySubdirectory(productsFolder);
const men = getImagesBySubdirectory(menFolder);
const women = getImagesBySubdirectory(womenFolder);

const imageCollection = {...imagesList, ...men, ...women}

fs.writeFileSync(outputFile, JSON.stringify(imageCollection, null, 2));

console.log(imageCollection);


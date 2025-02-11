import fs from "fs";
import _ from "lodash";
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



const menCollection = Object.entries(men).reduce((products, [key, values]) => (
    [
        ...products,
        {
            name: _.upperFirst(key),
            category: "Men", // Men, Women, Children, accessories
            price: Number.parseFloat(_.random(5.0, 199.99).toFixed(2)),
            currency: "USD",
            rating: Number.parseInt(_.random(0, 5)),
            isFeatured: Number.parseInt(_.random(0, 1)),
            isPopular: Number.parseInt(_.random(0, 1)),
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit molestiae, totam perspiciatis a unde alias animi expedita asperiores itaque ullam sed vel rerum quisquam eum in sit! Adipisci, dolores nulla",
            images: values,
            slug: _.lowerCase(_.replace(key, " ", "-")),
            swatches: []
        }
    ]
), [])

const womenCollection = Object.entries(women).reduce((products, [key, values]) => (
    [
        ...products,
        {
            name: _.upperFirst(key),
            category: "Women", // Men, Women, Children, accessories
            price: Number.parseFloat(_.random(5.0, 199.99).toFixed(2)),
            currency: "USD",
            rating: Number.parseInt(_.random(0, 5)),
            isFeatured: Number.parseInt(_.random(0, 1)),
            isPopular: Number.parseInt(_.random(0, 1)),
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit molestiae, totam perspiciatis a unde alias animi expedita asperiores itaque ullam sed vel rerum quisquam eum in sit! Adipisci, dolores nulla",
            images: values,
            slug: _.lowerCase(_.replace(key, " ", "-")),
            swatches: []
        }
    ]
), [])

const accessoriesCollection = Object.entries(imagesList).reduce((products, [key, values]) => (
    [
        ...products,
        {
            name: _.upperFirst(key.replace("-", " ")),
            category: "Accessories", // Men, Women, Children, accessories
            price: Number.parseFloat(_.random(5.0, 199.99).toFixed(2)),
            currency: "USD",
            rating: Number.parseInt(_.random(0, 5)),
            isFeatured: Number.parseInt(_.random(0, 1)),
            isPopular: Number.parseInt(_.random(0, 1)),
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit molestiae, totam perspiciatis a unde alias animi expedita asperiores itaque ullam sed vel rerum quisquam eum in sit! Adipisci, dolores nulla",
            images: values,
            slug: _.lowerCase(_.replace(key, " ", "-")),
            swatches: []
        }
    ]
), [])

const imageCollection = [...menCollection, ...womenCollection, ...accessoriesCollection]

fs.writeFileSync(outputFile, JSON.stringify(imageCollection, null, 2));

console.log(imageCollection);


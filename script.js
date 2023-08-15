const fs = require('fs');
const jimp = require('jimp');

// ! To do this Asynchronously 
// fs.readFile('./image1.jpg',
//     {
//         encoding : 'base64',
//     },
//     (err, data) => {
//         if(err) console.log(err);
//         console.log(data);
//     }
// )

//* This is a way of doing this in Synchronous Manner

// Reading the Image
//? Reading Image using File System
let file = fs.readFileSync('./image1.jpg');
console.log(file)

//? Storing the Image in a File
// Converting the read buffer to String
let str = file.toString('base64');  // base64 -> this is an encoding method : helps decode the file in ASCII or String Format
console.log(str);


// writing the String of the Image to a new text document
fs.writeFileSync('image.txt', str);

// Reverse Engineering
// Converting the String back to Buffer
str = fs.readFileSync('./image.txt',
    {
    encoding : 'utf-8',
    },
);
let buffer = Buffer.from(str, 'base64');
console.log(buffer);


//? Restoring Image from the Text File
// Creating a new Image with the Buffer taken out form the previous image
fs.writeFileSync('converted-image1.png', buffer);


//? Reducing the Image Size
// ! npm package -> jimp   { JavaScript Image Manipulation Program }

jimp.read('./image2.jpg', (err, image) => {
    if(err) throw err;
    image
        // .resize(256, 256) // resize
        .quality(60)      // set JPEG quality
        // .greyscale()      // greyscale
        .write('converted-image2.jpeg');   // save
});
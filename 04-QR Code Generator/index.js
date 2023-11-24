import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
    /* Pass your questions in here */
    {
        name: "URL",
        message: "Please enter the URL for QR code generation: "
    }
])
// callback when promise is accepted
.then((answers) => {
    // Use user feedback for... whatever!!
    // access using "name" 
    // console.log(answers.URL);
    // convert user-input to QR image
    var qr_png = qr.image(answers.URL, {type: "png"});
    qr_png.pipe(fs.createWriteStream("qr_code.png"));

    // save user-input
    fs.writeFile("qr_code.txt", answers.URL, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });
})
// callback when promise is rejected
.catch((error) => {
    console.log(error)
  });

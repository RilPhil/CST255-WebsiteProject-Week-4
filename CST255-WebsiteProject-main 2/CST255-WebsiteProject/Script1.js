// JavaScript source code
alert("Welcome to my website! My name is Rileigh, and this site is meant to be a hub for all of my relevant ballet career information, including corrections Ive been focusing on classes, resume materials, and important information pertaining to my career!");

function myFunction() {
    let contactInfo = prompt("Please enter the job you're inquiring for me to fulfill, the estimated pay, dates of work, and contact info below:");

    if (contactInfo !== null && contactInfo.trim() !== "") {
        alert("Thank you for reaching out! Your information has been received.");
        console.log("Inquiry submitted:", contactInfo);
    } 
    
    else {
        alert("Inquiry canceled, left blank.");
    }
}

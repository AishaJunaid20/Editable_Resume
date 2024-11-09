// // Collect input values with null checks and non-null assertion
// const firstNameInput = document.getElementById("first-name") as HTMLInputElement | null;
// const lastNameInput = document.getElementById("last-name") as HTMLInputElement | null;
// const emailInput = document.getElementById("email-address") as HTMLInputElement | null;
var _a;
// const firstName = firstNameInput ? firstNameInput.value : "";
// const lastName = lastNameInput ? lastNameInput.value : "";
// const email = emailInput!.value; // यहाँ हम मान कर चल रहे हैं कि ये null नहीं होगा
// // Populate resume display
// (document.getElementById("name-display") as HTMLElement | null)!.textContent = `${firstName} ${lastName}`;
// (document.getElementById("email-display") as HTMLElement | null)!.textContent = email;
// // Handle profile picture upload
// const profileImageInput = document.getElementById("profile-image") as HTMLInputElement | null;
// const profileImage = profileImageInput?.files?.[0];
// if (profileImage) {
//     const reader = new FileReader();
//     reader.onload = function(event: ProgressEvent<FileReader>) {
//         const outputImage = document.getElementById("output-image") as HTMLImageElement | null;
//         if (outputImage && event.target && event.target.result) {
//             outputImage.src = event.target.result as string;
//             outputImage.style.display = "block";
//         }
//     };
//     reader.readAsDataURL(profileImage);
// }
// // Show the resume output section
// const outputSection = document.getElementById("output-section") as HTMLElement | null;
// if (outputSection) {
//     outputSection.style.display = "block";
// }
// Collect input values with null checks and non-null assertion
var firstNameInput = document.getElementById("first-name");
var lastNameInput = document.getElementById("last-name");
var emailInput = document.getElementById("email-address");
var firstName = firstNameInput ? firstNameInput.value : "";
var lastName = lastNameInput ? lastNameInput.value : "";
var email = emailInput.value; // यहाँ हम मान कर चल रहे हैं कि ये null नहीं होगा
// Populate resume display
document.getElementById("name-display").textContent = "".concat(firstName, " ").concat(lastName);
document.getElementById("email-display").textContent = email;
// Handle profile picture upload
var profileImageInput = document.getElementById("profile-image");
var profileImage = (_a = profileImageInput === null || profileImageInput === void 0 ? void 0 : profileImageInput.files) === null || _a === void 0 ? void 0 : _a[0];
if (profileImage) {
    var reader = new FileReader();
    reader.onload = function (event) {
        var outputImage = document.getElementById("output-image");
        if (outputImage && event.target && event.target.result) {
            outputImage.src = event.target.result;
            outputImage.style.display = "block";
        }
    };
    reader.readAsDataURL(profileImage);
}
// Show the resume output section
var outputSection = document.getElementById("output-section");
if (outputSection) {
    outputSection.style.display = "block";
}
// Editable Resume Functions
function editName() {
    var firstNameField = document.getElementById("edit-first-name");
    var lastNameField = document.getElementById("edit-last-name");
    firstNameField.value = firstName;
    lastNameField.value = lastName;
    showEditSection();
}
function editEmail() {
    var emailField = document.getElementById("edit-email");
    emailField.value = email;
    showEditSection();
}
function showEditSection() {
    var outputSection = document.getElementById("output-section");
    var editSection = document.getElementById("edit-section");
    if (outputSection)
        outputSection.style.display = "none";
    if (editSection)
        editSection.style.display = "block";
}
function saveResume() {
    var _a;
    var firstNameField = document.getElementById("edit-first-name");
    var lastNameField = document.getElementById("edit-last-name");
    var emailField = document.getElementById("edit-email");
    // Update the displayed name and email
    document.getElementById("name-display").textContent = "".concat(firstNameField.value, " ").concat(lastNameField.value);
    document.getElementById("email-display").textContent = emailField.value;
    // Optionally handle the new profile image upload if needed
    var profileImageInput = document.getElementById("edit-profile-image");
    if ((_a = profileImageInput === null || profileImageInput === void 0 ? void 0 : profileImageInput.files) === null || _a === void 0 ? void 0 : _a[0]) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var outputImage = document.getElementById("output-image");
            if (outputImage && event.target && event.target.result) {
                outputImage.src = event.target.result;
            }
        };
        reader.readAsDataURL(profileImageInput.files[0]);
    }
    // Hide the edit section and show the output section again
    var outputSection = document.getElementById("output-section");
    var editSection = document.getElementById("edit-section");
    if (editSection)
        editSection.style.display = "none";
    if (outputSection)
        outputSection.style.display = "block";
}

// Collect input values with null checks and non-null assertion
const firstNameInput = document.getElementById("first-name") as HTMLInputElement | null;
const lastNameInput = document.getElementById("last-name") as HTMLInputElement | null;
const emailInput = document.getElementById("email-address") as HTMLInputElement | null;

const firstName = firstNameInput ? firstNameInput.value : "";
const lastName = lastNameInput ? lastNameInput.value : "";
const email = emailInput!.value; // यहाँ हम मान कर चल रहे हैं कि ये null नहीं होगा

// Populate resume display
(document.getElementById("name-display") as HTMLElement | null)!.textContent = `${firstName} ${lastName}`;
(document.getElementById("email-display") as HTMLElement | null)!.textContent = email;

// Handle profile picture upload
const profileImageInput = document.getElementById("profile-image") as HTMLInputElement | null;
const profileImage = profileImageInput?.files?.[0];
if (profileImage) {
    const reader = new FileReader();
    reader.onload = function(event: ProgressEvent<FileReader>) {
        const outputImage = document.getElementById("output-image") as HTMLImageElement | null;
        if (outputImage && event.target && event.target.result) {
            outputImage.src = event.target.result as string;
            outputImage.style.display = "block";
        }
    };
    reader.readAsDataURL(profileImage);
}

// Show the resume output section
const outputSection = document.getElementById("output-section") as HTMLElement | null;
if (outputSection) {
    outputSection.style.display = "block";
}

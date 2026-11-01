
const typeSelect = document.querySelector("#type");
const studentIdContainer = document.querySelector("#studentIdContainer");
const accessCodeContainer = document.querySelector("#accessCodeContainer");

function updateTypeFields() {
    studentIdContainer.hidden = typeSelect.value !== "student";
    accessCodeContainer.hidden = typeSelect.value !== "guest";
}

typeSelect.addEventListener("change", updateTypeFields);
updateTypeFields();
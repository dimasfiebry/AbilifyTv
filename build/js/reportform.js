function checkOther() {
    var reportTypeSelect = document.getElementById("reportType");
    var otherDetailsDiv = document.getElementById("otherDetails");
    var otherDescriptionInput = document.getElementById("otherDescription");

    if (reportTypeSelect.value === "other") {
        otherDetailsDiv.style.display = "block";
        otherDescriptionInput.setAttribute("required", "required");
    } else {
        otherDetailsDiv.style.display = "none";
        otherDescriptionInput.removeAttribute("required");
    }
}
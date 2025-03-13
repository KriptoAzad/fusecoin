// Qoşulma düyməsi üçün alert
function joinFuse() {
    alert("Fuse ordusuna xoş gəldin! 🚀");
}

// Forma qoşulma alerti
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Sən artıq Fuse ordusunun bir parçasısan! 🎉");
});

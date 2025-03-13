// Fuse düyməsi üçün xəbərdarlıq funksiyası
function joinFuse() {
    alert("Fuse ordusuna xoş gəlmisən! 🚀");
}

// Tranzaksiya simulyasiyası
let holderCount = 150;
let transactionCount = 0;

// Hər 2 saniyədə yeni tranzaksiya yaransın
setInterval(() => {
    transactionCount++;
    holderCount++;
    document.getElementById("holderCount").textContent = `Holderlər: ${holderCount}`;
    document.getElementById("transactionCount").textContent = `Tranzaksiyalar: ${transactionCount}`;
}, 2000);

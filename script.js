document.addEventListener('DOMContentLoaded', () => {
    const currentDate = new Date().toLocaleDateString();
    document.getElementById('currentDate').textContent = currentDate;
});

function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;

    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.backgroundColor = "#0b1f3a";
    toast.style.color = 'white';
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "8px";
    toast.style.zIndex = "1000";

    document.body.appendChild(toast);

     setTimeout(function() {
        toast.remove();
    }, 3000);

}
document.querySelectorAll('#matches a[href]').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        document.querySelector("#booking").scrollIntoView({ behavior: 'smooth' });

        showToast("Opening Ticket Booking...");
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const demo = document.getElementById("demo");

    demo.textContent = "IPL 2026 feature exciting matches between popular teams at major stadiums.";
});
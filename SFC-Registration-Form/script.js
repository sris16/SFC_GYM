document.addEventListener("DOMContentLoaded", () => {

    // Hide loader after 1.5s
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1500);

    const form = document.getElementById("registrationForm");
    const card = document.getElementById("memberCard");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Fill card details
        document.getElementById("cardName").innerText =
            document.getElementById("name").value;

        document.getElementById("cardPhone").innerText =
            document.getElementById("number").value;

        document.getElementById("cardGender").innerText =
            document.getElementById("gender").value;

        document.getElementById("cardGoal").innerText =
            document.getElementById("goal").value;

        // Hide form, show card
        document.querySelector(".form-container").style.display = "none";
        card.style.display = "block";

        card.scrollIntoView({ behavior: "smooth" });
    });
});

// Barcha loyiha kartochkalarini topamiz
const projectCards = document.querySelectorAll('.project-card');

// Har bir kartochkani bosish funksiyasi
projectCards.forEach(card => {
    card.addEventListener('click', function() {
        // HTML dagi data- atributlaridan ma'lumotlarni olamiz
        const title = this.getAttribute('data-title');
        const desc = this.getAttribute('data-desc');
        const img = this.getAttribute('data-img');
        const github = this.getAttribute('data-github');
        const demo = this.getAttribute('data-demo');

        // Modal oynadagi elementlarni topamiz
        const modal = document.getElementById("projectModal");
        document.getElementById("modalImg").src = img;
        document.getElementById("modalTitle").textContent = title;
        document.getElementById("modalDesc").textContent = desc;
        document.getElementById("modalGithub").href = github;
        document.getElementById("modalDemo").href = demo;

        // Modalni ko'rsatamiz
        modal.style.display = "block";
    });
});

// Modalni yopish funksiyalari
document.getElementById("closeModal").addEventListener('click', function() {
    document.getElementById("projectModal").style.display = "none";
});

// Modal tashqarisiga (qorong'i qismga) bosganda yopish
window.addEventListener('click', function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
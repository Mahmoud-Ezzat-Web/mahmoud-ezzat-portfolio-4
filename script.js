document.addEventListener('DOMContentLoaded', () => {
    // 1. القائمة الجانبية للموبايل
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. معالجة نموذج التواصل والاستشارة المجانية
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelectorAll('input')[0].value;
            alert(`أهلاً بك ${name}! تم استلام طلب الاستشارة بنجاح، وسيتواصل معك أحد متخصصينا قريباً.`);
            contactForm.reset();
        });
    }
});
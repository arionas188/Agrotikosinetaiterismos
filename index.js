document.addEventListener("DOMContentLoaded", function () {
    console.log("GSAP script loaded!");

    // Header animation (πέφτει από πάνω)
    gsap.from("header", { y: -100, opacity: 0, duration: 1, ease: "power2.out" });

    // Animation για .ipirisies (έρχεται από το βάθος)
    gsap.from(".ipirisies", {
        scale: 0.8, // Ξεκινάει μικρότερο (βάθος)
        opacity: 0,
        duration: 1.2,
        delay: 0.5, // Περιμένει λίγο για πιο ωραία ροή
        ease: "power2.out"
    });
});
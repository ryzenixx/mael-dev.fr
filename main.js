function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
    updateThemeIcon();
}

function updateThemeIcon() {
    document.querySelector(".toggle-theme").textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

particlesJS("particles-js", {
    particles: {
        number: {
            value: 115,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#f96c6c"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#f96c6c",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            }
        }
    },
    retina_detect: true
});

window.onload = () => {
    gsap.from('.fade-in-a', { opacity: 0, y: 0, duration: 1, delay: 0.8, stagger: 0.2, ease: "power2.out" });
    gsap.from('.fade-in-b', { opacity: 0, y: 0, duration: 1, delay: 1.2, stagger: 0.2, ease: "power2.out" });
    gsap.from('.fade-in-c', { opacity: 0, y: 0, duration: 1, delay: 1.7, stagger: 0.2, ease: "power2.out" });
    gsap.from('.slide-up', { y: 50, opacity: 0, duration: 1 });
    gsap.from('.slide-down', { y: -50, opacity: 0, duration: 1 });
    gsap.from('.rotate-3d', { rotationX: 180, opacity: 0, duration: 1 });
    gsap.from('.bounce', { y: -100, opacity: 0, duration: 1, ease: "bounce.out" });
};
  

(function() {
    if (localStorage.getItem("darkMode") === null) {
        localStorage.setItem("darkMode", "enabled");
        document.body.classList.add("dark-mode");
    } else if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
    updateThemeIcon();
})();
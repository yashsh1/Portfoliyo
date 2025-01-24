const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp: 0.02,
});

// Circle Follower Functionality
function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (event) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

function circleChaptaKaro() {
  let xscale = 1,
    yscale = 1;
  let xprev = 0,
    yprev = 0;
  let timeout;

  window.addEventListener("mousemove", function (event) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.5, 1.2, (event.clientX - xprev) / 100);
    yscale = gsap.utils.clamp(0.5, 1.2, (event.clientY - yprev) / 100);

    xprev = event.clientX;
    yprev = event.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(() => {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

// Hero Section Animation
function firstPageAnim() {
  const tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#heroFooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

// Image Hover Animation
document.querySelectorAll(".elem").forEach(function (elem) {
  const img = elem.querySelector("img");
  let lastX = 0; // Store the last X position for rotation calculation

  // Ensure the image is hidden initially
  gsap.set(img, { opacity: 0 });

  elem.addEventListener("mouseenter", function () {
    gsap.to(img, {
      opacity: 0,
      ease: "power3.out",
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (event) {
    const elemRect = elem.getBoundingClientRect();
    const offsetX = event.clientX - elemRect.left; // Mouse X relative to the element
    const offsetY = event.clientY - elemRect.top; // Mouse Y relative to the element

    const diffX = event.clientX - lastX; // Difference in X position for rotation
    lastX = event.clientX;

    gsap.to(img, {
      x: offsetX,
      y: offsetY,
      rotate: gsap.utils.clamp(-20, 20, diffX * 0.5), // Tilt the image based on mouse movement
      ease: "power3.out",
      duration: 0.2,
    });
  });

  elem.addEventListener("mouseleave", function () {
    gsap.to(img, {
      opacity: 0,
      rotate: 0, // Reset rotation on mouse leave
      ease: "power3.out",
      duration: 0.5,
    });
  });
});

// Initialize Animations
firstPageAnim();
circleChaptaKaro();
circleMouseFollower(1, 1);

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
// document.querySelectorAll(".elem").forEach(function (elem) {
//   const img = elem.querySelector("img");
//   let lastX = 0; // Store the last X position for rotation calculation

//   // Ensure the image is hidden initially
//   gsap.set(img, { opacity: 0 });

//   elem.addEventListener("mouseenter", function () {
//     gsap.to(img, {
//       opacity: 0,
//       ease: "power3.out",
//       duration: 0.5,
//     });
//   });

//   elem.addEventListener("mousemove", function (event) {
//     const elemRect = elem.getBoundingClientRect();
//     const offsetX = event.clientX - elemRect.left; // Mouse X relative to the element
//     const offsetY = event.clientY - elemRect.top; // Mouse Y relative to the element

//     const diffX = event.clientX - lastX; // Difference in X position for rotation
//     lastX = event.clientX;

//     gsap.to(img, {
//       x: offsetX,
//       y: offsetY,
//       rotate: gsap.utils.clamp(-20, 20, diffX * 0.5), // Tilt the image based on mouse movement
//       ease: "power3.out",
//       duration: 0.2,
//     });
//   });

//   elem.addEventListener("mouseleave", function () {
//     gsap.to(img, {
//       opacity: 0,
//       rotate: 0, // Reset rotation on mouse leave
//       ease: "power3.out",
//       duration: 0.5,
//     });
//   });
// });



// document.querySelectorAll(".elem").forEach(function (elem) {
//     elem.addEventListener("mouseleave",function(dets){
//         gsap.to(elem.querySelector("img"),{
//        display:"none"
//         })
//         gsap.to( elem.querySelector("h1"),{
//             opacity:0.8,
//            paddingLeft:"0px",
//            })
//         document.querySelector("#mini-circle").style.width =`10px`;
//            document.querySelector("#mini-circle").style.height =`10px`;
//            document.querySelector("#mini-circle").innerHTML=" ";
           
//     })
//     elem.addEventListener("mousemove", function (dets) {
//         // clearTimeout(timeout)
//         var difftop=dets.clientY - elem.getBoundingClientRect().top;
//         // const difftop=  ;
//         // console.log()
//         gsap.to(elem.querySelector("img"), {
//             top:difftop,
//           display:"block",
//             ease:Power1,
//             left:dets.clientX ,
            
//         });
//            gsap.to( elem.querySelector("h1"),{
//             opacity:0.2,
//            paddingLeft:"50px",
//         // ease:Expo.easeO,
//         // duration:1.5
//         // overflow:hidden
        

//            })
           
        
//            document.querySelector("#mini-circle").style.width =`40px`;
//            document.querySelector("#mini-circle").style.height =`40px`;
//            document.querySelector("#mini-circle").style.opacity =`0.5`;
//            document.querySelector("#mini-circle").innerHTML="view"
//     });
    
//     // setTimeout(function(){
//     //     gsap.to( elem.querySelector("h1"),{
//     //         opacity:0.6,
//     //        paddingLeft:"0px"
//     //         // ease:Expo.easeOut,
//     //         // overflow:hidden

//     //        },100)
//     //})
// });


document.querySelectorAll(".elem").forEach(function (elem) {
    const img = elem.querySelector("img"); // Get the image inside .elem
    const h1 = elem.querySelector("h1"); // Get the heading inside .elem
    const miniCircle = document.querySelector("#mini-circle"); // Get the mini-circle element
  
    // Ensure the image is hidden initially
    gsap.set(img, { opacity: 0, display: "block" });
  
    // Mouseleave Event
    elem.addEventListener("mouseleave", function () {
      gsap.to(img, {
        opacity: 0, // Smoothly hide the image
        ease: "power3.out",
        duration: 0.5,
      });
      gsap.to(h1, {
        opacity: 0.8, // Reset opacity of the heading
        paddingLeft: "0px", // Reset padding of the heading
        ease: "power3.out",
        duration: 0.5,
      });
      gsap.to(miniCircle, {
        width: "10px", // Reset width
        height: "10px", // Reset height
        opacity: 0, // Hide the mini-circle
        duration: 0.3,
      });
      miniCircle.innerHTML = ""; // Clear the inner text
    });
  
    // Mousemove Event
    elem.addEventListener("mousemove", function (event) {
      const elemRect = elem.getBoundingClientRect(); // Get the element's position
      const offsetX = event.clientX - elemRect.left; // Calculate X relative to element
      const offsetY = event.clientY - elemRect.top; // Calculate Y relative to element
  
      const centerX = elemRect.left + elemRect.width / 2; // Center of the element (X)
      const centerY = elemRect.top + elemRect.height / 2; // Center of the element (Y)
  
      const deltaX = event.clientX - centerX; // X difference from center
      const deltaY = event.clientY - centerY; // Y difference from center
  
      // Calculate the tilt amount
      const tiltX = (deltaY / elemRect.height) * 20; // X-axis tilt (range: -20 to 20 degrees)
      const tiltY = -(deltaX / elemRect.width) * 20; // Y-axis tilt (range: -20 to 20 degrees)
  
      // Apply the tilt effect using CSS transform
      gsap.to(img, {
        x: offsetX, // Set the X position
        y: offsetY, // Set the Y position
        opacity: 1, // Ensure the image is visible
        rotationX: tiltX, // Apply tilt along X axis
        rotationY: tiltY, // Apply tilt along Y axis
        ease: "power3.out",
        duration: 0.2,
      });
  
      // Animate the heading
      gsap.to(h1, {
        opacity: 0.2, // Dim the heading
        paddingLeft: "50px", // Shift the heading
        ease: "power3.out",
        duration: 0.2,
      });
  
      // Animate the mini-circle
      gsap.to(miniCircle, {
        width: "40px", // Increase width
        height: "40px", // Increase height
        opacity: 0.5, // Make it visible
        duration: 0.2,
      });
      miniCircle.innerHTML = "view"; // Update text
    });
  });
  




// Initialize Animations
firstPageAnim();
circleChaptaKaro();
circleMouseFollower(1, 1);

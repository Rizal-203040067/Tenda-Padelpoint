// Mobile nav toggle
const burger = document.getElementById("burger");
const navMobile = document.getElementById("navMobile");

if (burger && navMobile) {
  burger.addEventListener("click", () => {
    navMobile.classList.toggle("open");
  });

  // close mobile nav on link click
  navMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navMobile.classList.remove("open"));
  });
}

// Marquee: clone the first group until the track is at least 2x the
// container width, then animate by exactly one group's width. Since every
// copy is an identical DOM clone (not just "equal" CSS-measured text), the
// loop point is guaranteed seamless regardless of font rendering/hinting.
function initMarquee() {
  const track = document.getElementById("marqueeTrack");
  if (!track) return;

  const firstGroup = track.querySelector(".marquee__group");
  if (!firstGroup) return;

  const container = track.parentElement;
  const containerWidth = container.clientWidth;

  // Reset to a single group before measuring/cloning (avoids piling up
  // clones if this ever runs more than once, e.g. on resize).
  track.innerHTML = "";
  track.appendChild(firstGroup);

  let groupWidth = firstGroup.getBoundingClientRect().width;
  if (groupWidth === 0) return; // fonts not ready / hidden; bail safely

  // Fill enough copies to cover at least 2x the visible width, so there's
  // always a full, identical copy ready to slide in behind the one leaving.
  const copiesNeeded = Math.max(
    2,
    Math.ceil((containerWidth * 2) / groupWidth) + 1,
  );
  for (let i = 1; i < copiesNeeded; i++) {
    track.appendChild(firstGroup.cloneNode(true));
  }

  // Recompute exact single-group width after cloning (fonts now definitely
  // rendered) and drive the animation distance from real measured pixels
  // instead of a CSS "-50%" guess.
  groupWidth = firstGroup.getBoundingClientRect().width;
  const speedPxPerSec = 60; // tune feel here instead of guessing a duration
  const duration = groupWidth / speedPxPerSec;

  track.style.setProperty("--marquee-distance", `-${groupWidth}px`);
  track.style.animationDuration = `${duration}s`;
  track.classList.add("marquee__track--ready");
}

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(initMarquee);
} else {
  window.addEventListener("load", initMarquee);
}
window.addEventListener("resize", () => {
  clearTimeout(window.__marqueeResizeTimer);
  window.__marqueeResizeTimer = setTimeout(initMarquee, 200);
});

// Pro Players: Men / Women tab switching
const playerTabs = document.querySelectorAll(".players__tab");
const playerPanels = document.querySelectorAll(".players__grid");

playerTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const gender = tab.dataset.gender;

    playerTabs.forEach((t) => {
      t.classList.toggle("players__tab--active", t === tab);
      t.setAttribute("aria-selected", t === tab ? "true" : "false");
    });

    playerPanels.forEach((panel) => {
      panel.hidden = panel.dataset.panel !== gender;
    });
  });
});

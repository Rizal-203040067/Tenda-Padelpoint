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

// Generic infinite-scroll initializer: clones the first .X__group inside
// a track until there's at least 2x the container width of content, then
// animates by exactly one group's measured pixel width. Since every copy
// is an identical DOM clone (not just "equal" CSS-measured content), the
// loop point is guaranteed seamless regardless of font/image rendering.
function initInfiniteScroll({
  trackId,
  groupSelector,
  distanceVar,
  readyClass,
  speedPxPerSec,
}) {
  const track = document.getElementById(trackId);
  if (!track) return;

  const firstGroup = track.querySelector(groupSelector);
  if (!firstGroup) return;

  const container = track.parentElement;
  const containerWidth = container.clientWidth;

  // Reset to a single group before measuring/cloning (avoids piling up
  // clones if this ever runs more than once, e.g. on resize).
  track.innerHTML = "";
  track.appendChild(firstGroup);

  let groupWidth = firstGroup.getBoundingClientRect().width;
  if (groupWidth === 0) return; // fonts/images not ready, or hidden; bail safely

  // Fill enough copies to cover at least 2x the visible width, so there's
  // always a full, identical copy ready to slide in behind the one leaving.
  const copiesNeeded = Math.max(
    2,
    Math.ceil((containerWidth * 2) / groupWidth) + 1,
  );
  for (let i = 1; i < copiesNeeded; i++) {
    track.appendChild(firstGroup.cloneNode(true));
  }

  // Recompute exact single-group width after cloning (images/fonts now
  // definitely rendered) and drive the animation distance from real
  // measured pixels instead of a CSS "-50%" guess.
  groupWidth = firstGroup.getBoundingClientRect().width;
  const duration = groupWidth / speedPxPerSec;

  track.style.setProperty(distanceVar, `-${groupWidth}px`);
  track.style.animationDuration = `${duration}s`;
  track.classList.add(readyClass);
}

function initMarquee() {
  initInfiniteScroll({
    trackId: "marqueeTrack",
    groupSelector: ".marquee__group",
    distanceVar: "--marquee-distance",
    readyClass: "marquee__track--ready",
    speedPxPerSec: 60,
  });
}

function initBrandsSlider() {
  initInfiniteScroll({
    trackId: "brandsTrack",
    groupSelector: ".brands__group",
    distanceVar: "--brands-distance",
    readyClass: "brands__track--ready",
    speedPxPerSec: 60,
  });
}

function initAllInfiniteScrollers() {
  initMarquee();
  initBrandsSlider();
}

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(initAllInfiniteScrollers);
} else {
  window.addEventListener("load", initAllInfiniteScrollers);
}
window.addEventListener("resize", () => {
  clearTimeout(window.__infiniteScrollResizeTimer);
  window.__infiniteScrollResizeTimer = setTimeout(
    initAllInfiniteScrollers,
    200,
  );
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

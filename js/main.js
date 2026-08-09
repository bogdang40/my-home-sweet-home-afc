(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  const backdrop = document.querySelector("#nav-backdrop");
  const year = document.querySelector("#year");
  const mobileMq = window.matchMedia("(max-width: 760px)");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  // Sticky header shadow
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile nav with body scroll lock + backdrop
  if (toggle && nav) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("nav-open", open);
      if (backdrop) {
        if (open) {
          backdrop.hidden = false;
          // Force reflow so the opacity transition runs
          void backdrop.offsetWidth;
          backdrop.classList.add("is-visible");
        } else {
          backdrop.classList.remove("is-visible");
          window.setTimeout(() => {
            if (!backdrop.classList.contains("is-visible")) backdrop.hidden = true;
          }, 280);
        }
      }
    };

    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      setOpen(open);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    backdrop?.addEventListener("click", () => setOpen(false));

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });

    // Close menu if resizing up to desktop
    const onMq = () => {
      if (!mobileMq.matches) setOpen(false);
    };
    if (mobileMq.addEventListener) mobileMq.addEventListener("change", onMq);
    else mobileMq.addListener(onMq);
  }
})();

/* Header renderer keeps mobile identity synchronized with the profile data. */
function renderMobileHeader(profile) {
    document.getElementById("mobile-header").innerHTML = `
        <button id="menu-open" class="text-orange-500 focus:outline-none mr-4" aria-label="Open Menu">${ICONS.menu}</button>
        <div class="flex flex-col">
            <h1 class="text-lg font-bold text-orange-500 tracking-tight">${profile.nameDisplay}</h1>
            <p class="text-[10px] text-slate-400 uppercase tracking-widest mono">${profile.title}</p>
        </div>`;
}

/* Sidebar renderer builds navigation and persistent action links from data. */
function renderSidebar(data) {
    document.getElementById("sidebar").innerHTML = `
        <div class="mb-10 flex justify-between items-start">
            <div>
                <h1 class="text-2xl font-bold text-orange-500 tracking-tighter">${data.profile.nameDisplay}</h1>
                <p class="text-xs text-slate-400 uppercase tracking-widest mt-1 mono">${data.profile.title}</p>
            </div>
            <button id="menu-close" class="md:hidden text-slate-400 hover:text-white" aria-label="Close Menu">${ICONS.close}</button>
        </div>
        <nav class="flex flex-col space-y-4 font-medium text-slate-400">
            ${data.navigation.map(item => `<a href="#${item.id}" class="sidebar-link transition flex items-center gap-2"><span>//</span> ${item.label}</a>`).join("")}
        </nav>
        <div class="mt-auto pt-6 space-y-4">
            <a href="${data.profile.appHref}" class="group relative flex items-center gap-3 p-3 bg-orange-500/10 border border-orange-500/20 rounded-xl transition-all duration-300 hover:bg-orange-500/20 hover:border-orange-500/50 hover:shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                <div class="flex-shrink-0 w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/30 group-hover:scale-110 transition-transform duration-300">${ICONS.apps}</div>
                <div class="flex flex-col">
                    <span class="text-orange-500 text-xs font-bold uppercase tracking-widest leading-none">${data.profile.appTitle}</span>
                    <span class="text-[10px] text-slate-500 mt-1 mono">${data.profile.appSubtitle}</span>
                </div>
                <div class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">${ICONS.arrowRight}</div>
            </a>
            <a href="${data.profile.pdfHref}" class="block w-full text-center py-2.5 px-4 border border-orange-500 text-orange-500 rounded-sm hover:bg-orange-500 hover:text-white transition text-xs font-bold uppercase tracking-widest">Download CV (PDF)</a>
        </div>`;
}

/* Main renderer maps the section order to section-specific renderers. */
function renderResume(data) {
    const resumeRoot = document.getElementById("resume-root");
    resumeRoot.innerHTML = data.sectionOrder.map(sectionId => SECTION_RENDERERS[sectionId](data)).join("");
    document.getElementById("footer-copyright").innerHTML = data.footer.copyright;
}

/* Mobile sidebar behavior is attached after dynamic markup is present. */
function setupSidebarMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebar-overlay");
    const openBtn = document.getElementById("menu-open");
    const closeBtn = document.getElementById("menu-close");
    const navLinks = document.querySelectorAll(".sidebar-link");

    function toggleMenu() {
        const isOpen = !sidebar.classList.contains("-translate-x-full");

        if (isOpen) {
            sidebar.classList.add("-translate-x-full");
            overlay.classList.add("hidden", "opacity-0");
            document.body.style.overflow = "";
            return;
        }

        sidebar.classList.remove("-translate-x-full");
        overlay.classList.remove("hidden");
        document.body.style.overflow = "hidden";
        setTimeout(() => overlay.classList.remove("opacity-0"), 10);
    }

    openBtn.addEventListener("click", toggleMenu);
    closeBtn.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 768) toggleMenu();
        });
    });
}

/* Publication filtering stays behavior-only while data remains in resume-data.js. */
function setupPublicationFilters() {
    const filters = document.querySelectorAll(".pub-filter");
    const items = document.querySelectorAll(".pub-item");

    filters.forEach(filter => {
        filter.addEventListener("click", () => {
            const category = filter.dataset.pubFilter;

            filters.forEach(item => {
                item.classList.remove("text-orange-500", "border-orange-500", "border-b-2");
                item.classList.add("text-slate-500");
            });

            filter.classList.add("text-orange-500", "border-orange-500", "border-b-2");
            filter.classList.remove("text-slate-500");

            items.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                    setTimeout(() => {
                        item.style.opacity = "1";
                        item.style.transform = "translateY(0)";
                    }, 10);
                    return;
                }

                item.style.opacity = "0";
                item.style.transform = "translateY(10px)";
                setTimeout(() => {
                    item.style.display = "none";
                }, 300);
            });
        });
    });
}

/* App bootstrap runs once all static script files have loaded. */
function initResumePage() {
    renderMobileHeader(RESUME_DATA.profile);
    renderSidebar(RESUME_DATA);
    renderResume(RESUME_DATA);
    setupSidebarMenu();
    setupPublicationFilters();
}

initResumePage();

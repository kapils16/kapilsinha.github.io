/* SVG snippets are centralized so section renderers stay readable. */
const ICONS = {
    menu: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>`,
    apps: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>`,
    arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>`,
    calendar: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
    external: `<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>`,
    bolt: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`,
    location: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-zinc-600 group-hover/item:text-orange-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>`,
    phone: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.684l1.2 3.6a1 1 0 01-.45 1.16l-1.46.876a11.042 11.042 0 005.16 5.16l.876-1.46a1 1 0 011.16-.45l3.6 1.2a1 1 0 01.684.95V19a2 2 0 01-2 2h-1C8.82 21 3 15.18 3 8V5z" /></svg>`,
    mail: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
    scholar: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>`,
    profile: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>`
};

function renderThermalDiagram() {
    return RESUME_DATA.about.thermalDiagramSvg;
}

/* Section renderer for the research philosophy hero. */
function renderAboutSection(data) {
    return `
        <section id="about" class="mb-16 relative overflow-hidden rounded-xl border border-zinc-800 blueprint-bg p-8 md:p-12">
            <div class="relative z-10 grid md:grid-cols-5 gap-12 items-center">
                <div class="md:col-span-3">
                    <h2 class="text-orange-500 font-bold tracking-tighter text-sm mb-4 uppercase mono">${data.eyebrow}</h2>
                    <p class="text-3xl md:text-5xl font-semibold text-white leading-tight mb-8">
                        ${data.headlinePrefix} <span class="text-orange-500">${data.headlineAccent}</span>
                    </p>
                    <p class="text-slate-400 text-lg leading-relaxed mb-8">${data.summary.replace("transient thermal comfort", "<strong>transient thermal comfort</strong>")}</p>
                    <p class="text-slate-500 text-sm leading-relaxed mb-8">${data.philosophy}</p>
                    <div class="flex flex-wrap gap-6 text-[10px] font-mono text-orange-500/60 uppercase tracking-widest">
                        ${data.highlights.map(item => `<span>${item}</span>`).join("")}
                    </div>
                </div>
                <div class="md:col-span-2 relative flex justify-center">${renderThermalDiagram()}</div>
            </div>
        </section>`;
}

/* Section renderer for paired research highlights with responsive canvas surfaces. */
function renderResearchHighlightsSection(data) {
    return `
        <section id="research-highlights" class="mb-16">
            <div class="relative z-10 mb-10 w-full">
                <h2 class="text-orange-500 font-bold tracking-tighter text-sm mb-4 uppercase mono">${data.eyebrow}</h2>
                <p class="text-3xl md:text-3xl font-semibold text-white leading-tight">${data.headline}</p>
            </div>
            <div class="relative z-10 grid lg:grid-cols-2 gap-6">
                ${data.panels.map((panel, index) => `
                    <article class="research-highlight-panel flex flex-col sm:flex-row gap-5 items-center bg-zinc-950/70 border border-zinc-800 rounded-xl p-5 md:p-6">
                        <div class="min-w-0 flex-1">
                            <p class="px-3 py-1 bg-orange-500 text-black text-[10px] mono font-bold uppercase tracking-widest mb-3">${panel.tag}</p>
                            <h3 class="text-white text-xl font-bold leading-tight mb-3">${panel.title}</h3>
                            <p class="text-slate-400 text-sm leading-relaxed mb-5">${panel.description}</p>
                            <div class="flex flex-wrap gap-2">
                                ${panel.metrics.map(metric => `<span class="px-3 py-1 border border-orange-500/20 bg-orange-500/5 text-orange-400 text-[10px] mono uppercase rounded">${metric}</span>`).join("")}
                            </div>
                        </div>
                        <div class="relative w-[220px] h-[220px] shrink-0 rounded-lg border border-orange-500/15 overflow-hidden">
                            ${panel.svg}
                        </div>
                    </article>`).join("")}
            </div>
        </section>`;
}

/* Section renderer for education timeline items. */
function renderEducationSection(items) {
    return `
        <section id="education" class="mb-16">
            <h3 class="text-2xl font-bold text-white mb-10 flex items-center gap-4">Education <span class="h-px flex-1 bg-zinc-800"></span></h3>
            <div class="space-y-8">
                ${items.map(item => `
                    <div class="accent-border pl-8 ${item.featured ? "" : "border-zinc-700"} relative cursor-default">
                        <h4 class="text-base font-bold ${item.featured ? "text-orange-500" : "text-slate-300"} transition-colors duration-[250ms]">${item.degree}</h4>
                        <p class="text-sm text-white ${item.featured ? "" : "text-slate-300"}">${item.institution}</p>
                        <p class="text-xs text-slate-500 italic mono uppercase tracking-wider">${item.period}</p>
                        ${item.detail ? `<p class="text-xs text-slate-400 mt-3 max-w-2xl leading-relaxed">${item.detail}<br>${item.supervision}</p>` : ""}
                    </div>`).join("")}
            </div>
        </section>`;
}

/* Section renderer for the current professional position. */
function renderExperienceSection(items, internships) {
    const [currentRole, ...previousRoles] = items;

    return `
        <section id="experience" class="mb-16">
            <h3 class="text-2xl font-bold text-white mb-10 flex items-center gap-4">Experience <span class="h-px flex-1 bg-zinc-800"></span></h3>
            <div class="space-y-6">
                <article class="bg-zinc-900 border border-zinc-800 p-5 md:p-6 rounded-xl">
                    <h4 class="text-orange-500 font-bold text-xs uppercase mono mb-2">${currentRole.label}</h4>
                    <h5 class="text-lg font-bold text-white mb-1">${currentRole.title}</h5>
                    <p class="text-sm text-slate-300 mb-2">${currentRole.organization}${currentRole.location ? `, ${currentRole.location}` : ""}</p>
                    <div class="flex items-center gap-2 text-slate-500 mono text-xs">${ICONS.calendar}${currentRole.period}</div>
                </article>
                <div class="grid md:grid-cols-2 gap-6">
                    ${previousRoles.map(item => `
                        <article class="p-6 bg-zinc-900/40 border border-zinc-800 rounded-xl">
                            <h5 class="text-white font-bold mb-1">${item.title}</h5>
                            <p class="text-sm text-slate-300 mb-2">${item.organization}${item.location ? `, ${item.location}` : ""}</p>
                            <p class="text-xs text-slate-500 mono mb-4">${item.period}</p>
                            ${item.project ? `<p class="text-xs text-orange-500/80 mono mb-4">${item.project}</p>` : ""}
                            ${item.highlights.length ? `
                                <ul class="space-y-2 text-xs text-slate-400 leading-relaxed">
                                    ${item.highlights.map(point => `<li>${point}</li>`).join("")}
                                </ul>` : ""}
                        </article>`).join("")}
                </div>
            </div>
            <div class="mt-10">
                <h4 class="text-orange-500 font-bold text-xs uppercase mono mb-4">Internship</h4>
                <div class="grid md:grid-cols-2 gap-6">
                    ${internships.map(item => `
                        <article class="p-6 bg-zinc-900/40 border border-zinc-800 rounded-xl">
                            <h5 class="text-white font-bold mb-1">${item.title}</h5>
                            <p class="text-sm text-slate-300 mb-2">${item.organization}</p>
                            <p class="text-xs text-slate-500 mono mb-4">${item.period}</p>
                            <ul class="space-y-2 text-xs text-slate-400 leading-relaxed">
                                ${item.highlights.map(point => `<li>${point}</li>`).join("")}
                            </ul>
                        </article>`).join("")}
                </div>
            </div>
        </section>`;
}

/* Section renderer for patents, grants, and research innovation cards. */
function renderResearchSection(items) {
    return `
        <section id="research" class="mb-16">
            <h3 class="text-2xl font-bold text-white mb-10 flex items-center gap-4">Patent<span class="h-px flex-1 bg-zinc-800"></span></h3>
            <div class="grid md:grid-cols-1 gap-8">
                ${items.map(item => {
                    /* Accent and standard research cards keep their original spacing patterns. */
                    if (item.variant === "accent") {
                        return `
                            <div class="group p-8 bg-orange-500/5 border border-orange-500/20 rounded-xl hover:border-orange-500/50">
                                <div class="flex items-start gap-6">
                                    <div class="flex-1">
                                        <div class="mb-2">
                                            <span class="px-3 py-1 bg-orange-500 text-black text-[10px] font-bold uppercase mono">${item.tag}</span>
                                        </div>
                                        <h4 class="text-white text-xl font-bold mb-3">${item.title}</h4>
                                        <p class="text-slate-400 text-sm leading-tight">${item.description}</p>
                                        ${item.meta ? `<p class="text-xs text-slate-500 mono mt-4">${item.meta}</p>` : ""}
                                    </div>
                                    ${item.svg ? `<div class="relative w-[220px] h-[220px] shrink-0 overflow-hidden">${item.svg}</div>` : ""}
                                </div>
                            </div>`; 
                    }

                    return `
                        <div class="group p-8 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700">
                            <div class="flex justify-between items-start mb-6">
                                <span class="text-orange-500 font-bold text-xs mono uppercase">${item.tag}</span>
                                ${item.svg ? `<span class="flex-shrink-0 opacity-70">${item.svg}</span>` : ""}
                            </div>
                            <h4 class="text-white text-xl font-bold mb-3">${item.title}</h4>
                            <p class="text-slate-400 text-sm leading-relaxed">${item.description}</p>
                            ${item.meta ? `<p class="text-xs text-slate-500 mono mt-4">${item.meta}</p>` : ""}
                        </div>`;
                }).join("")}
            </div>
        </section>`;
}

/* Section renderer for honors and recognitions from the detailed CV. */
function renderAwardsSection(items) {
    return `
        <section id="awards" class="mb-16">
            <h3 class="text-2xl font-bold text-white mb-10 flex items-center gap-4">Awards<span class="h-px flex-1 bg-zinc-800"></span></h3>
            <div class="grid md:grid-cols-3 gap-6">
                ${items.map(item => `
                    <article class="p-6 bg-zinc-900/40 border border-zinc-800 rounded-xl">
                        <p class="text-orange-500 mono text-xs font-bold mb-3">${item.year}</p>
                        <h4 class="text-white font-bold mb-2">${item.title}</h4>
                        <p class="text-sm text-slate-400 leading-relaxed">${item.description}</p>
                    </article>`).join("")}
            </div>
        </section>`;
}

/* Section renderer for compact technical skill chips. */
function renderSkillsSection(items) {
    return `
        <section id="skills" class="mb-16">
            <h3 class="text-2xl font-bold text-white mb-10 flex items-center gap-4">Technical Skills<span class="h-px flex-1 bg-zinc-800"></span></h3>
            <div class="grid md:grid-cols-2 gap-6">
                ${items.map(group => `
                    <article class="p-6 bg-zinc-900/40 border border-zinc-800 rounded-xl">
                        <h4 class="text-orange-500 text-xs mono font-bold uppercase mb-4">${group.group}</h4>
                        <div class="flex flex-wrap gap-3">
                            ${group.items.map(skill => `<span class="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-sm mono text-white hover:text-orange-400 hover:border-orange-500/40 transition-colors duration-200 cursor-default">${skill}</span>`).join("")}
                        </div>
                    </article>`).join("")}
            </div>
        </section>`;
}

/* Section renderer for publications and filter buttons. */
function renderPublicationsSection(filters, publications) {
    return `
        <section id="publications" class="mb-16">
            <h3 class="text-2xl font-bold text-white mb-10 flex items-center gap-4">Publication <span class="h-px flex-1 bg-zinc-800"></span></h3>
            <div class="flex space-x-6 mb-12 border-b border-zinc-800 pb-2">
                ${filters.map(filter => `<button data-pub-filter="${filter.key}" class="pub-filter ${filter.key === "all" ? "active text-orange-500 border-b-2 border-orange-500" : "text-slate-500 hover:text-orange-500 transition"} text-xs font-bold uppercase tracking-widest pb-2">${filter.label}</button>`).join("")}
            </div>
            <div class="space-y-6" id="pub-container">
                ${publications.map(pub => `
                    <div class="pub-item p-8 bg-zinc-900/40 border border-zinc-800 rounded-xl" data-category="${pub.category}">
                        <span class="text-[10px] font-bold ${pub.category === "conference" ? "text-slate-400 border-zinc-700" : "text-orange-500 border-orange-500/30"} uppercase px-2 py-1 border rounded mono transition-colors duration-[180ms]">${pub.venue}</span>
                        <h4 class="text-white text-lg font-medium mt-4 transition-colors duration-[250ms]">${pub.title}</h4>
                        <p class="text-sm text-slate-400 mt-2">${pub.authors} | ${pub.year}</p>
                        ${pub.href ? `<a href="${pub.href}" target="_blank" rel="noopener noreferrer" class="text-xs text-orange-500 mt-6 inline-flex items-center gap-1 hover:text-orange-300 hover:underline font-bold uppercase tracking-wider transition-colors duration-[180ms]">${pub.linkLabel} ${ICONS.external}</a>` : ""}
                    </div>`).join("")}
            </div>
        </section>`;
}

/* Section renderer for affiliations, invited lectures, languages, and references. */
function renderAffiliationsSection(data) {
    return `
        <section id="affiliations" class="mb-16">
            <h3 class="text-2xl font-bold text-white mb-10 flex items-center gap-4">Affiliations & Academic Service <span class="h-px flex-1 bg-zinc-800"></span></h3>
            <div class="grid lg:grid-cols-2 gap-8">
                <div class="space-y-6">
                    ${data.affiliations.map(item => `
                        <article class="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
                            <h4 class="text-white font-bold mb-2">${item.title}</h4>
                            <p class="text-sm text-slate-400">${item.detail}</p>
                            <p class="text-xs text-slate-500 mono mt-3">${item.period}</p>
                        </article>`).join("")}
                    ${data.invitedLectures.map(item => `
                        <article class="p-6 bg-zinc-900/40 border border-zinc-800 rounded-xl">
                            <p class="text-orange-500 text-xs mono font-bold uppercase mb-3">Invited Lecture</p>
                            <h4 class="text-white font-bold mb-2">${item.title}</h4>
                            <p class="text-sm text-slate-400">${item.event}, ${item.location} | ${item.year}</p>
                        </article>`).join("")}
                    <article class="p-6 bg-zinc-900/40 border border-zinc-800 rounded-xl">
                        <p class="text-orange-500 text-xs mono font-bold uppercase mb-3">Languages</p>
                        <div class="space-y-2">
                            ${data.languages.map(item => `<p class="text-sm text-slate-400"><span class="text-white font-semibold">${item.name}:</span> ${item.proficiency}</p>`).join("")}
                        </div>
                    </article>
                </div>
                <div class="p-6 bg-zinc-900/40 border border-zinc-800 rounded-xl">
                    <p class="text-orange-500 text-xs mono font-bold uppercase mb-4">References</p>
                    <div class="space-y-5">
                        ${data.references.map(item => `
                            <article>
                                <h4 class="text-white font-bold">${item.name}</h4>
                                <p class="text-sm text-slate-400">${item.role}</p>
                                <p class="text-xs text-slate-500 mt-1">${item.organization}</p>
                                <a href="mailto:${item.email}" class="text-xs text-orange-500 mt-2 inline-block hover:underline">${item.email}</a>
                            </article>`).join("")}
                    </div>
                </div>
            </div>
        </section>`;
}

/* Section renderer for contact identity and external profile links. */
function renderContactSection(profile, links) {
    return `
        <section id="contact" class="mb-16">
            <h3 class="text-xl font-bold text-white mb-8 flex items-center gap-3">${ICONS.bolt}<span class="tracking-tight">Contact</span><span class="h-px flex-1 bg-zinc-800"></span></h3>
            <div class="relative group w-full">
                <div class="absolute -inset-0.5 bg-orange-500/10 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <div class="relative bg-zinc-900/90 border border-zinc-800 rounded-xl overflow-hidden backdrop-blur-md">
                    <div class="p-6 md:p-10 grid md:grid-cols-5 gap-8">
                        <div class="md:col-span-2 space-y-5">
                            <div>
                                <h4 class="text-white text-xl font-bold tracking-tight">${profile.fullName}</h4>
                                <p class="text-orange-500/80 mono text-[10px] font-bold uppercase tracking-wider mt-1">${profile.degrees}</p>
                                <p class="text-slate-500 mono text-[10px] font-bold uppercase tracking-wider mt-1">${profile.roleLine}</p>
                            </div>
                            <div class="space-y-3 pt-2">
                                <div class="flex items-center gap-3 text-slate-400 group/item">${ICONS.location}<span class="text-[11px] leading-relaxed">${profile.address}</span></div>
                            </div>
                        </div>
                        <div class="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            ${links.map(link => `
                                <a href="${link.href}" ${link.href.startsWith("http") ? `target="_blank" rel="noopener noreferrer"` : ""} class="flex items-center gap-3 p-3 bg-zinc-950/50 border border-zinc-800 rounded-lg hover:border-orange-500/50 transition-all group/node">
                                    <div class="p-2 bg-zinc-900 rounded group-hover/node:text-orange-500 transition-colors">${ICONS[link.type]}</div>
                                    <span class="text-[11px] text-slate-300 ${["mail", "phone"].includes(link.type) ? "truncate " : ""}font-medium">${link.label}</span>
                                </a>`).join("")}
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
}

/* Section registry keeps page ordering data-driven and easy to extend. */
const SECTION_RENDERERS = {
    about: data => renderAboutSection(data.about),
    researchHighlights: data => renderResearchHighlightsSection(data.researchHighlights),
    education: data => renderEducationSection(data.education),
    experience: data => renderExperienceSection(data.experience, data.internships),
    research: data => renderResearchSection(data.research),
    awards: data => renderAwardsSection(data.awards),
    skills: data => renderSkillsSection(data.skills),
    publications: data => renderPublicationsSection(data.publicationFilters, data.publications),
    affiliations: data => renderAffiliationsSection(data),
    contact: data => renderContactSection(data.profile, data.contactLinks)
};

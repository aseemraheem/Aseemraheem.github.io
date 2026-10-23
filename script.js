/* ===== EDIT THIS SECTION: all your content lives here ===== */
const PROFILE = {
  github: "https://github.com/aseemraheem",
  email: "aseemraheem10@gmail.com",   // taken from your public GitHub README; change if needed
  instagram: "https://instagram.com/mr.aseem_raheem",
  devto: "https://dev.to/aseem_raheem",
  eduDates: ""                        // e.g. "2024 - Present"; empty shows nothing
};
const SKILLS = ["Python","HTML5","CSS3","JavaScript","Web Development","AI Fundamentals","Automation","APIs","Git","GitHub","Adobe Photoshop","Adobe Illustrator","Graphic Design","SEO","Social Media Marketing","C++ Programming","SQL & Database Basics","Object-Oriented Programming (OOP)","Responsive Web Design","Problem-Solving & Debugging"];
// Verified from the public repositories. Add "demo": "https://..." only for a working live demo.
const PROJECTS = [
  {title:"JARVIS 2.0", repo:"https://github.com/aseemraheem/Jarvis-2.0", glyph:"J",
   desc:"An AI-powered personal voice assistant built with Python, automation and intelligent APIs.", tags:["Python","AI","Automation","APIs"]},
  {title:"Website SEO Auditor", repo:"https://github.com/aseemraheem/Website-SEO-Auditor", glyph:"SEO",
   desc:"A lightweight Flask-based tool: enter a website URL and get an automated audit through a simple web interface.", tags:["Python","Flask","HTML","CSS"]},
  {title:"SpendWise", repo:"https://github.com/aseemraheem/spendwise-expense-tracker", glyph:"$",
   desc:"A modern expense tracking web app to manage income, expenses and savings.", tags:["HTML","CSS","JavaScript"]},
  {title:"Resume Analyzer", repo:"https://github.com/aseemraheem/resume-analyzer", glyph:"CV",
   desc:"Scanline: a Flask app that compares a CV with a job description using local rule-based analysis and reports ATS score, matched and missing skills, and suggestions.", tags:["Python","Flask","SQLite","JavaScript"]},
  {title:"Smart Public Safety Alert", repo:"https://github.com/aseemraheem/Smart-Public-Safety-Alert", glyph:"!",
   desc:"An AI-powered public safety alert and prediction system for detecting potential threats and improving emergency response.", tags:["Python","AI"]},
  // NEEDS REVIEW: paste the real repository URL into repo below. Until then the card shows "Link coming soon".
  // Description and tags are based on your brief (C++, TCP, Winsock2); check them against the repo README.
  {title:"Client\u2013Server Communication System", repo:"https://github.com/aseemraheem/Computer-Network-Client-Server", img:"client-server.svg",
   desc:"A C++ client and server application demonstrating client-server communication over TCP using Winsock2.", tags:["C++","TCP/IP","Winsock2"]},
  
];
const ROLES = ["Python Developer","Web Developer","Graphic Designer","Digital Marketing Enthusiast"];
/* ===== END EDIT SECTION ===== */

const $ = (s, r=document) => r.querySelector(s);
const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h !== undefined) e.innerHTML = h; return e; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

try {
  const sg = $("#skills-grid");
  SKILLS.forEach(n => sg.append(el("div","card skill reveal",`<h3>${esc(n)}</h3>`)));
  const pg = $("#projects-grid");
  PROJECTS.forEach(p => {
    const demo = p.demo ? `<a class="btn btn-gold sm" href="${esc(p.demo)}" target="_blank" rel="noopener">Live Demo</a>` : "";
    pg.append(el("article","card proj reveal",
      `<div class="thumb" aria-hidden="true">${p.img?`<img src="${esc(p.img)}" alt="" loading="lazy">`:esc(p.glyph)}</div><div class="proj-b"><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
       <div class="tags">${p.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div>
       <div class="btns">${demo}${p.repo?`<a class="btn btn-line sm" href="${esc(p.repo)}" target="_blank" rel="noopener">View on GitHub</a>`:`<span class="btn btn-line sm off" aria-disabled="true">Link coming soon</span>`}</div></div>`));
  });
  // Education dates and contact links
  $("#edu-dates").textContent = PROFILE.eduDates;
  const links = [["Email","mailto:"+PROFILE.email],["GitHub",PROFILE.github],["Instagram",PROFILE.instagram],["DEV Community",PROFILE.devto]];
  $("#contact-links").innerHTML = links.map(([n,u],i)=>`<a class="btn ${i?"btn-line":"btn-gold"}" href="${esc(u)}" ${u.startsWith("http")?'target="_blank" rel="noopener"':""}>${n}</a>`).join("");
  $("#year").textContent = new Date().getFullYear();
} catch (e) { console.error("Content render failed:", e); }

// Mobile menu
const burger = $("#burger"), menu = $("#menu");
const setMenu = open => { menu.classList.toggle("open", open); burger.setAttribute("aria-expanded", open); };
burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
menu.addEventListener("click", e => { if (e.target.tagName === "A") setMenu(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

// Role text (static if reduced motion)
const roleEl = $("#role");
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let i = 0, j = ROLES[0].length, del = true;
  const tick = () => {
    const w = ROLES[i];
    roleEl.textContent = w.slice(0, j);
    if (del && j > 0) { j--; setTimeout(tick, 40); }
    else if (del) { del = false; i = (i+1) % ROLES.length; setTimeout(tick, 300); }
    else if (j < ROLES[i].length) { j++; setTimeout(tick, 70); }
    else { del = true; setTimeout(tick, 1600); }
  };
  setTimeout(tick, 1600);
}

// Reveal on scroll (content stays visible if IntersectionObserver is missing)
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), {threshold:.12});
  items.forEach(i => io.observe(i));
} else items.forEach(i => i.classList.add("in"));

// Back to top
const toTop = $("#totop");
addEventListener("scroll", () => { toTop.hidden = scrollY < 600; }, {passive:true});


// Highlight the nav link of the section in view
const links = [...document.querySelectorAll("#menu a")];
const secs = links.map(a => document.querySelector(a.getAttribute("href")));
addEventListener("scroll", () => {
  let cur = 0; secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < 140) cur = i; });
  links.forEach((a, i) => a.classList.toggle("active", i === cur));
}, {passive:true});

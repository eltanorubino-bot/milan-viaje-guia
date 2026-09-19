/**
 * Renderiza TRIP_DATA (assets/data.js) dentro de index.html
 * y maneja la interactividad de la página (nav, acordeones,
 * checklist de equipaje).
 */

(function () {
  "use strict";

  // ---------- helpers ----------
  function formatFecha(iso, opts) {
    if (!iso || /00-00$/.test(iso) || iso.indexOf("0000") !== -1) return iso || "—";
    try {
      const d = new Date(iso + "T00:00:00");
      if (isNaN(d.getTime())) return iso;
      return d.toLocaleDateString("es-AR", opts || { day: "numeric", month: "long", year: "numeric" });
    } catch (e) {
      return iso;
    }
  }

  function formatFechaCorta(iso) {
    return formatFecha(iso, { day: "numeric", month: "short" });
  }

  function el(tag, className, html) {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  // ---------- render: hero + resumen ----------
  function renderHero(data) {
    const meta = data.meta || {};
    document.getElementById("heroSubtitulo").textContent = meta.subtitulo || "Rodaje en Milán";
    document.getElementById("heroTitulo").textContent = meta.tituloProyecto || "Guía de viaje";

    const diasRodajeList = (data.agenda || []).filter(d => d.fase === "rodaje");
    const primerDiaRodaje = diasRodajeList[0];
    const ultimoDiaRodaje = diasRodajeList[diasRodajeList.length - 1];

    let fechas = meta.ciudad || "—";
    if (meta.fechaInicio && meta.fechaFin) {
      fechas = `${formatFechaCorta(meta.fechaInicio)} – ${formatFecha(meta.fechaFin)} · ${meta.ciudad || ""}`;
      if (primerDiaRodaje && ultimoDiaRodaje) {
        fechas += ` · Rodaje: ${formatFechaCorta(primerDiaRodaje.fecha)} – ${formatFechaCorta(ultimoDiaRodaje.fecha)}`;
      }
    }
    document.getElementById("heroFechas").textContent = fechas;

    const diasRodaje = (data.agenda || []).filter(d => d.fase === "rodaje").length;
    const stats = [
      { label: "🎬 Días de rodaje", value: diasRodaje + " días" },
      { label: "🏙️ Ciudad", value: meta.ciudad || "—" },
      { label: "👥 Equipo", value: (meta.equipoCantidad || data.vuelos.length || "—") + " personas" }
    ];
    const wrap = document.getElementById("heroStats");
    stats.forEach(s => {
      const card = el("div", "hero-stat", `<strong>${s.value}</strong>${s.label}`);
      wrap.appendChild(card);
    });

    document.getElementById("footerFecha").textContent = formatFecha(meta.ultimaActualizacion);
    document.getElementById("footerResponsable").textContent = meta.responsable || "—";
  }

  function renderResumen(data) {
    const meta = data.meta || {};
    const grid = document.getElementById("resumenGrid");
    const items = [
      { label: "🎯 Proyecto / cliente", value: meta.tituloProyecto || "—" },
      { label: "📅 Fechas", value: (meta.fechaInicio && meta.fechaFin) ? `${formatFechaCorta(meta.fechaInicio)} – ${formatFechaCorta(meta.fechaFin)}` : "—" },
      { label: "🏠 Alojamiento", value: (data.alojamientos.length || "—") + " confirmados" },
      { label: "📍 Locaciones", value: (data.locaciones.length || "—") + " confirmadas" }
    ];
    items.forEach(i => {
      grid.appendChild(el("div", "stat-card", `<div class="label">${i.label}</div><div class="value">${i.value}</div>`));
    });
    document.getElementById("resumenNota").textContent = meta.notaGeneral || "";
  }

  function renderEquipo(data) {
    const pillsWrap = document.getElementById("equipoPills");
    (data.equipo || []).forEach(p => {
      pillsWrap.appendChild(el("div", "team-pill", `<strong>${p.nombre}</strong><span>${p.rol || ""}</span>`));
    });

    const col = document.getElementById("soporteLocalCol");
    const s = data.soporteLocal;
    if (!s || !s.nombre) { col.style.display = "none"; return; }
    const box = document.getElementById("soporteLocalBox");
    box.innerHTML = `
      <strong>👤 ${s.nombre}</strong><span>${s.rol || ""}</span>
      ${s.telefono ? `<span class="local-support-phone">📞 ${s.telefono}</span>` : ""}
      ${s.notas ? `<span class="local-support-notes">${s.notas}</span>` : ""}
    `;
  }

  // ---------- render: alojamiento ----------
  function renderAlojamiento(data) {
    const wrapFer = document.getElementById("alojamientoCardsFer");
    const wrapGusLucia = document.getElementById("alojamientoCardsGusLucia");
    (data.alojamientos || []).forEach(h => {
      const card = el("div", "card");
      card.innerHTML = `
        <div class="card-head">
          <h3>${h.nombre || "—"}</h3>
          <span class="tag">${formatFechaCorta(h.checkIn)} → ${formatFechaCorta(h.checkOut)}</span>
        </div>
        <div class="card-fields">
          <div class="field"><div class="label">📍 Dirección</div><div class="value">${h.direccion || "—"}</div></div>
          <div class="field"><div class="label">🛎️ Check-in</div><div class="value">${formatFecha(h.checkIn)} · ${h.horaCheckIn || "—"}</div></div>
          <div class="field"><div class="label">🚪 Check-out</div><div class="value">${formatFecha(h.checkOut)} · ${h.horaCheckOut || "—"}</div></div>
          <div class="field"><div class="label">🔖 N° de reserva</div><div class="value">${h.numeroReserva || "—"}</div></div>
          <div class="field"><div class="label">📞 Teléfono</div><div class="value">${h.telefono || "—"}</div></div>
        </div>
        ${h.huespedes && h.huespedes.length ? `<div class="card-guests"><strong>👤 Huéspedes:</strong> ${h.huespedes.join(", ")}</div>` : ""}
        ${h.notas ? `<div class="card-notes">${h.notas}</div>` : ""}
        ${h.mapaUrl ? `<a class="map-link" href="${h.mapaUrl}" target="_blank" rel="noopener">Ver en el mapa →</a>` : ""}
      `;
      const esFer = (h.huespedes || []).some(g => g.includes("Fer"));
      (esFer ? wrapFer : wrapGusLucia).appendChild(card);
    });
  }

  // ---------- render: vuelos ----------
  function renderVuelos(data) {
    const wrap = document.getElementById("vuelosCards");
    (data.vuelos || []).forEach(v => {
      const card = el("div", "card");
      const tramosHtml = (v.tramos || []).map(t => `
        <div class="tramo">
          <span class="tramo-tipo">${(t.tipo || "").startsWith("Vuelta") ? "🛬" : "✈️"} ${t.tipo || ""}</span>
          <div>
            <div class="tramo-route">${t.origen || "—"} → ${t.destino || "—"}</div>
            <div class="tramo-meta">${t.aerolinea || ""} ${t.numeroVuelo || ""} · ${formatFechaCorta(t.fecha)} · ${t.horaSalida || "--:--"} → ${t.horaLlegada || "--:--"}${t.llegaOtroDia ? " (+1 día)" : ""} · ${t.escalas || ""}${t.asiento ? " · 💺 " + t.asiento : ""}</div>
          </div>
        </div>
      `).join("");
      card.innerHTML = `
        <div class="card-head"><h3>${v.pasajero || "—"}</h3></div>
        ${tramosHtml}
      `;
      wrap.appendChild(card);
    });
  }

  // ---------- render: agenda (accordion) ----------
  function renderAgenda(data) {
    const wrap = document.getElementById("agendaAccordion");
    (data.agenda || []).forEach((d, idx) => {
      const item = el("div", "accordion-item" + (idx === 0 ? " open" : ""));
      const rows = (d.bloques || []).map(b => `
        <div class="timeline-row">
          <span class="timeline-time">${b.hora || "--:--"}</span>
          <span>${b.actividad || ""}</span>
        </div>
      `).join("");
      const faseTag = d.fase === "prep"
        ? `<span class="fase-tag fase-prep">🔧 Prep</span>`
        : d.fase === "salida"
          ? `<span class="fase-tag fase-salida">🛫 Salida</span>`
          : `<span class="fase-tag fase-rodaje">🎬 Rodaje</span>`;
      item.innerHTML = `
        <button class="accordion-trigger" type="button">
          <span>
            <span class="accordion-day">🗓️ Día ${d.dia} · ${formatFecha(d.fecha)} ${faseTag}</span>
            <span class="accordion-title">${d.titulo || ""}</span>
          </span>
          <span class="accordion-icon">+</span>
        </button>
        <div class="accordion-panel"><div class="accordion-panel-inner">${rows}${d.notas ? `<div class="accordion-notes">${d.notas}</div>` : ""}</div></div>
      `;
      item.querySelector(".accordion-trigger").addEventListener("click", () => {
        item.classList.toggle("open");
      });
      wrap.appendChild(item);
    });
  }

  // ---------- render: locaciones ----------
  function renderLocaciones(data) {
    const wrap = document.getElementById("locacionesCards");
    (data.locaciones || []).forEach(l => {
      const card = el("div", "card");
      card.innerHTML = `
        <div class="card-head">
          <h3>${l.nombre || "—"}</h3>
          <span class="tag">Día ${l.dia} · ⏰ Llamado ${l.horaLlamado || "--:--"}</span>
        </div>
        <div class="card-fields">
          <div class="field"><div class="label">📍 Dirección</div><div class="value">${l.direccion || "—"}</div></div>
          <div class="field"><div class="label">☎️ Contacto</div><div class="value">${l.contacto || "—"}</div></div>
          <div class="field"><div class="label">📞 Teléfono</div><div class="value">${l.telefonoContacto || "—"}</div></div>
        </div>
        ${l.notas ? `<div class="card-notes">${l.notas}</div>` : ""}
        ${l.mapaUrl ? `<a class="map-link" href="${l.mapaUrl}" target="_blank" rel="noopener">Ver en el mapa →</a>` : ""}
      `;
      wrap.appendChild(card);
    });
  }

  // ---------- render: contactos clave ----------
  function renderContactos(data) {
    const wrap = document.getElementById("contactosCards");
    if (!wrap) return;
    (data.contactosClave || []).forEach(c => {
      const card = el("div", "card");
      card.innerHTML = `
        <div class="card-head">
          <h3>${c.rol || "—"}</h3>
          <span class="tag">${c.dia || ""}</span>
        </div>
        <div class="card-fields">
          <div class="field"><div class="label">👤 Nombre</div><div class="value">${c.nombre || "—"}</div></div>
          <div class="field"><div class="label">📞 Teléfono</div><div class="value">${c.telefono || "—"}</div></div>
        </div>
        ${c.notas ? `<div class="card-notes">${c.notas}</div>` : ""}
      `;
      wrap.appendChild(card);
    });
  }

  // ---------- render: barrio (mapa + puntos de interés) ----------
  function renderBarrio(data) {
    const b = data.barrio;
    if (!b) return;
    const mapWrap = document.getElementById("barrioMap");
    if (mapWrap && b.mapaEmbedUrl) {
      mapWrap.innerHTML = `<iframe src="${b.mapaEmbedUrl}" width="100%" height="360" style="border:0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa del barrio — ${b.direccionBase || ''}"></iframe>`;
    }
    const grid = document.getElementById("barrioGrid");
    if (grid) {
      (b.puntos || []).forEach(p => {
        const card = el("div", "poi-card");
        card.innerHTML = `
          <div class="poi-categoria">${p.categoria || ""}</div>
          <div class="poi-nombre">${p.nombre || ""}</div>
          <div class="poi-distancia">${p.distancia || ""}</div>
          ${p.notas ? `<div class="poi-notas">${p.notas}</div>` : ""}
        `;
        grid.appendChild(card);
      });
    }
    if (b.mapaUrl) {
      const link = document.getElementById("barrioMapLink");
      if (link) link.href = b.mapaUrl;
    }
  }

  // ---------- render: clima ----------
  // El pronóstico en sí lo muestra el widget en vivo de 3BMeteo (ver index.html).
  // Acá solo se agrega contexto general y la recomendación de qué llevar.
  function renderClima(data) {
    const c = data.clima || {};
    const box = document.getElementById("climaBox");
    if (c.epoca) {
      box.appendChild(el("div", "field", `<div class="label">📅 Época</div><div class="value">${c.epoca}</div>`));
    }
    if (c.recomendacion) {
      box.appendChild(el("div", "card-notes", c.recomendacion));
    }
  }

  // ---------- checklist con persistencia local (try/catch: si el
  // navegador bloquea localStorage, la página igual funciona) ----------
  function loadChecked() {
    try {
      return JSON.parse(localStorage.getItem("milan2026_checklist") || "{}");
    } catch (e) {
      return {};
    }
  }
  function saveChecked(state) {
    try {
      localStorage.setItem("milan2026_checklist", JSON.stringify(state));
    } catch (e) { /* no-op */ }
  }

  function renderChecklist(data) {
    const wrap = document.getElementById("checklistBox");
    const checked = loadChecked();
    (data.checklist || []).forEach((group, gi) => {
      const box = el("div", "checklist-group");
      box.appendChild(el("h4", null, group.categoria));
      (group.items || []).forEach((item, ii) => {
        const key = `${gi}-${ii}`;
        const isChecked = !!checked[key];
        const label = el("label", "checklist-item" + (isChecked ? " checked" : ""));
        label.innerHTML = `<input type="checkbox" ${isChecked ? "checked" : ""}><span>${item}</span>`;
        label.querySelector("input").addEventListener("change", (e) => {
          checked[key] = e.target.checked;
          label.classList.toggle("checked", e.target.checked);
          saveChecked(checked);
        });
        box.appendChild(label);
      });
      wrap.appendChild(box);
    });
  }

  // ---------- nav: mobile toggle + scroll-spy ----------
  function setupNav() {
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("mainNav");
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => nav.classList.remove("open"));
    });

    const links = Array.from(nav.querySelectorAll("a"));
    const sections = links
      .map(a => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = "#" + entry.target.id;
            links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === id));
          }
        });
      }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });
      sections.forEach(s => observer.observe(s));
    }
  }

  // ---------- init ----------
  document.addEventListener("DOMContentLoaded", () => {
    if (typeof TRIP_DATA === "undefined") {
      document.body.innerHTML = "<p style='padding:40px;font-family:sans-serif'>No se pudo cargar assets/data.js</p>";
      return;
    }
    renderHero(TRIP_DATA);
    renderResumen(TRIP_DATA);
    renderEquipo(TRIP_DATA);
    renderAlojamiento(TRIP_DATA);
    renderBarrio(TRIP_DATA);
    renderVuelos(TRIP_DATA);
    renderAgenda(TRIP_DATA);
    renderLocaciones(TRIP_DATA);
    renderContactos(TRIP_DATA);
    renderClima(TRIP_DATA);
    renderChecklist(TRIP_DATA);
    setupNav();
  });
})();

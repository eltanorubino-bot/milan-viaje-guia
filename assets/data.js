/**
 * ============================================================
 *  DATOS DEL VIAJE — Milán 2026
 * ============================================================
 *  Este es el ÚNICO archivo que el equipo necesita editar.
 *  No toquen index.html ni style.css salvo que quieran
 *  cambiar el diseño.
 *
 *  Instrucciones rápidas:
 *  - Reemplacen los valores de ejemplo (marcados como "—" o
 *    con texto entre [corchetes]) por los datos reales.
 *  - Si agregan o sacan una persona, un vuelo, un día de
 *    agenda o una locación, respeten la misma estructura
 *    (mismos campos) que ya está en cada array.
 *  - Las fechas van en formato "YYYY-MM-DD" para que ordenen
 *    bien; se muestran formateadas en pantalla.
 *  - Guarden el archivo y recarguen la página para ver los
 *    cambios. No hace falta tocar nada más.
 * ============================================================
 */

const TRIP_DATA = {

  // ------------------------------------------------------------------
  // 1. INFO GENERAL DEL VIAJE
  // ------------------------------------------------------------------
  meta: {
    tituloProyecto: "YTECH",
    subtitulo: "Rodaje en Milán — Paradise Films × YTECH",
    ciudad: "Milán, Italia",
    fechaInicio: "2026-10-15",   // YYYY-MM-DD — llegada a Milán
    fechaFin: "2026-10-22",      // YYYY-MM-DD — checkout más tardío (el de Fer)
    equipoCantidad: 3,           // cuántas personas viajan
    ultimaActualizacion: "2026-09-18",
    responsable: "Fer Rubino — Paradise Films & Content",
    notaGeneral: "Pendiente de confirmar: direcciones exactas de las locaciones de rodaje y el teléfono de la anfitriona Adele (Airbnb lo habilita 48 h antes del check-in)."
  },

  // Equipo que viaja desde Buenos Aires
  equipo: [
    { nombre: "Fer Rubino", rol: "Productor" },
    { nombre: "Lucía Valdemoros", rol: "Directora" },
    { nombre: "Agustín Barrutia", rol: "Director de fotografía" }
  ],

  // Soporte local en Milán (no viaja, ya está en la ciudad)
  soporteLocal: {
    nombre: "Pietro Fierri",
    rol: "Soporte local de producción",
    telefono: "+39 348 733 9658",
    notas: "Contacto en Milán para locaciones, permisos y logística en terreno."
  },

  // ------------------------------------------------------------------
  // 2. ALOJAMIENTO
  // Un objeto por hotel/alojamiento (puede haber más de uno si el
  // equipo se divide, o si cambian de hotel a mitad de viaje).
  // ------------------------------------------------------------------
  alojamientos: [
    {
      nombre: "BePlace Garibaldi Suites (Studio)",
      direccion: "Corso Garibaldi 72/1, Milán, 00191, Italia",
      checkIn: "2026-10-15",
      checkOut: "2026-10-16",
      horaCheckIn: "15:00–23:00",
      horaCheckOut: "11:00",
      numeroReserva: "Confirmación hotel 7862429 · Booking ID 9021804373932",
      telefono: "+39 349 671 9725",
      mapaUrl: "",
      huespedes: [
        "Fer Rubino"
      ],
      notas: "Solo para la noche del 15/10 (llegada) — al día siguiente se pasa al Exclusive Luxury Apartment de Corso Garibaldi 55. WiFi gratis incluido. Política de cancelación: sin reembolso."
    },
    {
      nombre: "Exclusive Luxury Apartment — 2 min to Metro (Brera)",
      direccion: "Corso Garibaldi 55, Milán, Lombardía 20121, Italia",
      checkIn: "2026-10-16",
      checkOut: "2026-10-22",
      horaCheckIn: "15:00",
      horaCheckOut: "11:00",
      numeroReserva: "HMMT4AWC8Z",
      telefono: "+39 351 911 8176",
      mapaUrl: "https://www.google.com/maps/search/?api=1&query=Corso+Garibaldi+55,+20121+Milano,+Italia",
      huespedes: [
        "Fer Rubino"
      ],
      notas: "Anfitriona: Alessia · Coanfitrión: Riccardo. Máx. 2 huéspedes, no se permiten mascotas ni fiestas/eventos."
    },
    {
      nombre: "Brera Design Apartment / Corso Garibaldi",
      direccion: "Corso Garibaldi 51, Milán, Lombardía 20121, Italia",
      checkIn: "2026-10-16",
      checkOut: "2026-10-21",
      horaCheckIn: "13:00",
      horaCheckOut: "11:00",
      numeroReserva: "HM4DCN93SC",
      telefono: "[Pendiente — Airbnb habilita el teléfono/instrucciones de acceso 48 h antes del check-in]",
      mapaUrl: "https://www.google.com/maps/search/?api=1&query=Corso+Garibaldi+51,+20121+Milano,+Italia",
      huespedes: [
        "Lucía Valdemoros",
        "Agustín Barrutia"
      ],
      notas: "Anfitriona: Adele. Máx. 3 huéspedes, no se permiten mascotas, horario de silencio 22:00–8:00. No se puede circular en auto particular por Corso Garibaldi (solo taxis) — el estacionamiento pago más cercano se indica en el manual de la casa."
    }
  ],

  // ------------------------------------------------------------------
  // 3. PASAJES / VUELOS
  // Un objeto por persona con sus tramos (ida y vuelta como mínimo).
  // ------------------------------------------------------------------
  vuelos: [
    {
      pasajero: "Fer Rubino",
      tramos: [
        {
          tipo: "Ida (tramo 1)",
          aerolinea: "Lufthansa (LH 511)",
          numeroVuelo: "LH 511",
          fecha: "2026-10-14",
          origen: "Buenos Aires — Ezeiza (EZE, T. Pistarini)",
          horaSalida: "16:35",
          destino: "Frankfurt (FRA, T1)",
          horaLlegada: "10:55",
          llegaOtroDia: true,
          escalas: "Conexión en Frankfurt (2h30m) con LH 274 a Milán",
          asiento: "Premium Economy"
        },
        {
          tipo: "Ida (tramo 2)",
          aerolinea: "Lufthansa (LH 274)",
          numeroVuelo: "LH 274",
          fecha: "2026-10-15",
          origen: "Frankfurt (FRA, T1)",
          horaSalida: "13:25",
          destino: "Milán — Linate (LIN)",
          horaLlegada: "14:40",
          escalas: "Llega a Milán 15/10",
          asiento: "Economy"
        },
        {
          tipo: "Vuelta (tramo 1)",
          aerolinea: "Air Dolomiti (LH 277)",
          numeroVuelo: "LH 277",
          fecha: "2026-10-22",
          origen: "Milán — Linate (LIN)",
          horaSalida: "18:15",
          destino: "Frankfurt (FRA, T1)",
          horaLlegada: "19:35",
          escalas: "Conexión en Frankfurt (2h05m) con LH 510 a Buenos Aires",
          asiento: "Economy"
        },
        {
          tipo: "Vuelta (tramo 2)",
          aerolinea: "Lufthansa (LH 510)",
          numeroVuelo: "LH 510",
          fecha: "2026-10-22",
          origen: "Frankfurt (FRA, T1)",
          horaSalida: "21:40",
          destino: "Buenos Aires — Ezeiza (EZE, T1A)",
          horaLlegada: "06:25",
          llegaOtroDia: true,
          escalas: "Llega a Buenos Aires 23/10",
          asiento: "Economy"
        }
      ]
    },
    {
      pasajero: "Lucía Valdemoros",
      // Llega unos días antes del rodaje y se vuelve unos días después —
      // esas noches extra en Milán no están en esta guía (a pedido de Fer).
      tramos: [
        {
          tipo: "Ida (tramo 1)",
          aerolinea: "LATAM (LA 8033)",
          numeroVuelo: "LA 8033",
          fecha: "2026-10-12",
          origen: "Buenos Aires (Aeroparque)",
          horaSalida: "12:55",
          destino: "São Paulo (Guarulhos)",
          horaLlegada: "15:35",
          escalas: "Conecta con LA 8072 a Milán"
        },
        {
          tipo: "Ida (tramo 2)",
          aerolinea: "LATAM (LA 8072)",
          numeroVuelo: "LA 8072",
          fecha: "2026-10-12",
          origen: "São Paulo (Guarulhos)",
          horaSalida: "18:05",
          destino: "Milán (Malpensa)",
          horaLlegada: "10:15",
          llegaOtroDia: true,
          escalas: "Llega 13/10 a Milán",
          asiento: "16E / 16D (compartido con Agustín)"
        },
        {
          tipo: "Vuelta (tramo 1)",
          aerolinea: "LATAM (LA 8073)",
          numeroVuelo: "LA 8073",
          fecha: "2026-10-25",
          origen: "Milán (Malpensa)",
          horaSalida: "12:10",
          destino: "São Paulo (Guarulhos)",
          horaLlegada: "20:10",
          escalas: "Conecta con LA 8130 a Buenos Aires",
          asiento: "17C / 17B (compartido con Agustín)"
        },
        {
          tipo: "Vuelta (tramo 2)",
          aerolinea: "LATAM (LA 8130)",
          numeroVuelo: "LA 8130",
          fecha: "2026-10-25",
          origen: "São Paulo (Guarulhos)",
          horaSalida: "22:15",
          destino: "Buenos Aires (Ezeiza)",
          horaLlegada: "01:15",
          llegaOtroDia: true,
          escalas: "Llega 26/10 a Buenos Aires"
        }
      ]
    },
    {
      pasajero: "Agustín Barrutia",
      // Mismo itinerario y reserva que Lucía (viajan juntos).
      tramos: [
        {
          tipo: "Ida (tramo 1)",
          aerolinea: "LATAM (LA 8033)",
          numeroVuelo: "LA 8033",
          fecha: "2026-10-12",
          origen: "Buenos Aires (Aeroparque)",
          horaSalida: "12:55",
          destino: "São Paulo (Guarulhos)",
          horaLlegada: "15:35",
          escalas: "Conecta con LA 8072 a Milán"
        },
        {
          tipo: "Ida (tramo 2)",
          aerolinea: "LATAM (LA 8072)",
          numeroVuelo: "LA 8072",
          fecha: "2026-10-12",
          origen: "São Paulo (Guarulhos)",
          horaSalida: "18:05",
          destino: "Milán (Malpensa)",
          horaLlegada: "10:15",
          llegaOtroDia: true,
          escalas: "Llega 13/10 a Milán",
          asiento: "16E / 16D (compartido con Lucía)"
        },
        {
          tipo: "Vuelta (tramo 1)",
          aerolinea: "LATAM (LA 8073)",
          numeroVuelo: "LA 8073",
          fecha: "2026-10-25",
          origen: "Milán (Malpensa)",
          horaSalida: "12:10",
          destino: "São Paulo (Guarulhos)",
          horaLlegada: "20:10",
          escalas: "Conecta con LA 8130 a Buenos Aires",
          asiento: "17C / 17B (compartido con Lucía)"
        },
        {
          tipo: "Vuelta (tramo 2)",
          aerolinea: "LATAM (LA 8130)",
          numeroVuelo: "LA 8130",
          fecha: "2026-10-25",
          origen: "São Paulo (Guarulhos)",
          horaSalida: "22:15",
          destino: "Buenos Aires (Ezeiza)",
          horaLlegada: "01:15",
          llegaOtroDia: true,
          escalas: "Llega 26/10 a Buenos Aires"
        }
      ]
    }
  ],

  // ------------------------------------------------------------------
  // 4. AGENDA DEL VIAJE (día a día)
  // "bloques" es la lista de actividades de ese día, en orden.
  // "notas" (opcional) es texto libre con detalles extra del día.
  // ------------------------------------------------------------------
  // Agenda de rodaje: 16 al 21 de octubre. Agenda oficial del broker
  // trip recibida por mail — actualizada el 19/09.
  // (La llegada a Milán es el 15/10 — ver nota general arriba y el
  // alojamiento marcado "pendiente" en la sección de Alojamiento.)
  agenda: [
    {
      dia: 1,
      fecha: "2026-10-16",
      titulo: "Scouting y chequeo de equipos",
      fase: "prep",
      bloques: [
        { hora: "08:00", actividad: "🥐 Desayuno y salida del alojamiento" },
        { hora: "09:00", actividad: "🔎 Scouting de locaciones con Pietro Fierri" },
        { hora: "13:00", actividad: "🍽️ Almuerzo" },
        { hora: "14:00", actividad: "🔎 Continúa scouting / cierre de locaciones" },
        { hora: "17:00", actividad: "🎥 Chequeo y prueba de equipos de filmación" },
        { hora: "18:00", actividad: "🗒️ Revisión de plan de rodaje del equipo" },
        { hora: "20:00", actividad: "🎬 Wrap del día" }
      ]
    },
    {
      dia: 2,
      fecha: "2026-10-17",
      titulo: "Rodaje YY + entrevista British Butler Institute",
      fase: "rodaje",
      bloques: [
        { hora: "TBD", actividad: "🎥 Rodaje de Yamal Yidios (YY)" },
        { hora: "TBD", actividad: "🎙️ Entrevista — British Butler Institute" }
      ],
      notas: "🚫 Los brokers no participan este día. 👥 Asisten: Yamal Yidios, Ani, Sarah y el equipo de producción de Paradise. 📍 Locación: villa privada — a confirmar. ⏰ Horario: a confirmar."
    },
    {
      dia: 3,
      fecha: "2026-10-18",
      titulo: "Llegada de brokers + recepción de bienvenida",
      fase: "rodaje",
      bloques: [
        { hora: "Durante el día", actividad: "🛬 Llegada de los brokers a Milán" },
        { hora: "Durante el día", actividad: "🏨 Check-in en el Bulgari Hotel Milano" },
        { hora: "Durante el día", actividad: "🎁 Welcome package en cada habitación antes de la llegada" },
        { hora: "18:00–20:00", actividad: "🥂 Recepción de bienvenida — Bulgari Hotel Milano" }
      ],
      notas: "🎤 Anfitrión: Andrew Kraynak (Yamal no asiste). Formato: unas palabras de bienvenida, hors d'oeuvres pasados, cócteles, vino y bebidas sin alcohol — pensado para quienes prefieran una noche liviana; quienes quieran cenar después pueden organizarlo por su cuenta. 📝 Por confirmar: horario exacto, venue dentro del Bulgari, menú de comida y bebida, palabras de bienvenida, y contenido/timing del welcome package (a cargo de Sofia)."
    },
    {
      dia: 4,
      fecha: "2026-10-19",
      titulo: "Bienvenida Ytech + preview 75 Broadway",
      fase: "rodaje",
      bloques: [
        { hora: "09:00", actividad: "🎤 Sesión privada Ytech — Bulgari Hotel (Yamal Yidios, ~1 h)" },
        { hora: "10:00–10:15", actividad: "☕ Pausa" },
        { hora: "10:30", actividad: "🚗 Salida del Bulgari Hotel hacia ACPV" },
        { hora: "10:45", actividad: "📍 Llegada a ACPV" },
        { hora: "11:00–13:00", actividad: "🏛️ Experiencia ACPV — charla con Yamal Yidios, Patricia Viel y (posiblemente) Antonio Citterio" },
        { hora: "13:00", actividad: "🚗 Salida hacia B&B Italia Factory (snack liviano en el traslado)" },
        { hora: "~14:00", actividad: "🏭 Experiencia B&B Italia Factory — recorrido + almuerzo liviano/sandwiches (1.5–2 h aprox.)" },
        { hora: "~16:00", actividad: "🚗 Salida hacia Milán" },
        { hora: "Tarde", actividad: "🏨 Regreso al Bulgari Hotel" },
        { hora: "Noche", actividad: "🌙 Noche libre — sin cena organizada" }
      ],
      notas: "🎤 Sesión Ytech: bienvenida y agradecimiento a los brokers, su importancia para Ytech y 1428 Brickell, preview anticipado de 75 Broadway, visión de Yamal para el proyecto, posicionamiento y experiencia de vida, visión arquitectónica y relación con el equipo de diseño. 🏛️ ACPV (moderador: Andrew Kraynak — a confirmar): bienvenida, charla informal entre Yamal, Patricia (y Antonio), relación Ytech-ACPV, colaboración de diseño entre 1428 Brickell y 75 Broadway, overview del proyecto, filosofía de diseño, recorrido por las oficinas (orden a confirmar), Q&A. ☕ Catering: café, agua y bocados livianos. 🏭 B&B Italia: duración sujeta al feedback de Yamal tras su visita previa."
    },
    {
      dia: 5,
      fecha: "2026-10-20",
      titulo: "Día de partners y artesanía — Arclinea + cantera + cena de cierre",
      fase: "rodaje",
      bloques: [
        { hora: "08:00", actividad: "🚗 Salida del Bulgari Hotel hacia Caldogno (evaluar adelantar a 7:30)" },
        { hora: "~10:30–11:00", actividad: "🏭 Llegada a Caldogno — Experiencia Arclinea Factory" },
        { hora: "~12:30", actividad: "🍽️ Almuerzo privado en el showroom de Arclinea — chef en vivo" },
        { hora: "Tarde", actividad: "⛏️ Visita a la cantera/cueva de travertino en Val Liona (40 min de Arclinea)" },
        { hora: "Tarde", actividad: "🚗 Regreso a Milán — llegada estimada al Bulgari Hotel ~18:00" },
        { hora: "20:00", actividad: "🕯️ Cena de cierre — Villa Necchi (a confirmar)" }
      ],
      notas: "🏭 Arclinea: recorrido de fábrica, detrás de escena de producción, ingeniería y artesanía, foco en cocinas y elementos a medida relevantes para las residencias de Ytech. ⛏️ Cantera de travertino: extracción y selección de piedra, conexión entre material crudo, fabricación y las residencias terminadas, oportunidad de foto y filmación. 🕯️ Cena de cierre en Villa Necchi Campiglio (a confirmar): al aire libre a la luz de las velas, una mesa larga, ~30–35 invitados, música en vivo, cena y vino. 📝 Por confirmar: disponibilidad de Villa Necchi, locación exacta al aire libre, plan de lluvia, menú y vino, música en vivo, decoración/velas, transporte, palabras/brindis, fotografía y filmación."
    },
    {
      dia: 6,
      fecha: "2026-10-21",
      titulo: "Salidas",
      fase: "salida",
      bloques: [
        { hora: "Durante el día", actividad: "🛫 Salida de los brokers desde Milán" },
        { hora: "Durante el día", actividad: "🚕 Traslados individuales al aeropuerto según cada vuelo" },
        { hora: "Durante el día", actividad: "🛫 Salidas de Ytech / producción según corresponda" }
      ]
    }
  ],

  // ------------------------------------------------------------------
  // 5. LOCACIONES DE RODAJE / CALL SHEETS
  // Una entrada por locación. "dia" debe coincidir con el número
  // de día de la sección de agenda de arriba.
  // ------------------------------------------------------------------
  locaciones: [
    {
      dia: 2,
      nombre: "🎥 Villa privada — rodaje YY + British Butler Institute",
      direccion: "[A confirmar]",
      horaLlamado: "[Pendiente — horario TBD]",
      contacto: "Pietro Fierri",
      telefonoContacto: "[+39 ...]",
      mapaUrl: "",
      notas: "Brokers no participan este día."
    },
    {
      dia: 3,
      nombre: "🏨 Bulgari Hotel Milano — recepción de bienvenida",
      direccion: "Bulgari Hotel Milano, Milán",
      horaLlamado: "[Pendiente]",
      contacto: "Pietro Fierri",
      telefonoContacto: "[+39 ...]",
      mapaUrl: "",
      notas: "Anfitrión: Andrew Kraynak. Venue exacto dentro del hotel a confirmar."
    },
    {
      dia: 4,
      nombre: "🏛️ ACPV + 🏭 B&B Italia Factory",
      direccion: "[A confirmar — ACPV Milán / B&B Italia Factory]",
      horaLlamado: "09:00 (sesión Ytech en el Bulgari Hotel)",
      contacto: "Pietro Fierri",
      telefonoContacto: "[+39 ...]",
      mapaUrl: "",
      notas: "Incluye sesión Ytech en el Bulgari Hotel, visita a ACPV y a la fábrica de B&B Italia."
    },
    {
      dia: 5,
      nombre: "🏭 Arclinea Factory + ⛏️ Cantera de travertino + 🕯️ Villa Necchi",
      direccion: "Caldogno (Arclinea) / Val Liona (cantera) / Villa Necchi Campiglio, Milán",
      horaLlamado: "08:00 (salida del Bulgari Hotel)",
      contacto: "Pietro Fierri",
      telefonoContacto: "[+39 ...]",
      mapaUrl: "",
      notas: "Día de traslados largos: Caldogno, Val Liona y cena de cierre en Villa Necchi (a confirmar)."
    }
  ],

  // ------------------------------------------------------------------
  // 5b. BARRIO — zona del alojamiento (Corso Garibaldi / Brera-Moscova)
  // Mapa centrado en el alojamiento + puntos de interés a ~500m.
  // Verificado por búsqueda, pero conviene reconfirmar horarios in situ.
  // ------------------------------------------------------------------
  barrio: {
    direccionBase: "Corso Garibaldi 55 y 51, 20121 Milán, Italia (ambos Airbnb)",
    mapaEmbedUrl: "https://maps.google.com/maps?saddr=Corso+Garibaldi+55,+20121+Milano,+Italia&daddr=Corso+Garibaldi+51,+20121+Milano,+Italia&dirflg=w&z=17&output=embed",
    mapaUrl: "https://www.google.com/maps/dir/?api=1&origin=Corso+Garibaldi+55,+20121+Milano,+Italia&destination=Corso+Garibaldi+51,+20121+Milano,+Italia&travelmode=walking",
    puntos: [
      {
        categoria: "🚇 Metro",
        nombre: "Moscova (M2, línea verde)",
        distancia: "~5 min caminando",
        notas: "Estación más cercana. Lanza (M2) y Montenapoleone (M3) también quedan a un paseo corto."
      },
      {
        categoria: "💊 Farmacia",
        nombre: "Farmacia del Garibaldi",
        distancia: "Corso Garibaldi 83 — ~3 min caminando",
        notas: "Sobre la misma calle que los alojamientos."
      },
      {
        categoria: "🛒 Supermercado",
        nombre: "Carrefour Express — Corso Garibaldi 49",
        distancia: "~2 min caminando",
        notas: "El más cercano; también hay otras opciones chicas sobre la misma calle."
      },
      {
        categoria: "🍽️ Dónde comer",
        nombre: "Corso Garibaldi y alrededores (Brera / Moscova)",
        distancia: "A pasos de los alojamientos",
        notas: "Calle con muchos bares, trattorias y restaurantes — conviene mirar el mapa y elegir sobre la marcha."
      }
    ]
  },

  // ------------------------------------------------------------------
  // 5c. CONTACTOS CLAVE — sonidista, maquilladora y contacto de locación
  // del sábado 17/10. Fer va a pasar los teléfonos reales más adelante.
  // ------------------------------------------------------------------
  contactosClave: [
    {
      rol: "🎙️ Sonidista",
      nombre: "[Pendiente]",
      telefono: "[Pendiente]",
      dia: "Sábado 17 de octubre",
      notas: ""
    },
    {
      rol: "💄 Maquilladora",
      nombre: "[Pendiente]",
      telefono: "[Pendiente]",
      dia: "Sábado 17 de octubre",
      notas: ""
    },
    {
      rol: "📍 Contacto de la locación",
      nombre: "[Pendiente]",
      telefono: "[Pendiente]",
      dia: "Sábado 17 de octubre",
      notas: "Locación del día 2 de la agenda (Rodaje YY + entrevista British Butler Institute)."
    }
  ],

  // ------------------------------------------------------------------
  // 6. CLIMA
  // Datos orientativos del clima típico de Milán en la fecha del
  // viaje. Se pueden ajustar a mano o dejar como referencia general.
  // ------------------------------------------------------------------
  // El pronóstico día a día lo muestra el widget en vivo de 3BMeteo
  // (se actualiza solo, ver la sección Clima del sitio). Acá va
  // contexto general y la recomendación de qué llevar.
  clima: {
    epoca: "Mediados de octubre — otoño",
    recomendacion: "Llevar campera de abrigo resistente al agua y capas — el clima de otoño en Milán puede cambiar en el día."
  },

  // ------------------------------------------------------------------
  // 7. QUÉ LLEVAR — checklist de equipaje
  // Agrupado por categoría. El check se guarda en el navegador de
  // cada persona (no se comparte entre miembros del equipo).
  // ------------------------------------------------------------------
  checklist: [
    {
      categoria: "📄 Documentación",
      items: [
        "Pasaporte (vigencia mínima 6 meses)",
        "Seguro de viaje",
        "Reservas de hotel y vuelos impresas o descargadas",
        "Tarjetas de crédito / efectivo en euros"
      ]
    },
    {
      categoria: "🎥 Equipo de filmación",
      items: [
        "[Cámara principal + body de respaldo]",
        "[Lentes]",
        "[Baterías cargadas + cargadores]",
        "[Tarjetas de memoria + lector]",
        "[Trípode / estabilizador]",
        "[Audio: micrófonos, grabadora]",
        "[Adaptadores de enchufe europeo (tipo C/F)]",
        "[Discos rígidos para backup]"
      ]
    },
    {
      categoria: "🎒 Personal",
      items: [
        "Ropa de abrigo por capas",
        "Calzado cómodo para caminar / estar de pie muchas horas",
        "Cargador portátil (power bank)",
        "Medicación personal"
      ]
    }
  ]

};

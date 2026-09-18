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
                  telefono: "[+39 ...]",
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
                          mapaUrl: "",
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
                          mapaUrl: "",
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
                                            asiento: "Premium Economy",
                                            codigoReserva: "88J5L8"
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
                                            asiento: "Economy",
                                            codigoReserva: "88J5L8"
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
                                            asiento: "Economy",
                                            codigoReserva: "88J5L8"
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
                                            asiento: "Economy",
                                            codigoReserva: "88J5L8"
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
                                            escalas: "Conecta con LA 8072 a Milán",
                                            codigoReserva: "YSFWTN"
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
                                            asiento: "16E / 16D (compartido con Agustín)",
                                            codigoReserva: "YSFWTN"
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
                                            asiento: "17C / 17B (compartido con Agustín)",
                                            codigoReserva: "YSFWTN"
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
                                            escalas: "Llega 26/10 a Buenos Aires",
                                            codigoReserva: "YSFWTN"
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
                                            escalas: "Conecta con LA 8072 a Milán",
                                            codigoReserva: "YSFWTN"
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
                                            asiento: "16E / 16D (compartido con Lucía)",
                                            codigoReserva: "YSFWTN"
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
                                            asiento: "17C / 17B (compartido con Lucía)",
                                            codigoReserva: "YSFWTN"
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
                                            escalas: "Llega 26/10 a Buenos Aires",
                                            codigoReserva: "YSFWTN"
                                }
                                      ]
                      }
                        ],

                        // ------------------------------------------------------------------
                        // 4. AGENDA DEL VIAJE (día a día)
                        // "bloques" es la lista de actividades de ese día, en orden.
                        // ------------------------------------------------------------------
                        // Agenda de rodaje: 16 al 20 de octubre, de 8:00 a 20:00 cada día.
                        // (La llegada a Milán es el 15/10 — ver nota general arriba y el
                        // alojamiento marcado "pendiente" en la sección de Alojamiento.)
                        agenda: [
                          {
                                  dia: 1,
                                  fecha: "2026-10-16",
                                  titulo: "Scouting y chequeo de equipos",
                                  fase: "prep",
                                  bloques: [
                                    { hora: "08:00", actividad: "Desayuno y salida del alojamiento" },
                                    { hora: "09:00", actividad: "Scouting de locaciones con Pietro Fierri" },
                                    { hora: "13:00", actividad: "Almuerzo" },
                                    { hora: "14:00", actividad: "Continúa scouting / cierre de locaciones" },
                                    { hora: "17:00", actividad: "Chequeo y prueba de equipos de filmación" },
                                    { hora: "18:00", actividad: "Revisión de plan de rodaje del equipo" },
                                    { hora: "20:00", actividad: "Wrap del día" }
                                          ]
                          },
                          {
                                  dia: 2,
                                  fecha: "2026-10-17",
                                  titulo: "Rodaje — Entrevistas",
                                  fase: "rodaje",
                                  bloques: [
                                    { hora: "08:00", actividad: "Call time" },
                                    { hora: "08:30", actividad: "Traslado a locación de entrevistas" },
                                    { hora: "09:30", actividad: "Rodaje: entrevistas" },
                                    { hora: "13:00", actividad: "Almuerzo" },
                                    { hora: "14:00", actividad: "Continúa rodaje: entrevistas" },
                                    { hora: "20:00", actividad: "Wrap del día" }
                                          ]
                          },
                          {
                                  dia: 3,
                                  fecha: "2026-10-18",
                                  titulo: "Rodaje — Grupo de vendedores (actividad 1)",
                                  fase: "rodaje",
                                  bloques: [
                                    { hora: "08:00", actividad: "Call time" },
                                    { hora: "08:30", actividad: "Traslado a locación" },
                                    { hora: "09:30", actividad: "Rodaje: grupo de vendedores — actividad 1" },
                                    { hora: "13:00", actividad: "Almuerzo" },
                                    { hora: "14:00", actividad: "Continúa rodaje" },
                                    { hora: "20:00", actividad: "Wrap del día" }
                                          ]
                          },
                          {
                                  dia: 4,
                                  fecha: "2026-10-19",
                                  titulo: "Rodaje — Grupo de vendedores (actividad 2)",
                                  fase: "rodaje",
                                  bloques: [
                                    { hora: "08:00", actividad: "Call time" },
                                    { hora: "08:30", actividad: "Traslado a locación" },
                                    { hora: "09:30", actividad: "Rodaje: grupo de vendedores — actividad 2" },
                                    { hora: "13:00", actividad: "Almuerzo" },
                                    { hora: "14:00", actividad: "Continúa rodaje" },
                                    { hora: "20:00", actividad: "Wrap del día" }
                                          ]
                          },
                          {
                                  dia: 5,
                                  fecha: "2026-10-20",
                                  titulo: "Rodaje — Grupo de vendedores (actividad 3)",
                                  fase: "rodaje",
                                  bloques: [
                                    { hora: "08:00", actividad: "Call time" },
                                    { hora: "08:30", actividad: "Traslado a locación" },
                                    { hora: "09:30", actividad: "Rodaje: grupo de vendedores — actividad 3" },
                                    { hora: "13:00", actividad: "Almuerzo" },
                                    { hora: "14:00", actividad: "Continúa rodaje" },
                                    { hora: "20:00", actividad: "Wrap del día · último día de rodaje" }
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
                                      nombre: "[Locación — entrevistas]",
                                      direccion: "[Dirección completa, Milán]",
                                      horaLlamado: "[Ej: 07:00]",
                                      contacto: "Pietro Fierri",
                                      telefonoContacto: "[+39 ...]",
                                      mapaUrl: "",
                                      notas: "[Ej: permisos necesarios, acceso de carga, estacionamiento, restricciones de horario/ruido, punto de encuentro]"
                              },
                              {
                                      dia: 3,
                                      nombre: "[Locación — grupo de vendedores, actividad 1]",
                                      direccion: "[Dirección completa, Milán]",
                                      horaLlamado: "[Ej: 07:00]",
                                      contacto: "Pietro Fierri",
                                      telefonoContacto: "[+39 ...]",
                                      mapaUrl: "",
                                      notas: "[Notas de la locación]"
                              },
                              {
                                      dia: 4,
                                      nombre: "[Locación — grupo de vendedores, actividad 2]",
                                      direccion: "[Dirección completa, Milán]",
                                      horaLlamado: "[Ej: 07:00]",
                                      contacto: "Pietro Fierri",
                                      telefonoContacto: "[+39 ...]",
                                      mapaUrl: "",
                                      notas: "[Notas de la locación]"
                              },
                              {
                                      dia: 5,
                                      nombre: "[Locación — grupo de vendedores, actividad 3]",
                                      direccion: "[Dirección completa, Milán]",
                                      horaLlamado: "[Ej: 07:00]",
                                      contacto: "Pietro Fierri",
                                      telefonoContacto: "[+39 ...]",
                                      mapaUrl: "",
                                      notas: "[Notas de la locación]"
                              }
                                ],

                                // ------------------------------------------------------------------
                                // 5b. BARRIO — zona del alojamiento (Corso Garibaldi / Brera-Moscova)
                                // Mapa centrado en el alojamiento + puntos de interés a ~500m.
                                // Verificado por búsqueda, pero conviene reconfirmar horarios in situ.
                                // ------------------------------------------------------------------
                                barrio: {
                                      direccionBase: "Corso Garibaldi 55, 20121 Milán, Italia",
                                      mapaEmbedUrl: "https://maps.google.com/maps?q=Corso+Garibaldi+55,+20121+Milano,+Italia&z=16&output=embed",
                                      mapaUrl: "https://maps.google.com/maps?q=Corso+Garibaldi+55,+20121+Milano,+Italia",
                                      puntos: [
                                        {
                                                  categoria: "Metro",
                                                  nombre: "Moscova (M2, línea verde)",
                                                  distancia: "~5 min caminando",
                                                  notas: "Estación más cercana. Lanza (M2) y Montenapoleone (M3) también quedan a un paseo corto."
                                        },
                                        {
                                                  categoria: "Farmacia",
                                                  nombre: "Farmacia del Garibaldi",
                                                  distancia: "Corso Garibaldi 83 — ~3 min caminando",
                                                  notas: "Sobre la misma calle que los alojamientos."
                                        },
                                        {
                                                  categoria: "Supermercado",
                                                  nombre: "Carrefour Express — Corso Garibaldi 49",
                                                  distancia: "~2 min caminando",
                                                  notas: "El más cercano; también hay otras opciones chicas sobre la misma calle."
                                        },
                                        {
                                                  categoria: "Dónde comer",
                                                  nombre: "Corso Garibaldi y alrededores (Brera / Moscova)",
                                                  distancia: "A pasos de los alojamientos",
                                                  notas: "Calle con muchos bares, trattorias y restaurantes — conviene mirar el mapa y elegir sobre la marcha."
                                        }
                                            ]
                                },

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
                                                  categoria: "Documentación",
                                                  items: [
                                                            "Pasaporte (vigencia mínima 6 meses)",
                                                            "Seguro de viaje",
                                                            "Reservas de hotel y vuelos impresas o descargadas",
                                                            "Tarjetas de crédito / efectivo en euros"
                                                          ]
                                          },
                                          {
                                                  categoria: "Equipo de filmación",
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
                                                  categoria: "Personal",
                                                  items: [
                                                            "Ropa de abrigo por capas",
                                                            "Calzado cómodo para caminar / estar de pie muchas horas",
                                                            "Cargador portátil (power bank)",
                                                            "Medicación personal"
                                                          ]
                                          }
                                            ]

};

              

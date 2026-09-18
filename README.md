# Guía de viaje — Rodaje en Milán 2026

Sitio estático de una sola página para organizar y compartir con el equipo
toda la info del viaje de rodaje: alojamiento, pasajes, agenda día a día,
locaciones/call sheets y clima + checklist de equipaje.

No usa build tools ni frameworks — es HTML + CSS + JS plano, pensado para
publicarse directo con **GitHub Pages**.

## Estructura

```
milan-viaje-guia/
├── index.html          → estructura de la página (no hace falta tocarlo)
├── assets/
│   ├── style.css        → diseño (no hace falta tocarlo)
│   ├── script.js         → lógica de render e interactividad (no hace falta tocarlo)
│   └── data.js           ← ÚNICO archivo que hay que editar con los datos reales
└── README.md
```

## 1. Completar los datos del viaje

Abrí `assets/data.js` con cualquier editor de texto y reemplazá los valores
de ejemplo (marcados entre `[corchetes]` o como `"—"` / `"00:00"`) por la
info real: hotel, vuelos, agenda de cada día, locaciones de rodaje y clima.
El archivo tiene comentarios que explican cada sección.

No hace falta saber programar: es un objeto de JavaScript con listas y
campos de texto. Mientras se respete la estructura (las llaves `{ }` y
comas), se puede editar sin romper nada.

## 2. Ver los cambios en tu computadora

Alcanza con abrir `index.html` en el navegador (doble clic). También podés
correr un servidor local si preferís:

```bash
cd milan-viaje-guia
python3 -m http.server 8000
# luego abrir http://localhost:8000
```

## 3. Deploy automático (ya configurado)

Este repo incluye `.github/workflows/deploy.yml`: un workflow de **GitHub
Actions** que publica el sitio en GitHub Pages automáticamente cada vez que
se hace push a la branch `main`. No hace falta tocar nada manualmente en
Settings después del primer push — el workflow configura Pages solo.

El sitio queda disponible en:
`https://<tu-usuario>.github.io/<nombre-del-repo>/`

Podés ver el progreso del deploy en la pestaña **Actions** del repo — tarda
1–2 minutos.

## 4. Actualizar la guía más adelante

Cualquier cambio (nueva locación, vuelo reprogramado, etc.) se hace editando
`assets/data.js` (localmente, o directo en la web de GitHub con el lápiz ✏️
de "Edit file"), y luego:

```bash
git add assets/data.js
git commit -m "Actualiza datos del viaje"
git push
```

O si se edita desde la web de GitHub, alcanza con hacer "Commit changes"
directamente ahí. En los dos casos, el workflow de Actions se dispara solo
y en un par de minutos el sitio publicado queda actualizado — no hay que
tocar nada en Settings ni volver a "activar" Pages.

## Notas

El checklist de equipaje ("Clima & qué llevar") guarda los checks marcados en el navegador de cada persona (no se comparte entre miembros del equipo ni queda registrado en ningún servidor). El botón "Imprimir / guardar como PDF" genera una versión limpia para imprimir o mandar como PDF, útil como call sheet físico. El diseño se adapta automáticamente a modo claro/oscuro según la configuración del sistema de quien lo mire.

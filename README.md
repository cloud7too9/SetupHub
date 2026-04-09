# SetupHub

<!-- Netlify Badge -->
[![Netlify Status](https://api.netlify.com/api/v1/badges/DEINE-SITE-ID/deploy-status)](https://app.netlify.com/sites/DEIN-SITE-NAME/deploys)

**[→ Live Demo](https://DEIN-SITE-NAME.netlify.app)**

Mobiler UI-Baukasten + Demo-App für strukturierte Setups.

## Features

- **21 Komponenten** — Button, Card, Badge, Input, Toggle, Tabs, Chips, Dropdown, Avatar, ListItem, Divider, SearchField, Sheet, Modal, Toast, Progress, Skeleton, EmptyState, LoadingState, ErrorState, IconButton
- **9 Patterns** — Card+Aktionen, Liste+Suche, Formularbereich, Detailkopf, Aktionsleiste, Info-Panel, Statistik-Cards, Avatar-Gruppe, Benachrichtigungen
- **7 Screens** — Dashboard, Detailansicht, Formular, Liste, Profil, Onboarding, Einstellungen
- **Live Theming** — Dark/Light, 8 Akzentfarben, 5 Radius-Stufen, 3 Spacing-Stufen
- **Accessibility** — ARIA-Attribute, Keyboard-Navigation, Skip-Link, Focus-Ringe
- **Responsive** — Mobile-first mit Desktop-Sidebar ab 768px
- **PWA** — Installierbar, Offline-fähig
- **Deeplinks** — Hash-basiertes Routing (`#/components/button`)

## Stack

- React 18 + TypeScript (strict)
- Vite
- Lucide Icons
- Custom Design System (DM Sans + JetBrains Mono)
- Keine externen UI-Bibliotheken

## Starten

```bash
npm install
npm run dev
```

## Struktur

```
src/
  design-system/  Tokens, Themes, Icons (Referenz-Dokumentation)
  ui/             Wiederverwendbare atomare Bausteine
  patterns/       Zusammengesetzte UI-Muster
  features/       SetupHub-spezifische Logik
  screens/        Fertige Seiten
  app/            Layout, Routing, Provider
docs/             Architektur, Richtlinien, Roadmap
```

## Dokumentation

- [Architektur](docs/architecture.md) — Schichtentrennung, Theming, Navigation
- [Komponenten-Richtlinien](docs/component-guidelines.md) — Regeln für neue Bausteine
- [Roadmap](docs/roadmap.md) — Versionshistorie

## Wiederverwendung

`ui/` + `design-system/` + `patterns/` sind projektunabhängig.
Jede Komponente hat einen Export-Button im Katalog mit Kopieranleitung.

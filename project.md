# WG Kitchen API – Project Scope (Version 1)

## Ziel des Projekts

Die WG Kitchen API ist ein eigenständig entwickeltes Backend-Projekt zum Erlernen von Fullstack-Kompetenzen im Bereich:

- Node.js
- TypeScript
- Express
- PostgreSQL
- Prisma
- JWT Authentication
- REST API Design
- CI/CD (GitHub Actions + Auto-Deployment)

Das Projekt wird gezielt als Portfolio-Projekt für eine Junior Fullstack Position entwickelt.

---

## Problemstellung

In einer WG stellt sich regelmäßig die Frage:

> „Wir haben diese Zutaten – was können wir daraus kochen?“

Die Anwendung soll ermöglichen:

- Verwaltung von WG-Mitgliedern
- Verwaltung gemeinsamer Zutaten
- Verwaltung von Rezepten
- Automatische Ermittlung passender Rezepte basierend auf vorhandenen Zutaten

Der Fokus liegt auf sauberer Backend-Architektur, nicht auf UI-Komplexität.

---

## MVP – Version 1

### Authentifizierung

- Registrierung von Usern
- Login mit JWT
- Geschützte API-Routen
- Passwort-Hashing mit bcrypt

### Haushaltslogik (WG)

- User gehören zu einem Household (WG)
- Zutaten sind WG-gebunden

### Zutatenverwaltung

- Zutaten anlegen
- Zutaten abrufen
- Zutaten löschen

### Rezeptverwaltung

- Rezepte anlegen
- Rezepte bearbeiten
- Rezepte mit Zutaten verknüpfen (Many-to-Many)
- Rezepte abrufen

### Matching-Feature (Kernfunktion)

- Endpoint zur Ermittlung von Rezepten, deren Zutaten vollständig in einer gegebenen Zutatenliste enthalten sind

---

## Architekturentscheidungen

### Backend

- Node.js + Express
- TypeScript (strict mode)
- Strukturierte Ordnerarchitektur:
  - routes
  - controllers
  - services
  - middleware

### Datenbank

- PostgreSQL (relational)
- Prisma ORM zur Typsicherheit und Migration

**Begründung:**  
Das Datenmodell enthält klare Many-to-Many-Beziehungen und relationale Abhängigkeiten.

### Auth

- JWT-basierte Authentifizierung
- Middleware zur Token-Verifikation

### API-Stil

- RESTful Struktur
- Klare Status Codes
- Sauberes Error Handling

---

## Entwicklungsstrategie

Das Projekt wird nach folgendem Prinzip entwickelt:

1. Scope definieren
2. Architektur festlegen
3. Minimal Setup
4. Vertical Slice implementieren (Request → DB → Response)
5. Iterativ erweitern
6. Früh CI integrieren
7. Automatisches Deployment einrichten
8. Refactoring & Cleanup

Version 1 ist funktional – nicht perfekt.

---

## CI/CD

### Continuous Integration

- GitHub Actions Workflow
- Automatischer Build bei Push
- TypeScript Build-Validierung

### Continuous Deployment

- Automatisches Deployment via Railway bei Push auf `main`

**Ziel:**  
Reproduzierbare Builds und production-nahe Entwicklung.

---

## Deployment

- Backend Deployment über Railway
- PostgreSQL als Managed Service
- Environment Variables für Secrets

---

## Optionale Erweiterungen (nicht Teil von V1)

- Favoriten-Funktion
- Einkaufslisten-Generator
- Wochenplaner
- Tests erweitern
- Docker-Setup
- Pagination & Filtering

---

## Lernziele

Dieses Projekt dient dazu:

- Relationale Datenmodellierung zu verstehen
- Authentifizierungsmechanismen selbst umzusetzen
- Middleware-Architektur zu begreifen
- CI/CD Grundlagen praktisch anzuwenden
- Produktionsnah zu deployen
- Projektstruktur systematisch aufzubauen

# Entwicklungslog

## TAG 1 – Backend-Grundgerüst

### Ziel

Aufsetzen eines minimalen, sauberen Backend-Fundaments mit:

- Express-Server
- TypeScript-Konfiguration
- klarer Projektstruktur
- Trennung von Entwicklungs- und Produktionsumgebung

---

### Umgesetzt

- Neues GitHub-Repository `wg-kitchen-api`
- Node-Projekt initialisiert (`npm init`)
- Express als Runtime-Dependency installiert
- TypeScript als Dev-Dependency installiert
- `tsconfig.json` bewusst reduziert und konfiguriert:
  - `rootDir: ./src`
  - `outDir: ./dist`
  - `strict: true`
  - `module: commonjs`
- `src/`-Ordner angelegt
- Minimalen Express-Server in `src/server.ts` implementiert
- `GET /` Test-Route erstellt
- Dev-, Build- und Start-Scripts definiert:
  - `dev` → ts-node-dev
  - `build` → tsc
  - `start` → node dist/server.js

Der Server läuft lokal unter `http://localhost:3000`.

---

### Getroffene Entscheidungen & Begründung

**Trennung von `src` und `dist`**  
Klare Unterscheidung zwischen Quellcode (TypeScript) und Build-Output (JavaScript).  
Ermöglicht saubere Production-Deployments.

**TypeScript im Strict Mode**  
Frühe Fehlererkennung und erhöhte Typsicherheit.

**CommonJS statt ESModules (für V1)**  
Stabiler, unkomplizierter Node-Standard ohne zusätzliche Komplexität.

**ts-node-dev für Development**  
Schnelle Iteration durch automatischen Restart ohne manuellen Build-Schritt.

**Getrennte Scripts (dev / build / start)**  
Klare Trennung von Entwicklungs- und Produktionsumgebung.

---

### Erkenntnisse

- Unterschied zwischen Node (Runtime) und Express (Framework)
- Unterschied zwischen dependencies und devDependencies
- Wie TypeScript in JavaScript transpiliert wird
- Wie ein HTTP-Server Requests verarbeitet
- Warum Build-Struktur architektonisch relevant ist
- Warum API und Frontend strikt getrennt gedacht werden müssen

---

### Status

TAG 1 ist abgeschlossen, wenn:

- Der Server lokal läuft
- `GET /` erfolgreich getestet wurde
- Die Projektstruktur bewusst verstanden ist

Mein Fokus lag auf Architekturverständnis.

# Sådan bidrager du

Tusind tak for din interesse i at gøre dette kursus bedre! 🙏

## Måder at bidrage

### 🐛 Rapporter fejl
Fandt du en faktuel fejl, stavefejl eller noget der ikke virker?
1. Tjek først om der findes et eksisterende [issue](../../issues)
2. Hvis ikke, [opret et nyt](../../issues/new) med:
   - Hvilket modul/side?
   - Hvad er forkert?
   - Hvad burde der stå/ske?

### ✏️ Foreslå forbedringer
Har du en idé til en bedre forklaring, nyt eksempel eller ny lektion?
- Åbn en [Discussion](../../discussions) først, så vi kan snakke om det
- Eller send direkte en Pull Request hvis det er en lille ændring

### 🌍 Oversæt
Vi planlægger engelsk oversættelse. Vil du hjælpe?
- Mappestruktur: `modules/01-grundlaeggende/en/index.html`
- Bevar al funktionalitet, oversæt kun tekst
- Tekniske termer: behold dansk i parentes hvor det giver mening

### 🎨 Bidrag med animationer eller diagrammer
- Brug **SVG** (ingen rastergrafik, det skal kunne skaleres)
- Brug CSS-variabler fra `assets/css/main.css` (`--oil`, `--ink`, osv.)
- Hold det enkelt og pædagogisk fremfor smukt
- Test på mobil

### 📚 Tilføj praksiseksempler
Arbejder du med hydraulik? Del:
- Casestudier fra dit arbejde (anonymiseret)
- Almindelige fejl du har set
- Tricks der ikke står i bøgerne

## Process for Pull Requests

1. **Fork** repositoriet
2. Lav en branch: `git checkout -b min-forbedring`
3. Lav dine ændringer — hold dem fokuserede (1 issue = 1 PR)
4. Test lokalt: åbn `index.html` i en browser eller kør `python3 -m http.server 8000`
5. Commit med beskrivende besked: `git commit -m "Tilføj diagram til Modul 4: vingepumpe"`
6. Push og åbn en Pull Request

## Stilguide

### Tekst
- **Tone:** Direkte, venlig, ikke akademisk. Tal til læseren ("du", ikke "man" når muligt)
- **Niveau:** Forklar tekniske begreber første gang de bruges
- **Længde:** Lektioner bør være 5-15 min læsetid

### Kode
- Indrykning: 2 spaces
- Brug semantisk HTML (`<section>`, `<article>`, ikke kun `<div>`)
- CSS: brug eksisterende variabler i stedet for hardkodede farver
- Vanilla JS — ingen frameworks, ingen build steps

### Filer
- HTML: `kebab-case.html`
- CSS: `kebab-case.css`
- Billeder: `kebab-case.svg/jpg/png`
- Mapper: `01-tal-foran-for-rakkefolge/`

## Spørgsmål?

Åbn en [Discussion](../../discussions) eller skriv i et issue. Vi hjælper gerne.

---

🚀 **Tak fordi du gør hydraulik mere tilgængelig for alle!**

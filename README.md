# 🔧 Hydraulik — Interaktivt Kursus / Interactive Hydraulics Course

> 🇩🇰 Et frit tilgængeligt, interaktivt kursus i hydraulik, baseret på "Hydraulik" (Erhvervsskolernes Forlag, 2013). Bygget til at gøre svære koncepter let forståelige gennem animationer, diagrammer og interaktive simuleringer.
>
> 🇬🇧 A freely available, interactive hydraulics course based on the Danish textbook "Hydraulik" (Erhvervsskolernes Forlag, 2013). Built to make difficult concepts easy to understand through animations, diagrams, and interactive simulations.

[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://yourusername.github.io/hydraulik-course)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Bilingual](https://img.shields.io/badge/Lang-DA%20%2F%20EN-orange)](#)

**🌐 The site is bilingual — switch between Danish 🇩🇰 and English 🇬🇧 with the DA/EN toggle in the top right.**

## 🎯 Hvem er det for?

- **EUD-studerende:** Automatikfagtekniker, entreprenørmaskinmekaniker, landbrugsmaskinmekaniker, skibsmontør
- **Selvstuderende:** Lær hydraulik fra bunden i dit eget tempo
- **Praktikere:** Servicetekniker, konstruktør, vedligeholdelse — brug det som opslagsværk
- **Undervisere:** Genbrug frit i din undervisning (CC BY-SA)

## 📚 Kursusstruktur — 12 moduler

| # | Modul | Tid | Sværhedsgrad |
|---|---|---|---|
| 1 | [Grundlæggende hydraulik](modules/01-grundlaeggende/) | 2t | ⭐ Begynder |
| 2 | [Hydraulikvæsker og urenheder](modules/02-vaesker-urenheder/) | 2t | ⭐ Begynder |
| 3 | [Filtre og oliepleje](modules/03-filtre/) | 1,5t | ⭐⭐ Let øvet |
| 4 | [Pumper](modules/04-pumper/) | 3t | ⭐⭐ Let øvet |
| 5 | [Hydrauliske motorer](modules/05-motorer/) | 2t | ⭐⭐ Let øvet |
| 6 | [Cylindre](modules/06-cylindre/) | 2t | ⭐⭐ Let øvet |
| 7 | [Trykventiler](modules/07-trykventiler/) | 2,5t | ⭐⭐⭐ Øvet |
| 8 | [Retningsventiler](modules/08-retningsventiler/) | 3t | ⭐⭐⭐ Øvet |
| 9 | [Strømventiler](modules/09-stroemventiler/) | 2t | ⭐⭐⭐ Øvet |
| 10 | [Proportional og elektronik](modules/10-proportional-elektronik/) | 3t | ⭐⭐⭐⭐ Avanceret |
| 11 | [Akkumulatorer og styring](modules/11-akkumulatorer/) | 2t | ⭐⭐⭐ Øvet |
| 12 | [Måleteknik og vedligehold](modules/12-maaleteknik-vedligehold/) | 2t | ⭐⭐ Let øvet |

**Samlet:** ~27 timer effektiv læring

## 🎮 Interaktive værktøjer

- 🧮 **[Beregnere](interactive/calculators.html)** — Cylinderkraft, oliestrøm, rørdiameter, effekt
- 🎬 **[Animerede komponenter](interactive/animations.html)** — Se hvordan pumper, ventiler og cylindre arbejder
- 🔌 **[Kredsløbssimulator](interactive/circuit-sim.html)** — Byg dit eget hydraulikkredsløb
- 📝 **[Symbol-quiz](quizzes/symbols.html)** — Lær ISO-symboler
- 🛠️ **[Fejlfindingsguide](interactive/troubleshooting.html)** — Diagnosticer almindelige fejl

## 🚀 Kom i gang

### Online (anbefalet)
Besøg **[kursussiden](https://yourusername.github.io/hydraulik-course)** og start med Modul 1.

### Lokalt
```bash
git clone https://github.com/yourusername/hydraulik-course.git
cd hydraulik-course
# Åbn index.html i din browser — ingen build-proces nødvendig
```

### Brug en simpel webserver (anbefalet for fuld funktionalitet)
```bash
python3 -m http.server 8000
# Åbn http://localhost:8000
```

## 📖 Hvordan kurset er bygget op

Hvert modul indeholder:

1. **📺 Intro-video/animation** — Hurtigt overblik
2. **📘 Teori** — Lette forklaringer med billeder
3. **🎨 Infografik** — Visuelt overblik
4. **🎬 Animationer** — Se komponenter i bevægelse
5. **🧮 Interaktive beregnere** — Prøv selv
6. **❓ Quiz** — Test din viden
7. **🔧 Praksisøvelser** — Anvend i den virkelige verden

## 🤝 Bidrag

Vi elsker bidrag! Se [CONTRIBUTING.md](CONTRIBUTING.md) for retningslinjer.

Måder at hjælpe:
- 🐛 Rapporter fejl via [Issues](../../issues)
- ✏️ Foreslå forbedringer eller nye emner
- 🌍 Hjælp med oversættelse (engelsk under udvikling)
- 🎨 Bidrag med animationer eller diagrammer
- 📚 Tilføj praksiseksempler fra dit arbejde

## 📜 Licens

Indholdet er udgivet under [Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)](LICENSE.md).
Du må frit kopiere, ændre og dele materialet — også kommercielt — så længe du krediterer og deler under samme licens.

Kode er udgivet under [MIT License](LICENSE-CODE.md).

## 🙏 Kreditering

Baseret på:
> **"Hydraulik"** (1. udgave, 2013)
> Erhvervsskolernes Forlag · ISBN: 978-87-7082-333-3
> Revideret af Kaj Holmegaard i samarbejde med Erhvervsskolerne Aars

Med materiale fra Sauer-Danfoss, Hydac, Parker Hannifin Danmark, Bosch Rexroth, Hydra-Grene, C.C. Jensen, og H.E.W.

## 📬 Kontakt

- **Issues:** [GitHub Issues](../../issues)
- **Diskussioner:** [GitHub Discussions](../../discussions)

---

⭐ **Synes du om projektet? Giv det en stjerne!**

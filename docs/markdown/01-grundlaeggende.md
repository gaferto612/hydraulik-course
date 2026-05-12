# Modul 1: Grundlæggende hydraulik / Module 1: Hydraulics Fundamentals

> 🇩🇰 [Dansk](#dansk) · 🇬🇧 [English](#english) · 🎮 [Interaktiv version](../../modules/01-grundlaeggende/index.html)

---

## Dansk

### 🎯 Læringsmål
Efter dette modul kan du:
- Forklare Pascals lov og hvorfor den er fundamentet for al hydraulik
- Regne på hydraulisk kraftforøgelse
- Skelne mellem laminar og turbulent strømning
- Beskrive forskellen mellem hydraulisk og el-mekanisk effekt

### 📜 Hydraulikkens historie

Ordet **hydraulik** stammer fra det græske *hydor* — vand. Det betød oprindeligt alle lovmæssigheder ved mediet vand.

**Vigtige milepæle:**
- **Antikken** — Ordet *hydraulik* opstår
- **~1900** — Vandhydrauliske drejebroer (nogle stadig i drift!)
- **1906** — Janney bygger første oliehydrauliske system
- **1922** — Hans Thoma udvikler første variable pumpe
- **1930** — Harry Vickers opfinder pilotstyret trykaflastning
- **1994** 🇩🇰 — Dansk firma (Danfoss) lancerer vandhydraulik til levnedsmidler

> 💡 **Vidste du?** Et 15 kW el-motor vejer ca. 100 kg. En tilsvarende hydraulisk motor vejer kun 12 kg.

### 🌊 Væskers egenskaber

Hydraulik virker fordi væsker har tre nøgleegenskaber:

1. **Ingen ydre form** — fylder den tilgængelige beholder
2. **Næsten ikke-komprimerbar** — selv ved 1000 bar reduceres volumen kun 1-2%
3. **Tryk fra højde** — `p = h · ρ · g`

### ⭐ Pascals lov — KERNEKONCEPT

> "Trykket i et hvilket som helst punkt i en statisk væske er ens i alle retninger, og det udøver samme kraft på lige store arealer."
> — Blaise Pascal, 17. århundrede

**Konsekvens:** Hvis du trykker olien sammen ét sted, er trykket *nøjagtig det samme* overalt i systemet.

### 💪 Hydraulisk kraftforøgelse

Når trykket er det samme overalt:

```
p = F₁/A₁ = F₂/A₂
```

**Hvis A₂ er 100× større end A₁ → F₂ er 100× større end F₁**

⚠️ Men husk: Energi kan ikke skabes. Det store stempel bevæger sig 100× *langsommere*. Du har byttet hastighed for kraft.

### 🌀 Strømningsformer

| Type | Beskrivelse | Brug |
|---|---|---|
| **Laminar** | Molekyler i parallelle lag | ✅ Tilstræbes |
| **Turbulent** | Hvirvlende kaotiske baner | ❌ Undgås |

**Maksimal anbefalet oliehastighed:**
- Sugerør: 0,6 – 1,5 m/s
- Trykrør (normal): 2 – 6 m/s
- Trykrør (kort): op til 9 m/s

### 🧮 Eksempel-beregning

En donkraft har:
- Lille stempel: A₁ = 10 cm²
- Stort stempel: A₂ = 500 cm²
- Du trykker med: F₁ = 100 N

**Beregning:**
```
Tryk i systemet: p = 100/10 = 10 N/cm² = 10 bar
Kraft fra stort stempel: F₂ = 10 × 500 = 5000 N
Kraftforøgelse: 5000/100 = 50×
```

Du løfter ~500 kg ved at trykke med 10 kg kraft! 🎉

---

## English

### 🎯 Learning Objectives
After this module, you can:
- Explain Pascal's law and why it's the foundation of all hydraulics
- Calculate hydraulic force amplification
- Distinguish between laminar and turbulent flow
- Describe the difference between hydraulic and electromechanical power

### 📜 History of Hydraulics

The word **hydraulics** comes from the Greek *hydor* — water. It originally meant all the laws governing water as a medium.

**Key milestones:**
- **Antiquity** — The word *hydraulics* emerges
- **~1900** — Water hydraulic swing bridges (some still operating!)
- **1906** — Janney builds the first oil hydraulic system
- **1922** — Hans Thoma develops the first variable pump
- **1930** — Harry Vickers invents the pilot-operated relief valve
- **1994** 🇩🇰 — Danish company (Danfoss) launches water hydraulics for food industry

> 💡 **Did you know?** A 15 kW electric motor weighs ~100 kg. An equivalent hydraulic motor weighs only 12 kg.

### 🌊 Fluid Properties

Hydraulics works because fluids have three key properties:

1. **No outer shape** — fills the available container
2. **Nearly incompressible** — even at 1000 bar, volume reduces only 1–2%
3. **Pressure from height** — `p = h · ρ · g`

### ⭐ Pascal's Law — CORE CONCEPT

> "The pressure at any point in a static fluid is the same in all directions and exerts the same force on equal areas."
> — Blaise Pascal, 17th century

**Implication:** If you compress oil at one point, the pressure is *exactly the same* everywhere in the system.

### 💪 Hydraulic Force Amplification

When pressure is constant everywhere:

```
p = F₁/A₁ = F₂/A₂
```

**If A₂ is 100× larger than A₁ → F₂ is 100× larger than F₁**

⚠️ But remember: Energy cannot be created. The large piston moves 100× *slower*. You've traded speed for force.

### 🌀 Flow Types

| Type | Description | Use |
|---|---|---|
| **Laminar** | Molecules in parallel layers | ✅ Desired |
| **Turbulent** | Swirling chaotic paths | ❌ Avoid |

**Maximum recommended oil velocity:**
- Suction line: 0.6 – 1.5 m/s
- Pressure line (normal): 2 – 6 m/s
- Pressure line (short): up to 9 m/s

### 🧮 Example Calculation

A jack has:
- Small piston: A₁ = 10 cm²
- Large piston: A₂ = 500 cm²
- You push with: F₁ = 100 N

**Calculation:**
```
System pressure: p = 100/10 = 10 N/cm² = 10 bar
Force from large piston: F₂ = 10 × 500 = 5000 N
Force amplification: 5000/100 = 50×
```

You lift ~500 kg by pushing with 10 kg force! 🎉

---

## 📚 Næste / Next

→ [Modul 2: Hydraulikvæsker / Hydraulic Fluids](02-vaesker-urenheder.md)
→ [🎮 Try the interactive version](../../modules/01-grundlaeggende/index.html)

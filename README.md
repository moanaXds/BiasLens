# 🔍 BiasLens — Explainable AI News Analysis System

**BiasLens** is an Explainable AI system that detects **political bias**, **emotional manipulation**, and **framing patterns** in news articles using structured linguistic and rhetorical analysis. It performs a comprehensive **7-layer analysis** and produces measurable, transparent, evidence-backed bias assessments.

> ⚠️ BiasLens does **not** insert political opinions. All analysis relies strictly on textual evidence from the provided article.

---

## 📸 Screenshots

### Hero Section
The landing page features a surreal professional design with animated SVG neural network tentacles, hand-lettered typography, and a warm vintage color palette.

### Analysis Dashboard
After submitting an article, BiasLens presents results through an asymmetric card grid with interactive visualizations, a circular bias gauge, and color-coded severity indicators.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎭 **Emotional Tone Analysis** | Classifies tone (Neutral → Highly Emotional), identifies dominant emotions (Fear, Anger, Hope, etc.), and scores intensity 0–100 |
| 🔎 **Loaded Language Detection** | Extracts absolutist words, demonizing labels, value-loaded adjectives, and speculative claims with severity ratings |
| 🖼️ **Framing & Narrative Analysis** | Detects one-sided coverage, selective statistics, headline bias, and structural influence on reader perception |
| ⚖️ **Balance & Omission Check** | Assesses opposing viewpoints, source diversity, and evidence quality with a 0–100 balance score |
| 🏳️ **Political Leaning Detection** | Keyword-based ideology signal detection classifying Left / Right / Center / Mixed with confidence percentage |
| 📢 **Propaganda Technique ID** | Identifies fear appeals, strawman arguments, false dilemmas, bandwagon language, ad hominem, whataboutism, and more |
| 📊 **Quantitative Bias Scoring** | Weighted formula: Emotion (25%) + Language (20%) + Framing (20%) + Imbalance (20%) + Propaganda (15%) |

### Additional Capabilities
- **Long Article Support** — Articles >1200 words are automatically sectioned (Intro / Body / Conclusion) with per-section analysis and aggregated scoring
- **Short Article Awareness** — Articles <300 words get capped confidence with a warning notice
- **JSON Output** — Toggle structured JSON output matching the exact specification for programmatic use
- **Neutral Rewrite Suggestions** — Actionable recommendations to reduce bias

---

## 🎨 Design

BiasLens uses a **"Surreal Professional"** aesthetic:

- **Color Palette**: Sage green `#9CAF88`, warm cream `#F5F1E8`, dusty terracotta `#C17A5F`, rust red `#B85450`
- **Typography**: Caveat (display headers), Inter (body), Roboto Mono (data/scores)
- **Textures**: Subtle grain overlay via CSS pseudo-elements for a vintage film photography feel
- **Animations**: Animated SVG neural tentacle hero, gauge fill animations, card hover lifts, loading spinners
- **Layout**: Asymmetric CSS Grid (cards span 1 or 2 columns), generous whitespace (60-80px spacing)
- **Responsive**: Desktop asymmetric grid → tablet 2-column → mobile single column

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- **No build tools, no server, no dependencies required**

### Run Locally
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Paste a news article and click **"Analyze Article"**

```
📁 BiasLens/
├── index.html    ← Open this file in your browser
├── style.css     ← Design system & styles
├── app.js        ← Analysis engine & UI controller
├── icons.js      ← Hand-drawn SVG icons
└── README.md     ← You are here
```

---

## 🧠 How the Analysis Engine Works

### Architecture

The application is powered by two main JavaScript classes:

#### `AnalysisEngine`
The core NLP-like analysis engine using keyword dictionaries and linguistic heuristics:

| Component | Method | Approach |
|-----------|--------|----------|
| Emotion Detection | `_analyzeEmotionalTone()` | Scans against 130+ emotion keywords across 8 categories, measures density per word count |
| Loaded Language | `_detectLoadedLanguage()` | Regex matching against 5 pattern categories (absolutist, demonizing, value-loaded, emotion-trigger, speculative) |
| Framing Analysis | `_analyzeFraming()` | Structural analysis of headline bias, counterpoint presence, stat sourcing, quote distribution |
| Balance Check | `_checkBalance()` | Heuristic scoring based on opposing viewpoint markers, source citations, and unsupported claim density |
| Political Leaning | `_detectPoliticalLeaning()` | Signal ratio analysis across 30+ left-leaning and 30+ right-leaning keyword dictionaries |
| Propaganda Detection | `_detectPropaganda()` | Pattern matching for 8 propaganda techniques (fear appeal, strawman, false dilemma, etc.) |
| Bias Scoring | `_calculateBiasScore()` | Weighted aggregation: `(E×0.25) + (L×0.20) + (F×0.20) + ((100−B)×0.20) + (P×0.15)` |

#### `UIController`
Handles DOM manipulation, rendering, gauge animations, JSON formatting, and user interactions.

### Bias Scale

| Score | Category | Meaning |
|-------|----------|---------|
| 0–20  | Highly Neutral | Objective, fact-based reporting |
| 21–40 | Slight Bias | Minor persuasive elements present |
| 41–60 | Moderate Bias | Noticeable framing and emotional cues |
| 61–80 | Strong Bias | Significant manipulation patterns |
| 81–100 | Highly Partisan | Heavily loaded rhetoric and propaganda |

### Emotional Intensity Scale

| Score | Level | Description |
|-------|-------|-------------|
| 0–20  | Objective | Factual tone with no emotional cues |
| 21–40 | Mild | Subtle persuasive language |
| 41–60 | Noticeable | Clear emotional framing present |
| 61–80 | Strong | Language significantly shapes reader response |
| 81–100 | Highly Charged | Content is heavily loaded with emotional rhetoric |

---

## 📄 Output Format

### Human-Readable Report
The UI displays a structured dashboard with:
- Summary panel with circular bias gauge
- 7 analysis cards in an asymmetric grid
- Score bars, severity indicators, and a political spectrum slider
- Neutral rewrite suggestions

### Structured JSON
Click **"Toggle JSON Output"** to view the machine-readable output:

```json
{
  "tone": "Highly Emotional",
  "emotional_intensity_score": 76,
  "dominant_emotions": ["Fear", "Anger", "Moral Superiority"],
  "loaded_language": [
    {
      "phrase": "catastrophic",
      "severity": "Medium",
      "reason": "Value-loaded adjective conveying strong judgment"
    }
  ],
  "framing_observations": ["..."],
  "balance_score": 45,
  "propaganda_techniques": ["Fear Appeal", "False Dilemma"],
  "political_leaning": "Right-Leaning",
  "confidence_percentage": 43,
  "bias_score": 76,
  "bias_category": "Strong Bias",
  "weight_explanation": "Emotion(100×25%) + Language(64×20%) + ..."
}
```

---

## 🛡️ Rules & Principles

1. **No speculation** — Analysis is based only on text present in the article
2. **Evidence-based** — Every finding is supported by quoted textual evidence
3. **Politically neutral** — The system does not insert or promote any political opinion
4. **Transparent scoring** — The weighted formula and component scores are fully visible
5. **Honest uncertainty** — Low evidence → low confidence, stated explicitly

---

## 🧰 Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Semantic page structure |
| CSS3 | Design system, animations, responsive layout |
| Vanilla JavaScript | Analysis engine, DOM manipulation |
| Google Fonts (CDN) | Caveat, Inter, Roboto Mono |
| SVG | Hand-drawn icons, animated hero tentacles, circular gauge |

**Zero dependencies. No frameworks. No build step.**

---

## 📱 Responsive Design

| Breakpoint | Layout |
|-----------|--------|
| Desktop (>1024px) | 3-column asymmetric grid |
| Tablet (768–1024px) | 2-column grid |
| Mobile (<768px) | Single column stack |

---

## 📝 License

This project is for educational purposes. Built as part of a 4th Semester Tools course project.

---

<p align="center">
  <strong>BiasLens</strong> — Analyze with transparency. Question everything.
</p>

# Website Fixes — vvdb.co.uk

Instructions for implementing text corrections identified by CV cross-check. Each item lists the page, the exact current text, and the exact replacement text. Make no other content changes.

---

## 1. Homepage (`/`) — About → Education → Delft University of Technology

**Find:**
```
GPA: 7.0/10.0 | ACT: 33/36 (98th percentile, 100% in Science)
```

**Replace with:**
```
GPA: 7.1/10.0 | ACT: 33/36 (98th percentile, 100% in Science)
```

---

## 2. Homepage (`/`) — About → Education → Harrow School

**Find:**
```
A-Level Maths (A*), Physics (A), Design & Technology (A), Economics (A) | IGCSEs: 9 A*s, 1 A
```

**Replace with:**
```
A-Level Maths (A*), Physics (A), Design, Technology & Engineering (A), Economics (A) | IGCSEs: 9 A*s, 1 A
```

---

## 3. Homepage (`/`) — About → Education → Harrow School (extracurricular bullet)

**Find:**
```
School Ski Team (invited to England training camp), Royal Marines CCF, accepted to UChicago 'Emerging World Leaders' program and Imperial College London STEM program, among others
```

**Replace with:**
```
Selected for ESSKIA National Ski Squad, Royal Marines CCF, accepted to UChicago 'Emerging World Leaders' program and Imperial College London STEM program, among others
```

---

## 4. Homepage (`/`) — Hero section, research bullet

**Find:**
```
Research: Study on the Effect of Atmospheric Turbulence on Free Space Optical Communications (awaiting publication)
```

**Replace with:**
```
Research: Study on the Effect of Atmospheric Turbulence on Free Space Optical Communications (currently under review by our university project supervisor)
```

---

## 5. Homepage (`/`) — About → Experience → Global Equity Management

**Find:**
```
Crafted DCF model to value RTX Corp. and produced comprehensive report on investment thesis, presented to leadership with recommendation weak buy
```

**Replace with:**
```
Crafted DCF model to value RTX Corp. and produced comprehensive report on investment thesis, presented to leadership with recommendation HOLD
```

---

## 6. Project page `/projects/fsoc-research` — Key Features

**Find:**
```
Research paper produced, aiming to publish in a peer-reviewed journal
```

**Replace with:**
```
Research paper produced, currently under review by our university project supervisor
```

---

## 7. Homepage (`/`) — Hero image positioning

The hero image (plane) is currently off-center. Adjust its horizontal position so the plane is more centered in its frame — nudge the image (or its `object-position` / container offset) slightly to the **left**. Locate the hero image component/CSS on the homepage and adjust positioning incrementally, checking visually after each change until the plane appears centered.

---

## Explicitly out of scope — do not implement

- Do **not** add the "UAV Engineering Intern" role to the Experience section — keep this off the site for now.
- No other content on the site should be changed. All items not listed above are confirmed correct as-is.

# Website Update Handoff — vvdb.co.uk
**Prepared for:** AI agent responsible for vvdb.co.uk  
**Date:** June 2026  
**Priority:** Complete before Sol.One interview

---

## Overview

This document specifies all changes required across vvdb.co.uk to bring the website in line with the updated CV and accurate project status. Changes are grouped by page and marked as either **CRITICAL** (factually incorrect or out of date) or **IMPROVEMENT** (accuracy or presentation upgrade).

---

## Page 1: Homepage (vvdb.co.uk)

### About → Education section

**IMPROVEMENT — Add relevant modules under TU Delft**

Current content:
```
Delft University of Technology
BSc Aerospace Engineering | Netherlands | 2024 - 2028
- GPA: 7.0/10.0
- ACT: 33/36 (98th percentile, 100% in Science)
- See projects section
```

Replace with:
```
Delft University of Technology
BSc Aerospace Engineering | Netherlands | 2024 - 2028
- GPA: 7.0/10.0 | ACT: 33/36 (98th percentile, 100% in Science)
- Relevant modules: Sub- and Supersonic Aerodynamics, Low Speed Wind Tunnel 
  Testing, Flight Mechanics & Propulsion, Intro to Aerospace Engineering
- Research: Study on the Effect of Atmospheric Turbulence on Free Space Optical 
  Communications (awaiting publication)
```

---

### About → Skills section

**IMPROVEMENT — Add ArduPilot to engineering tools**

Current:
```
CAD (CATIA, Fusion 360, Solidworks, Onshape), XFLR5, 3D printing, Wind tunnel testing
```

Replace with:
```
CAD (CATIA, Fusion 360, Solidworks, Onshape), XFLR5, ArduPilot/ArduPlane, 
3D printing (LW-PLA), Wind tunnel testing
```

---

## Page 2: UAS Project Page (vvdb.co.uk/projects/uas-design-project)

### Hero description

**CRITICAL — AUW is out of date**

Current:
```
The aircraft is 1.4m wingspan, V-tail pusher configuration with an AUW of ~2.5kg.
```

Replace with:
```
The aircraft is a 1.4m wingspan, V-tail pusher configuration. AUW has been reduced 
from 2.5kg to 1.8kg across design iterations through reduction of printed wall 
thickness from 2 perimeters to 1.
```

---

### Flight Testing Results section

**CRITICAL — Second flight test has been completed; page says it is still planned**

Current text:
```
The initial flight test resulted in the loss of the aircraft, most likely due to 
a combination of pilot error and suboptimal center of gravity placement. The 
aircraft was recovered and underwent a redesign to address these issues, namely 
by reducing wall thickness of printed parts to increase the contribution of the 
battery to the overall center of gravity. Second flight test is planned for May 2026.
```

Replace with:
```
### Flight Test 1
The initial flight test resulted in the loss of the aircraft. Root cause analysis 
identified two contributing factors: the thrust vector from the motor acting below 
the centre of gravity, creating a pitch-up moment; and the cambered V-tail aerofoil 
generating downward lift, compounding the pitch-up tendency. The aircraft was 
recovered for redesign.

### Design Fixes (v2)
Two targeted changes were made in response:
- Motor mount tilted to align the thrust vector directly through the centre of gravity
- V-tail aerofoil changed from cambered to symmetrical section to eliminate 
  zero-deflection downforce

### Flight Test 2
The second flight test confirmed the aerodynamic fixes — the aircraft flew wings-level 
immediately after launch, validating both design changes. The flight ended in a crash 
attributed to insufficient launch speed and throttle input rather than any airframe 
issue. This was a launch procedure failure, not a design failure.

### Current Status
v3 redesign is in progress, targeting improved launch procedure, onboard data logging 
via SD card, and multi-angle camera coverage for post-flight analysis.
```

---

### Project Details sidebar

**CRITICAL — Status is out of date**

Current:
```
Status: Redesign in Progress
```

Replace with:
```
Status: v3 Redesign in Progress — 2 flight tests completed
```

---

### Technical Implementation section

**IMPROVEMENT — GPS/RTH claim is overstated**

Current:
```
The onboard GPS allows fully autonomous waypoint navigation, enabling the aircraft 
to execute pre-planned missions without manual input. It also allows for 
return-to-home functionality in case of signal loss or low battery.
```

Replace with:
```
The flight controller supports GPS-assisted stabilisation and return-to-home 
functionality. Full autonomous waypoint navigation is planned for a future test 
campaign following completion of stabilised flight validation.
```

Reason: Autonomous waypoint navigation has not been successfully demonstrated in flight. Claiming it as a working capability is inaccurate and could be challenged in an interview.

---

### Lessons Learned section

**IMPROVEMENT — Currently a placeholder**

Current:
```
The project is still a work in progress.
```

Replace with:
```
The two flight test campaigns reinforced the importance of systematic root cause 
analysis over iterative trial and error. The v1 pitch-up failure was initially 
attributed to pilot error, but closer analysis revealed two independent aerodynamic 
causes — both of which were resolved in v2. The v2 wings-level flight confirmed 
this diagnosis. Future test campaigns will include onboard data logging and 
multi-angle video to reduce reliance on visual observation for post-flight analysis.
```

---

## Summary of changes by priority

| Priority | Page | Change |
|----------|------|--------|
| CRITICAL | UAS page | Update AUW from ~2.5kg to 1.8kg |
| CRITICAL | UAS page | Replace "second flight test planned" with full two-campaign account |
| CRITICAL | UAS page | Update status sidebar |
| CRITICAL | UAS page | Soften GPS/autonomous navigation claim |
| IMPROVEMENT | Homepage | Add relevant modules under TU Delft |
| IMPROVEMENT | Homepage | Add research paper under TU Delft |
| IMPROVEMENT | Homepage | Add ArduPilot/LW-PLA to skills |
| IMPROVEMENT | UAS page | Expand Lessons Learned section |

---

*No changes required to the FSOC Link Analysis page or Internship Scanner page.*

---

## Page 3: UAS Project Page — New Section: XFLR5 Stability Analysis

**ADD** a new section to the UAS project page after "Technical Implementation" and before "Flight Testing Results". Title it:

### Stability Analysis (XFLR5 — v3 Airframe)

Add the following content. Images of the XFLR5 simulation should be placed alongside the relevant subsections — suggested placements are noted.

---

*Analysis type: Type 7 Stability Analysis, VLM2 (lifting surfaces only). Condition: level flight at α = 0.10°, V = 17.43 m/s. Model mass: 1.386 kg (primary structural components and battery; excludes flight controller, FPV system, and minor hardware). Full AUW is approximately 1.8 kg.*

#### Static Stability

The neutral point (NP) is located at 0.078 m and the centre of pressure (CP) at 0.053 m aft of the reference point, giving a static margin of **11.8% MAC** (MAC = 0.211 m). This confirms the aircraft is statically stable in pitch — the NP lies ahead of the CP, meaning any pitch disturbance generates a restoring moment. An 11.8% margin sits comfortably within the 5–15% range typically targeted for stable fixed-wing UAVs: sufficient to resist disturbances without being so large as to make the aircraft sluggish to control inputs.

This is supported by the pitch stability derivative **Cmα = -0.531**, which is negative as required — indicating the aircraft generates a nose-down pitching moment with increasing angle of attack, passively returning it to trim. Directional stability is confirmed by **Cnβ = +0.042** and roll stability by **Clβ = -0.015**, a small dihedral effect consistent with a flat-wing design.

*[SUGGESTED IMAGE PLACEMENT: XFLR5 model view showing NP and CP positions, or the stability derivative table]*

#### Longitudinal Dynamic Modes

**Short period mode** — Eigenvalue: −6.139 ± 8.412i | Frequency: 1.658 Hz | Damping ratio: 0.590

The short period mode is well-damped with a ratio of 0.59, well above the 0.3 threshold typically considered the minimum for comfortable handling. This mode governs the aircraft's rapid pitch response to gusts or inputs and will be largely imperceptible to the pilot in practice.

**Phugoid mode** — Eigenvalue: −0.006 ± 0.690i | Frequency: 0.110 Hz | Damping ratio: 0.008

The phugoid is lightly damped but stable. This is normal for this class of aircraft — the low frequency (one cycle every ~9 seconds) means any oscillation is slow and easily corrected by the pilot or flight controller.

*[SUGGESTED IMAGE PLACEMENT: Longitudinal eigenvalue plot or root locus from XFLR5]*

#### Lateral Dynamic Modes

**Roll mode** — Eigenvalue: −23.213 | Time constant: 0.043 s

A fast, heavily damped aperiodic mode. The 0.043 s time constant indicates responsive, predictable roll behaviour with near-instant damping of roll rate disturbances.

**Dutch roll mode** — Eigenvalue: −0.494 ± 5.139i | Frequency: 0.822 Hz | Damping ratio: 0.096

Stable and convergent. Lightly damped but further suppressed in practice by ArduPlane's yaw damper.

**Spiral mode** — Eigenvalue: +0.096 | Time to double: 7.2 s

The spiral mode is mildly unstable — a deliberate design trade-off. Implementing geometric dihedral on a 3D-printed LW-PLA structure would introduce significant manufacturing complexity and structural risk at the wing roots. With a time to double of 7.2 seconds the instability is well within pilot correction capability and is actively managed by the flight controller in stabilised mode.

*[SUGGESTED IMAGE PLACEMENT: Lateral eigenvalue plot from XFLR5]*

#### Summary

All critical stability requirements are met. The aircraft is statically stable in pitch, roll and yaw. Both longitudinal dynamic modes are stable; the short period is well-damped and the phugoid is stable with low frequency. Laterally, the roll and Dutch roll modes are stable; the spiral mode shows mild instability consistent with a flat-wing configuration, manageable by both pilot and flight controller. The analysis was conducted on a surfaces-only VLM2 model — fuselage aerodynamic contributions are not captured and represent a known limitation of this simulation approach.

---

### Summary table update

Add the following row to the summary table at the end of the document:

| IMPROVEMENT | UAS page | Add new XFLR5 Stability Analysis section after Technical Implementation |

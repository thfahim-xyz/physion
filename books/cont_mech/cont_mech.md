---
title: Continuum Mechanics
layout: default
---

# Continuum Mechanics

<figure class="figure-center">
    <img src="{{ '/assets/images/cont_mech.jpg' | relative_url }}"
         alt="Ocean waves">

    <figcaption>
        Ocean waves illustrate the behavior of fluids as continuous media. Continuum mechanics describes the motion and deformation of solids and fluids on macroscopic scales.
    </figcaption>
</figure>

Continuum mechanics is the branch of physics that studies the behavior of materials treated as continuous media rather than discrete collections of particles. It describes how solids and fluids deform, flow, and respond to forces using concepts such as stress, strain, pressure, and viscosity. The field encompasses elasticity, fluid mechanics, plasticity, and hydrodynamics, and provides the theoretical foundation for engineering, materials science, geophysics, and biomechanics. By modeling matter as a continuum, it enables the analysis of complex physical systems across a wide range of scales.

## Table of Contents

<div class="cards-container">

{% for chapter in site.data.book_list.books[3].chapters %}

<div class="card">
    <h3><a href="{{ chapter.url | relative_url }}">{{ chapter.title }}</a></h3>

    {% for section in chapter.sections %}
        <a href="{{ section.url | relative_url }}">{{ section.title }}</a>
    {% endfor %}

</div>

{% endfor %}

</div>

## List of Physical Quantities

<div class="table-container" markdown="1">

| Description         | Common Symbols         | Definition | SI Unit           |
|---------------------|------------------------|------------|-------------------|
| Mass Density        | $ \rho $               | $  $       | kg m<sup>-3</sup> |
| Normal Stress       | $ \sigma $             | $  $       |                   |
| Pressure            | $ P $                  | $  $       |                   |
| Shear Stress        | $ \tau $               | $  $       |                   |
| Normal Strain       | $ \varepsilon $        | $  $       |                   |
| Volumetric Strain   | $ \delta $             | $  $       |                   |
| Shear Strain        | $ \gamma $             | $  $       |                   |
| Young's Modulus     | $ Y $                  | $  $       |                   |
| Bulk Modulus        | $ B $                  | $  $       |                   |
| Shear Modulus       | $ G $                  | $  $       |                   |
| Poisson's Ratio     | $ \nu $                | $  $       |                   |
| Relative Density    | $ R.D $                | $  $       |                   |
| Surface Tension     | $ \gamma $             | $  $       |                   |
| Vorticity           | $ \boldsymbol \omega $ | $  $       |                   |
| Velocity Potential  | $ \phi $               | $  $       |                   |
| Mass Flow Rate      | $ q_m $                | $  $       |                   |
| Volume Flow Rate    | $ q_V $                | $  $       |                   |
| Kinematic Viscosity | $ \nu $                | $  $       |                   |
| Dynamic Viscosity   | $ \mu $                | $  $       |                   |
| Reynolds Number     | $ \mathrm{Re} $                 | $  $       |                   |


</div>
---
title: Electromagnetism
---

# Electromagnetism

<figure class="figure-center">
    <img src="{{ '/assets/images/em.jpg' | relative_url }}"
         alt="Lightning">

    <figcaption>
        Lightning is a natural electrical discharge produced by the buildup of electric charge in the atmosphere. Its formation and propagation are governed by the laws of electromagnetism.
    </figcaption>
</figure>

Electromagnetism is the branch of physics that studies electric and magnetic fields and their interactions with matter and radiation. It unifies electricity, magnetism, and light into a single theoretical framework described by Maxwell’s equations. Electromagnetism explains phenomena ranging from electric circuits and magnets to radio waves, optics, and electromagnetic radiation. As one of the four fundamental interactions of nature, it plays a central role in both modern technology and our understanding of the physical universe.

## Table of Contents

<div class="cards-container">

{% for chapter in site.data.book_list.books[5].chapters %}

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

| Description                    | Common Symbols    | Definition | SI Unit                        |
|--------------------------------|-------------------|------------|--------------------------------|
| Electric Charge                | $ Q $             | $  $       | C                              |
| Linear Charge Density          | $ \lambda $       | $  $       | C m<sup>-1</sup>               |
| Surface Charge Density         | $ \sigma $        | $  $       | C m<sup>-2</sup>               |
| Volume Charge Density          | $ \rho $          | $  $       | C m<sup>-3</sup>               |
| Electric Field                 | $ \mathbf E $     | $  $       | N C<sup>-1</sup>               |
| Electric Flux                  | $ \Phi_E $        | $  $       | N m<sup>2</sup> C<sup>-1</sup> |
| Electric Potential             | $ V, \phi $       | $  $       | J C<sup>-1</sup>               |
| Electric Dipole Moment         | $ \mathbf p $     | $  $       | C m                            |
| Electric Potential Energy      | $ U_e $           | $  $       | J                              |
| Electric Field Energy Density  | $ u_e $           | $  $       | J m<sup>-3</sup>               |
| Polarization                   | $ \mathbf P $     | $  $       | C m<sup>-2</sup>               |
| Electric Displacement Field    | $ \mathbf D $     | $  $       | C m<sup>-2</sup>               |
| Permittivity                   | $ \varepsilon $   | $  $       | F m<sup>-1</sup>               |
| Relative Permittivity          | $ \varepsilon_r $ | $  $       | -                              |
| Electric Susceptibility        | $ \chi_e $        | $  $       | -                              |
| Capacitance                    | $ C $             | $  $       | F                              |
| Electric Current               | $ I $             | $  $       | A                              |
| Volume Current Density         | $ \mathbf J $     | $  $       | A m<sup>-2</sup>               |
| Surface Current Density        | $ \mathbf K $     | $  $       | A m<sup>-1</sup>               |
| Magnetic Field                 | $ \mathbf B $     | $  $       | T                              |
| Magnetic Flux                  | $ \Phi_B $        | $  $       | Wb                             |
| Magnetic Vector Potential      | $ \mathbf A $     | $  $       | T m                            |
| Magnetic Field Energy Density  | $ u_m $           | $  $       | J m<sup>-3</sup>               |
| Magnetic Moment                | $ \mathbf m $     | $  $       | A m<sup>2</sup>                |
| Magnetization                  | $ \mathbf M $     | $  $       | A m<sup>-1</sup>               |
| Magnetizing Field              | $ \mathbf H $     | $  $       | A m<sup>-1</sup>               |
| Permeability                   | $ \mu $           | $  $       | H m<sup>-1</sup>               |
| Relative Permeability          | $ \mu_r $         | $  $       | -                              |
| Magnetic Susceptibility        | $ \chi_v $        | $  $       | -                              |
| Inductance                     | $ L $             | $  $       | H                              |
| Poynting Vector                | $ \mathbf S $     | $  $       | W m<sup>-2</sup>               |
| Poynting Flux                  | $ \Phi_S $        | $  $       | W m<sup>-2</sup>               |
| Electromagnetic Energy Density | $ u_{em} $        | $  $       | J m<sup>-3</sup>               |
| Voltage                        | $ \Delta V, V $   | $  $       | V                              |
| Electromotive Force            | $ \mathcal{E} $   | $  $       | V                              |
| Electrical Resistance          | $ R $             | $  $       | $\Omega$                       |
| Electrical Resistivity         | $ \rho $          | $  $       | $\Omega$ m                     |
| Electrical Conductance         | $ G $             | $  $       | S                              |
| Electrical Conductivity        | $ \sigma $        | $  $       | S m<sup>-1</sup>               |

</div>
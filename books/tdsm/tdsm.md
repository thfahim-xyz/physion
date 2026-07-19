---
title: Thermodynamics and Statistical Mechanics
layout: default
---

# Thermodynamics and Statistical Mechanics

<figure class="figure--center">
    <img src="{{ '/assets/images/tdsm.jpg' | relative_url }}"
         alt="Fire">

    <figcaption>
        Fire is a familiar example of energy conversion through chemical reactions, involving heat transfer, temperature, and changes in the internal energy of matter.
    </figcaption>
</figure>

Thermodynamics studies heat, work, energy, and the laws governing their transformation in physical systems. It introduces concepts such as temperature, entropy, equilibrium, and the conservation of energy, providing powerful principles that apply to gases, engines, chemical reactions, and even black holes. Statistical mechanics complements thermodynamics by explaining macroscopic behavior in terms of the microscopic motion of atoms and molecules. Together, these fields connect the microscopic and macroscopic worlds and form the foundation of much of modern physics, chemistry, and materials science.

## Table of Contents

<ul>
    {% for chapter in site.data.book_list.books[4].chapters %}
        <li>
            <a href="{{ chapter.url | relative_url }}">{{ chapter.title }}</a>
            <ul>
                {% for section in chapter.sections %}
                    <li>
                        <a href="{{ section.url | relative_url }}">{{ section.title }}</a>
                    </li>
                {% endfor %}
            </ul>
        </li>
    {% endfor %}
</ul>

## List of Physical Quantities

<div class="table__container" markdown="1">

| Description                    | Common Symbols | Definition | SI Unit                           |
|--------------------------------|----------------|------------|-----------------------------------|
| Heat                           | $ Q $          | $  $       | J                                 |
| Work                           | $ W  $         | $  $       | J                                 |
| Temperature                    | $ T $          | $  $       | K                                 |
| Entropy                        | $ S $          | $  $       | J K<sup>-1</sup>                  |
| Pressure                       | $ P $          | $  $       | Pa                                |
| Volume                         | $ V $          | $  $       | m<sup>-1</sup>                    |
| Particle Number                | $ N $          | $  $       | -                                 |
| Amount of Substance            | $ n $          | $  $       | mol                               |
| Chemical Potential             | $ \mu $        | $  $       | J                                 |
| Internal Energy                | $ U $          | $  $       | J                                 |
| Enthalpy                       | $ H $          | $  $       | J                                 |
| Helmholtz Free Energy          | $ F, A $       | $  $       | J                                 |
| Gibbs Free Energy              | $ G $          | $  $       | J                                 |
| Heat Capacity                  | $ C $          | $  $       | J K<sup>-1</sup>                  |
| Molar Heat Capacity            | $ C_m $        | $  $       | J K<sup>-1</sup> mol<sup>-1</sup> |
| Specific Heat Capacity         | $ c $          | $  $       | J K<sup>-1</sup> kg<sup>-1</sup>  |
| Compressibility                | $ \beta $      | $  $       | -                                 |
| Thermal Expansion Coefficients | $ \alpha $     | $  $       | -                                 |
| Molar Mass                     | $ M $          | $  $       | kg mol<sup>-1</sup>               |
| Mass Density                   | $ \rho $       | $  $       | kg m<sup>-3</sup>                 |
| Heat Capacity Ratio            | $ \gamma $     | $  $       | 1                                 |
| Efficiency                     | $ \eta $       | $  $       | 1                                 |
| Heat Flux Density              | $  $           | $  $       | -                                 |
| Heat Current                   | $  $           | $  $       | -                                 |
| Thermal Conductivity           | $  $           | $  $       | -                                 |
| Thermal Diffusivity            | $  $           | $  $       | -                                 |

</div>

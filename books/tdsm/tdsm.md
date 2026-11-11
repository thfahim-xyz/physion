---
title: Thermodynamics and Statistical Mechanics
---

# Thermodynamics and Statistical Mechanics

<figure class="figure-center">
    <img src="{{ '/assets/images/tdsm.webp' | relative_url }}"
         alt="Fire">

    <figcaption>
        Fire is a familiar example of energy conversion through chemical reactions, involving heat transfer, temperature, and changes in the internal energy of matter.
    </figcaption>
</figure>

Thermodynamics studies heat, work, energy, and the laws governing their transformation in physical systems. It introduces concepts such as temperature, entropy, equilibrium, and the conservation of energy, providing powerful principles that apply to gases, engines, chemical reactions, and even black holes. Statistical mechanics complements thermodynamics by explaining macroscopic behavior in terms of the microscopic motion of atoms and molecules. Together, these fields connect the microscopic and macroscopic worlds and form the foundation of much of modern physics, chemistry, and materials science.

## Table of Contents

<div class="cards-container">

{% for chapter in site.data.book_list.books[2].chapters %}

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

| Description                    | Common Symbols   | Definition | SI Unit                           |
|--------------------------------|------------------|------------|-----------------------------------|
| Heat                           | $ Q $            | $ Q_{\mathrm{rev}} = \int T \, \mathrm d S $       | J                                 |
| Work                           | $ W  $           | $ W = \int P \, \mathrm d V $       | J                                 |
| Temperature                    | $ T $            | $  $       | K                                 |
| Entropy                        | $ S $            | $ \Delta S = \int \dfrac{\delta Q_{\mathrm{rev}}}{T} $       | J K<sup>-1</sup>                  |
| Pressure                       | $ P $            | $  $       | Pa                                |
| Volume                         | $ V $            | $  $       | m<sup>-1</sup>                    |
| Particle Number                | $ N $            | $  $       | -                                 |
| Amount of Substance            | $ n $            | $ n = \dfrac{N}{N_A} $       | mol                               |
| Chemical Potential             | $ \mu $          | $  $       | J                                 |
| Internal Energy                | $ U $            | $ U(S, V, N) = TS - PV + \mu N $       | J                                 |
| Enthalpy                       | $ H $            | $ H(S, P, N) = U + PV $       | J                                 |
| Helmholtz Free Energy          | $ F, A $         | $ F(T, V, N) = U - TS $       | J                                 |
| Gibbs Free Energy              | $ G $            | $ G(P, T, N) = H - TS = U + PV - TS $       | J                                 |
| Heat Capacity                  | $ C $            | $  $       | J K<sup>-1</sup>                  |
| Molar Heat Capacity            | $ C_m $          | $  $       | J K<sup>-1</sup> mol<sup>-1</sup> |
| Specific Heat Capacity         | $ c $            | $  $       | J K<sup>-1</sup> kg<sup>-1</sup>  |
| Compressibility                | $ \beta $        | $  $       |                                  |
| Thermal Expansion Coefficients | $ \alpha $       | $  $       |                                  |
| Molar Mass                     | $ M $            | $  $       | kg mol<sup>-1</sup>               |
| Mass Density                   | $ \rho $         | $  $       | kg m<sup>-3</sup>                 |
| Heat Capacity Ratio            | $ \gamma $       | $  $       | 1                                 |
| Efficiency                     | $ \eta $         | $  $       | 1                                 |
| Heat Flux Density              | $ \mathbf q $    | $  $       |                                  |
| Heat Current                   | $ \Phi_q $       | $  $       |                                  |
| Thermal Conductivity           | $ k, \kappa $    | $  $       |                                  |
| Thermal Diffusivity            | $ a, \alpha, D $ | $  $       |                                  |

</div>

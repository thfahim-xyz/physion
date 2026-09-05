---
title: Classical Mechanics
layout: default
---

# Classical Mechanics

<figure class="figure--center">
    <img src="{{ '/assets/images/cm.jpg' | relative_url }}"
         alt="Newton's cradle">

    <figcaption>
        A Newton's cradle demonstrates the conservation of momentum and energy during collisions, illustrating fundamental principles of classical mechanics.
    </figcaption>
</figure>

Classical mechanics is the branch of physics that studies the motion of macroscopic objects and the forces that govern them. It describes everything from falling apples and planetary orbits to machines, fluids, and rigid bodies. Built on the ideas of motion, force, energy, and momentum, classical mechanics provides the mathematical framework for understanding how physical systems evolve in space and time. Despite being superseded by relativity and quantum mechanics in extreme regimes, it remains extraordinarily accurate for most everyday phenomena and forms one of the foundational pillars of physics.

## Table of Contents

<ul>
    {% for chapter in site.data.book_list.books[2].chapters %}
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

| Description          | Common Symbols                    | Definition                                                                 | SI Unit            |
|----------------------|-----------------------------------|----------------------------------------------------------------------------|--------------------|
| Time                 | $ t $                             | $ 0 \leq t \leq \infty $                                                   | s                  |
| Linear Coordinates   | $ x, y, z  $                      | $ - \infty \leq x \leq \infty $                                            | m                  |
| Angular Coordinates  | $ \theta, \varphi, \alpha $       | $ 0 \leq \theta \leq 2 \pi \; $ or $ \; 0 \leq \theta \leq \pi $           | rad                |
| Mass                 | $ m $                             | $ 0 \leq m \leq \infty $                                                   | kg                 |
| Position Vector      | $ \mathbf{r} $                    | $ \mathbf{r} \in \mathbb{R}^3 $                                            | m                  |
| Displacement         | $ \Delta \mathbf{r}, \mathbf{s} $ | $ \Delta \mathbf{r} = \int \mathrm{d} \mathbf{r} $                         | m                  |
| Distance             | $ s $                             | $ s = \int \mathrm{d} s $                                                  | m                  |
| Velocity             | $ \mathbf{v} $                    | $ \mathbf{v} = \dot{\mathbf{r}} $                                          | m s<sup>-1</sup>   |
| Speed                | $ v $                             | $ v = \Vert \mathbf{v} \Vert $                                             | m s<sup>-1</sup>   |
| Acceleration         | $ \mathbf{a} $                    | $ \mathbf{a} = \dot{\mathbf{v}} $                                          | m s<sup>-2</sup>   |
| Angular Velocity     | $ \boldsymbol{\omega} $           | $ \boldsymbol{\omega} = \dot{\theta} \hat{\mathbf{n}} $                    | rad s<sup>-1</sup> |
| Angular Acceleration | $ \boldsymbol{\alpha} $           | $ \boldsymbol{\alpha} = \dot{\boldsymbol{\omega}} $                        | rad s<sup>-2</sup> |
| Moment of Inertia    | $ \mathbf I $                     | $ I = \int r^2 \mathrm{d} m $                                              | kg m<sup>2</sup>   |
| Momentum             | $ \mathbf{p} $                    | $ \mathbf{p} = m \mathbf{v} $                                              | N s                |
| Angular Momentum     | $ \mathbf{L} $                    | $ \mathbf{L} = \mathbf{r} \times \mathbf{p} $                              | N m s              |
| Impulse              | $ \mathbf{J}, \Delta \mathbf{p} $ | $ \mathbf{J} = \int \mathrm{d} \mathbf{p} $                                | N s                |
| Angular Impulse      | $ \Delta \mathbf{L} $             | $ \Delta \mathbf{L} = \int \mathrm{d} \mathbf{L} $                         | N m s              |
| Force                | $ \mathbf{F} $                    | $ \mathbf{F} = \dot{\mathbf{p}} $                                          | N                  |
| Torque               | $ \boldsymbol{\tau} $             | $ \boldsymbol{\tau} = \mathbf{r} \times \mathbf{F} $                       | N m                |
| Work                 | $ W $                             | $ W = \int \mathbf{F} \cdot \mathrm{d} \mathbf{r} $                        | J                  |
| Energy               | $ E $                             | $ E = E_0 + W $                                                            | J                  |
| Kinetic Energy       | $ K, E_k, T $                     | $ K = \dfrac{p^2}{2m} $                                                    | J                  |
| Potential Energy     | $ U, E_p, V $                     | $ U = U_0 - W $                                                            | J                  |
| Power                | $ P $                             | $ P = \dot{W} $                                                            | J s<sup>-1</sup>   |
| Wave Function        | $ \Psi, F, y $                    | $ \Psi = \Psi (\mathbf{r}, t) $                                            | m                  |
| Phase                | $ \phi $                          | $ \phi ( \mathbf r, t) = \mathbf{k} \cdot \mathbf{r} - \omega t + \phi_0 $ | rad                |
| Amplitude            | $ A, x_0, y_0 $                   | $ A = \max \lvert \Psi \rvert $                                            | m                  |
| Wave Vector          | $ \mathbf{k} $                    | $ \mathbf{k} = \nabla \phi $                                               | rad m<sup>-1</sup> |
| Angular Wavenumber   | $ k $                             | $ k = \lvert \mathbf{k} \rvert $                                           | rad m<sup>-1</sup> |
| Angular Frequency    | $ \omega $                        | $ \omega = - \dfrac{\partial \phi}{\partial t} $                           | rad s<sup>-1</sup> |
| Frequency            | $ f, \nu $                        | $ \nu = \dfrac{\omega}{2 \pi} $                                            | Hz                 |
| Period               | $ T $                             | $ T = \dfrac{2 \pi}{\omega} $                                              | s                  |
| Wavelength           | $ \lambda $                       | $ \lambda = \dfrac{2 \pi}{k} $                                             | m                  |
| Phase Velocity       | $ \mathbf{v}_p $                  | $ \mathbf{v}_p = \dfrac{\omega}{k^2} \mathbf{k} $                          | m s<sup>-1</sup>   |
| Group Velocity       | $ \mathbf{v}_g $                  | $ \mathbf {v}\_g = \nabla_{\mathbf{k}} \, \omega $                         | m s<sup>-1</sup>   |
| Path Length          | $ s $                             | $ s = \int v_p \, \mathrm{d} t $                                           | m                  |

</div>
---
title: Quantum Mechanics
---

# Quantum Mechanics

<figure class="figure-center">
    <img src="{{ '/assets/images/qm.jpg' | relative_url }}"
         alt="Northern lights">

    <figcaption>
        The colors of an aurora arise when excited atoms and molecules emit photons at discrete wavelengths as they return to lower energy states—a direct consequence of quantum mechanics.
    </figcaption>
</figure>

Quantum mechanics is the fundamental theory that describes the behavior of matter and radiation at microscopic scales. Unlike classical physics, it reveals a world governed by probabilities, wave-particle duality, quantization, and intrinsic uncertainty. Quantum mechanics explains the structure of atoms, the behavior of electrons, the nature of chemical bonds, and the operation of modern technologies such as lasers, semiconductors, and quantum computers. It is one of the most successful and experimentally verified theories in the history of science.

## Table of Contents

<div class="cards-container">

{% for chapter in site.data.book_list.books[8].chapters %}

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

| Description | Common Symbols | Definition | SI Unit |
|-------------|----------------|------------|---------|
| Quantity    | $ Q $          | $  $       | -       |

</div>
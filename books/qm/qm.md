---
title: Quantum Mechanics
layout: default
---

# Quantum Mechanics

<figure class="figure--center">
    <img src="/assets/images/qm.jpg"
         alt="Northern lights">

    <figcaption>
        The colors of an aurora arise when excited atoms and molecules emit photons at discrete wavelengths as they return to lower energy states—a direct consequence of quantum mechanics.
    </figcaption>
</figure>

Quantum mechanics is the fundamental theory that describes the behavior of matter and radiation at microscopic scales. Unlike classical physics, it reveals a world governed by probabilities, wave-particle duality, quantization, and intrinsic uncertainty. Quantum mechanics explains the structure of atoms, the behavior of electrons, the nature of chemical bonds, and the operation of modern technologies such as lasers, semiconductors, and quantum computers. It is one of the most successful and experimentally verified theories in the history of science.

## Table of Contents

<ul>
    {% for chapter in site.data.book_list.books[8].chapters %}
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

---
title: Thermodynamics and Statistical Mechanics
layout: default
---

# Thermodynamics and Statistical Mechanics

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

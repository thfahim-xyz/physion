---
title: Continuum Mechanics
layout: default
---

# {{ page.title }}

Continuum mechanics is the branch of physics that studies the behavior of materials treated as continuous media rather than discrete collections of particles. It describes how solids and fluids deform, flow, and respond to forces using concepts such as stress, strain, pressure, and viscosity. The field encompasses elasticity, fluid mechanics, plasticity, and hydrodynamics, and provides the theoretical foundation for engineering, materials science, geophysics, and biomechanics. By modeling matter as a continuum, it enables the analysis of complex physical systems across a wide range of scales.

## Table of Contents

<ul>
    {% for chapter in site.data.book_list.books[3].chapters %}
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
---
title: Classical Mechanics
layout: default
---

# {{ page.title }}

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
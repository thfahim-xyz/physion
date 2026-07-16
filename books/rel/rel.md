---
title: Relativity
layout: default
---

# Relativity

<figure class="figure--center">
    <img src="{{ '/assets/images/rel.jpg' | relative_url }}"
         alt="Black hole">

    <figcaption>
        The first direct image of a black hole's shadow. The surrounding ring of light is produced by hot gas orbiting the black hole, while the dark central region reveals the effects of gravity on light predicted by general relativity.
    </figcaption>
</figure>

Relativity is the theory that describes the nature of space, time, motion, and gravity at high speeds and large scales. Developed primarily by Albert Einstein, it consists of special relativity and general relativity. Special relativity unifies space and time into spacetime and shows that measurements of length, time, and simultaneity depend on the observer’s motion. General relativity extends these ideas to gravity, describing it not as a force but as the curvature of spacetime caused by mass and energy. Relativity transformed our understanding of the universe and underlies modern cosmology, astrophysics, and gravitational physics.

## Table of Contents

<ul>
    {% for chapter in site.data.book_list.books[7].chapters %}
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

| Description | Common Symbols | Definition | SI Unit |
|-------------|----------------|------------|---------|
| Quantity    | $ Q $          | $  $       | -       |

---
title: Electromagnetism
layout: default
---

# Electromagnetism

<figure class="figure--center">
    <img src="{{ '/assets/images/em.jpg' | relative_url }}"
         alt="Lightning">

    <figcaption>
        Lightning is a natural electrical discharge produced by the buildup of electric charge in the atmosphere. Its formation and propagation are governed by the laws of electromagnetism.
    </figcaption>
</figure>

Electromagnetism is the branch of physics that studies electric and magnetic fields and their interactions with matter and radiation. It unifies electricity, magnetism, and light into a single theoretical framework described by Maxwell’s equations. Electromagnetism explains phenomena ranging from electric circuits and magnets to radio waves, optics, and electromagnetic radiation. As one of the four fundamental interactions of nature, it plays a central role in both modern technology and our understanding of the physical universe.

## Table of Contents

<ul>
    {% for chapter in site.data.book_list.books[5].chapters %}
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
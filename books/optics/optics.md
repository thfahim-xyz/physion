---
title: Optics
layout: default
---

# Optics

<figure class="figure--center">
    <img src="{{ '/assets/images/optics.jpg' | relative_url }}"
         alt="Fairy lights">

    <figcaption>
        Out-of-focus fairy lights produce circular patterns through the optics of a camera lens. The formation, propagation, and manipulation of light are the central subjects of optics.
    </figcaption>
</figure>

Optics is the study of light and its interaction with matter. It examines the propagation, reflection, refraction, diffraction, interference, and polarization of light, as well as the formation of images by lenses and mirrors. Modern optics extends beyond visible light to include the full electromagnetic spectrum and explores both classical and quantum properties of radiation. The field underlies technologies such as microscopes, telescopes, cameras, fiber optics, and lasers, while also providing deep insight into the nature of waves and electromagnetic phenomena.

## Table of Contents

<ul>
    {% for chapter in site.data.book_list.books[6].chapters %}
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

| Description | Common Symbols | Definition | SI Unit |
|-------------|----------------|------------|---------|
| Quantity    | $ Q $          | $  $       | -       |

</div>

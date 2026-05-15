---
title: Classical Mechanics
layout: default
---

# {{ page.title }}

Classical mechanics is the branch of physics that studies motion, forces, and the laws governing the behavior of bodies on everyday scales. It provides the foundation for understanding how objects move through space and time, from falling stones and orbiting planets to rotating wheels and vibrating springs. Built upon the ideas of Newton, Lagrange, Hamilton, and many others, it combines physical intuition with mathematical precision to describe the natural world. Though superseded by relativity and quantum mechanics in extreme regimes, classical mechanics remains extraordinarily accurate for most familiar phenomena and continues to serve as one of the central pillars of physics.

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
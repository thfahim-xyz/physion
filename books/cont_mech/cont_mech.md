---
title: Continuum Mechanics
layout: default
---

# {{ page.title }}

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
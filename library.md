---
layout: default
title: Physion Library
---

<h1>Library</h1>

<p>Welcome to Physion Library.</p>

{% for book in site.data.book_list.books %}

<h2>
    <a href="{{ book.url | relative_url }}">{{ book.title }}</a>
</h2>
    
<ul>
    {% for chapter in book.chapters %}
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

{% endfor %}
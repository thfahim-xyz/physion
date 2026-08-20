---
title: Physion
layout: default
---

<div class="site__wordmark" id="hero">Physion</div>
<p id="hero">Physics Notes (Work in Progress)</p>

<div id="hero">
  <a href="{{ '/library' | relative_url }}" class="btn--primary">Explore</a>
</div>

# Library

<ul>
  {% for book in site.data.book_list.books %}
    <li>
      <a href="{{ book.url | relative_url }}">{{ book.title }}</a>
    </li>
  {% endfor %}
</ul>

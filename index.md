---
layout: default
title: Physion
---

<h1 class="site__wordmark" id="hero">Physion</h1>
<p id="hero">Learning physics as a way of understanding reality.</p>

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

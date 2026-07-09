---
title: Mathematical Methods for Physics
layout: default
---

# {{ page.title }}

<figure class="figure--center">
    <img src="/assets/images/math_methods.jpg"
         alt="Leaf patterns">

    <figcaption>
        Patterns, symmetry, and geometry appear throughout the natural world. Mathematics provides the framework for expressing the laws of physics with precision.
    </figcaption>
</figure>

Mathematical methods for physics provides the mathematical language and techniques used to formulate, analyze, and solve physical problems. It includes topics such as calculus, differential equations, linear algebra, vector calculus, complex analysis, probability, tensors, and Fourier methods, along with numerical and approximation techniques. Rather than being a separate branch of physics, it serves as the essential toolkit through which physical theories are expressed and applied. Mastery of these methods enables the quantitative study of systems across all areas of physics, from classical mechanics and electromagnetism to quantum theory and relativity.

## Table of Contents

<ul>
    {% for chapter in site.data.book_list.books[1].chapters %}
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

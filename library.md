---
title: Library
---

<h1>Library</h1>

<blockquote>
    
    <p>“The only thing that you absolutely have to know, is the location of the library.”</p>

    <cite>― Albert Einstein</cite>

</blockquote>

{% for book in site.data.book_list.books %}

<h2>
    <a href="{{ book.url | relative_url }}">{{ book.title }}</a>
</h2>

<div class="cards-container">

{% for chapter in book.chapters %}

<div class="card">
    <h3><a href="{{ chapter.url | relative_url }}">{{ chapter.title }}</a></h3>

    {% for section in chapter.sections %}
        <a href="{{ section.url | relative_url }}">{{ section.title }}</a>
    {% endfor %}

</div>

{% endfor %}

</div>

{% endfor %}

## Additional Resources

### Books

<div class="books-list">

<a class="book-card" href="https://en.wikipedia.org/wiki/Fundamentals_of_Physics">
    <span class="book-title">Fundamentals of Physics</span>
    <span class="book-author">David Halliday, Jearl Walker, Robert Resnick</span>
</a>

<a class="book-card" href="https://en.wikipedia.org/wiki/University_Physics">
    <span class="book-title">University Physics: With Modern Physics</span>
    <span class="book-author">Hugh Young, Roger Freedman, Francis Sears, Mark Zemansky</span>
</a>

<a class="book-card" href="https://en.wikipedia.org/wiki/Mathematical_Methods_in_the_Physical_Sciences">
    <span class="book-title">Mathematical Methods in the Physical Sciences</span>
    <span class="book-author">Mary L. Boas</span>
</a>

<a class="book-card" href="https://books.google.com.bd/books/about/Mathematical_Methods_for_Physicists.html?id=qLFo_Z-PoGIC">
    <span class="book-title">Mathematical Methods for Physicists</span>
    <span class="book-author">George B. Arfken, Hans J. Weber, Frank E. Harris</span>
</a>

<a class="book-card" href="https://en.wikipedia.org/wiki/An_Introduction_to_Mechanics">
    <span class="book-title">An Introduction to Mechanics</span>
    <span class="book-author">Daniel Kleppner, Robert J. Kolenkow</span>
</a>

<a class="book-card" href="https://books.google.com.bd/books/about/Classical_Mechanics.html?id=P1kCtNr-pJsC">
    <span class="book-title">Classical Mechanics</span>
    <span class="book-author">John R. Taylor</span>
</a>

<a class="book-card" href="https://en.wikipedia.org/wiki/Classical_Mechanics_(Goldstein)">
    <span class="book-title">Classical Mechanics</span>
    <span class="book-author">Herbert Goldstein</span>
</a>

<a class="book-card" href="https://www.google.com.bd/books/edition/An_Introduction_to_Thermal_Physics/M0BgQwAACAAJ">
    <span class="book-title">An Introduction to Thermal Physics</span>
    <span class="book-author">Daniel V. Schroeder</span>
</a>

<a class="book-card" href="https://en.wikipedia.org/wiki/Thermodynamics_and_an_Introduction_to_Thermostatistics">
    <span class="book-title">Thermodynamics and an Introduction to Thermostatistics</span>
    <span class="book-author">Herbert Callen</span>
</a>

<a class="book-card" href="https://en.wikipedia.org/wiki/Introduction_to_Electrodynamics">
    <span class="book-title">Introduction to Electrodynamics</span>
    <span class="book-author">David J. Griffiths</span>
</a>

<a class="book-card" href="https://en.wikipedia.org/wiki/Classical_Electrodynamics_(book)">
    <span class="book-title">Classical Electrodynamics</span>
    <span class="book-author">John David Jackson</span>
</a>

<a class="book-card" href="https://books.google.com.bd/books/about/Spacetime_Physics.html?id=jAN2NQEACAAJ">
    <span class="book-title">Spacetime Physics</span>
    <span class="book-author">John Archibald Wheeler</span>
</a>

<a class="book-card" href="https://arxiv.org/pdf/gr-qc/9712019">
    <span class="book-title">Lecture Notes on General Relativity</span>
    <span class="book-author">Sean M. Carroll</span>
</a>

<a class="book-card" href="https://books.google.com.bd/books/about/A_First_Course_in_General_Relativity.html?id=V1CGLi58W7wC">
    <span class="book-title">A First Course in General Relativity</span>
    <span class="book-author">Bernard F. Schutz</span>
</a>

<a class="book-card" href="https://en.wikipedia.org/wiki/Gravitation_(book)">
    <span class="book-title">Gravitation</span>
    <span class="book-author">Charles W. Misner, Kip S. Thorne, John Archibald Wheeler</span>
</a>

<a class="book-card" href="https://en.wikipedia.org/wiki/Introduction_to_Quantum_Mechanics_(book)">
    <span class="book-title">Introduction to Quantum Mechanics</span>
    <span class="book-author">David J. Griffiths</span>
</a>

<a class="book-card" href="https://en.wikipedia.org/wiki/Modern_Quantum_Mechanics">
    <span class="book-title">Modern Quantum Mechanics</span>
    <span class="book-author">J. J. Sakurai, Jim Napolitano</span>
</a>

</div>

### Websites

<a class="pill" href="https://www.khanacademy.org/" target="_blank" rel="noopener">Khan Academy</a>
<a class="pill" href="https://ocw.mit.edu/" target="_blank" rel="noopener">MIT OpenCourseWare</a>
<a class="pill" href="https://phet.colorado.edu/" target="_blank" rel="noopener">PhET</a>
<a class="pill" href="https://orbital-mechanics.space/" target="_blank" rel="noopener">Orbital Mechanics & Astrodynamics</a>

### YouTube Channels and Playlists

<a class="pill" href="https://www.youtube.com/@3blue1brown" target="_blank" rel="noopener">3Blue1Brown</a>
<a class="pill" href="https://www.youtube.com/@PhysicswithElliot" target="_blank" rel="noopener">Physics with Elliot</a>
<a class="pill" href="https://www.youtube.com/@quantumsensechannel" target="_blank" rel="noopener">Quantum Sense</a>
<a class="pill" href="https://www.youtube.com/@AllThingsPhysicsYouTube" target="_blank" rel="noopener">All Things Physics</a>
<a class="pill" href="https://www.youtube.com/@eigenchris" target="_blank" rel="noopener">eigenchris</a>
<a class="pill" href="https://www.youtube.com/@pbsspacetime" target="_blank" rel="noopener">PBS Space Time</a>
<a class="pill" href="https://www.youtube.com/@PhysicsExplainedVideos" target="_blank" rel="noopener">Physics Explained</a>
<a class="pill" href="https://www.youtube.com/@MinutePhysics" target="_blank" rel="noopener">minutephysics</a>
<a class="pill" href="https://www.youtube.com/@LookingGlassUniverse" target="_blank" rel="noopener">Looking Glass Universe</a>
<a class="pill" href="https://www.youtube.com/@physicsgirl/featured" target="_blank" rel="noopener">Physics Girl</a>
<a class="pill" href="https://www.youtube.com/@veritasium" target="_blank" rel="noopener">Veritasium</a>
<a class="pill" href="https://www.youtube.com/@crashcourse" target="_blank" rel="noopener">CrashCourse</a>
<a class="pill" href="https://www.youtube.com/@MichelvanBiezen" target="_blank" rel="noopener">Michel van Biezen</a>

- [Essence of calculus - 3Blue1Brown](https://youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr&si=XRi9UxV4iNkCUyxw)
- [Essence of linear algebra - 3Blue1Brown](https://youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&si=U3pdWtJhKQ0u3a7I)
- [Tensors for Beginners - eigenchris](https://youtube.com/playlist?list=PLJHszsWbB6hrkmmq57lX8BV-o-YIOFsiG&si=6xtbkPqlbzMiNIKP)
- [Tensor Calculus - eigenchris](https://youtube.com/playlist?list=PLJHszsWbB6hpk5h8lSfBkVrpjsqvUGTCx&si=YQSCqoOYd11n5ojG)
- [Relativity by eigenchris - eigenchris](https://youtube.com/playlist?list=PLJHszsWbB6hqlw73QjgZcFh4DrkQLSCQa&si=hN--0xHjnOYby4EB)
- [Spinors for Beginners - eigenchris](https://youtube.com/playlist?list=PLJHszsWbB6hoOo_wMb0b6T44KM_ABZtBs&si=1OjbDyRgC3c369hh)
- [Intro to Special Relativity Course - minutephysics](https://youtube.com/playlist?list=PLoaVOjvkzQtyjhV55wZcdicAz5KexgKvm&si=S7lTnfvnbL9jwDYT)
- [Lagrangian Mechanics Sequence - Physics with Elliot](https://youtube.com/playlist?list=PL-IZN8QRUw-xRsoJPtXBlJyWlWrjVEF0x&si=Jix04hZ8oPInsSYr)
- [Hamiltonian Mechanics Sequence - Physics with Elliot](https://youtube.com/playlist?list=PL-IZN8QRUw-zBECgfYLuDQ3qkWsXWAGhM&si=Od6lwCYj0gIyXWtK)
- [Physics Mini Lessons - Physics with Elliot](https://youtube.com/playlist?list=PL-IZN8QRUw-ykZ0yIZ-I5jeByyYHmcCcF&si=b23_CSYOVITAnVam)
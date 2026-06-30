---
title: Library
layout: default
---

<h1>Library</h1>

<p>“The only thing that you absolutely have to know, is the location of the library.”</p>

<p>― Albert Einstein</p>

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

## Additional Resources

### Books
- [Fundamentals of Physics - David Halliday, Jearl Walker, Robert Resnick](https://en.wikipedia.org/wiki/Fundamentals_of_Physics)
- [University Physics: With Modern Physics - Hugh Young, Roger Freedman, Francis Sears, Mark Zemansky](https://en.wikipedia.org/wiki/University_Physics)
- [Mathematical Methods in the Physical Sciences - Mary L. Boas](https://en.wikipedia.org/wiki/Mathematical_Methods_in_the_Physical_Sciences)
- [Mathematical Methods for Physicists - George B. Arfken, Hans J. Weber, Frank E. Harris](https://books.google.com.bd/books/about/Mathematical_Methods_for_Physicists.html?id=qLFo_Z-PoGIC)
- [An Introduction to Mechanics - Daniel Kleppner, Robert J. Kolenkow](https://en.wikipedia.org/wiki/An_Introduction_to_Mechanics)
- [Classical Mechanics - John R. Taylor](https://books.google.com.bd/books/about/Classical_Mechanics.html?id=P1kCtNr-pJsC)
- [Classical Mechanics - Herbert Goldstein](https://en.wikipedia.org/wiki/Classical_Mechanics_(Goldstein))
- [An Introduction to Thermal Physics - Daniel V. Schroeder](https://www.google.com.bd/books/edition/An_Introduction_to_Thermal_Physics/M0BgQwAACAAJ)
- [Thermodynamics and an Introduction to Thermostatistics - Herbert Callen](https://en.wikipedia.org/wiki/Thermodynamics_and_an_Introduction_to_Thermostatistics)
- [Introduction to Electrodynamics - David J. Griffiths](https://en.wikipedia.org/wiki/Introduction_to_Electrodynamics)
- [Classical Electrodynamics - John David Jackson](https://en.wikipedia.org/wiki/Classical_Electrodynamics_(book))
- [Spacetime Physics - John Archibald Wheeler](https://books.google.com.bd/books/about/Spacetime_Physics.html?id=jAN2NQEACAAJ)
- [Lecture Notes on General Relativity - Sean M. Carroll](https://arxiv.org/pdf/gr-qc/9712019)
- [A First Course in General Relativity - Bernard F. Schutz](https://books.google.com.bd/books/about/A_First_Course_in_General_Relativity.html?id=V1CGLi58W7wC)
- [Gravitation - Charles W. Misner, Kip S. Thorne, John Archibald Wheeler](https://en.wikipedia.org/wiki/Gravitation_(book))
- [Introduction to Quantum Mechanics - David J. Griffiths](https://en.wikipedia.org/wiki/Introduction_to_Quantum_Mechanics_(book))
- [Modern Quantum Mechanics - J. J. Sakurai, Jim Napolitano](https://en.wikipedia.org/wiki/Modern_Quantum_Mechanics)

### YouTube Channels
- [3Blue1Brown](https://www.youtube.com/@3blue1brown)
- [Physics with Elliot](https://www.youtube.com/@PhysicswithElliot)
- [Quantum Sense](https://www.youtube.com/@quantumsensechannel)
- [All Things Physics](https://www.youtube.com/@AllThingsPhysicsYouTube)
- [eigenchris](https://www.youtube.com/@eigenchris)
- [PBS Space Time](https://www.youtube.com/@pbsspacetime)
- [Physics Explained](https://www.youtube.com/@PhysicsExplainedVideos)
- [minutephysics](https://www.youtube.com/@MinutePhysics)
- [Looking Glass Universe](https://www.youtube.com/@LookingGlassUniverse)
- [Physics Girl](https://www.youtube.com/@physicsgirl/featured)
- [Veritasium](https://www.youtube.com/@veritasium)
- [CrashCourse](https://www.youtube.com/@crashcourse)

### Websites
- [Khan Academy](https://www.khanacademy.org/)
- [MIT OpenCourseWare](https://ocw.mit.edu/)
- [PhET](https://phet.colorado.edu/)
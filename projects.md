---
layout: base.liquid
title: Projects
description: Various Passion Projects in Field of Computer Science and Cybersecurity
permalink: /projects/
---

# Projects

This is a collection of what I have been doing in my field of interest and my exploration of the broader world. 

{% assign sorted = collections.project | sort: "date" | reverse %}
{% for project in sorted %}
<article>
  <h2><a href="{{ project.url | url }}">{{ project.data.title }}</a></h2>
  <p>{{ project.data.description }}</p>
  <small>
    {{ project.date | date: "%B %e, %Y" }}
    {% if project.data.technologies %} &middot; {{ project.data.technologies }}{% endif %}
  </small>
</article>
{% endfor %}

{% if collections.project.size == 0 %}
<p><em>No projects yet.</em></p>
{% endif %}

---
layout: base.liquid
title: Home
description: This is a portfolio page for a junior with cybersecurity ambitions. On his way to dreams.
---

# Hi, I'm Charlie Niu

Welcome to the portfolio page of Charlie. I am currently a junior at Friends' Central School ('2028). Generally, I am an artist, student, explorer, and creator. Lately, I am exploring my journey through the world of computer science and cybersecurity. Based on my previous projects, I am building a detection algorithm that can be deployed on every website to identify AI traffic from human traffic.

Thanks for stopping by — I hope you enjoy exploring this website and find my experience interesting. I'm on my way to my dreams, and hopefully not missing any interesting scenes along the way.

## Where to go next

- [About me]({{ '/about/' | url }}) — background, skills, and what I'm learning
- [Projects]({{ '/projects/' | url }}) — things I've built
- [Blog]({{ '/blog/' | url }}) — notes on what I'm working through
- [Contact]({{ '/contact/' | url }}) — how to reach me

## Featured projects

<ul>
{% assign featured = collections.project | sort: "date" | reverse %}
{% for project in featured limit: 3 %}
  <li>
    <a href="{{ project.url | url }}">{{ project.data.title }}</a>
    — {{ project.data.description }}
  </li>
{% endfor %}
</ul>

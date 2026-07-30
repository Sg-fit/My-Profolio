---
layout: base.liquid
title: Blog
description: Small blog of how the projects are progressing and some casual sharing from time to time
permalink: /blog/
---

# Blog

Looking forward for my first Blog, Polishing now. 

<ul>
{% assign posts = collections.post | sort: "date" | reverse %}
{% for post in posts %}
  <li>
    <a href="{{ post.url | url }}">{{ post.data.title }}</a>
    — <small>{{ post.date | date: "%B %e, %Y" }}</small>
  </li>
{% endfor %}
</ul>

{% if collections.post.size == 0 %}
<p><em>No posts yet.</em></p>
{% endif %}

---
layout: base.liquid
title: Photography
description: A collection of photography work
permalink: /photography/
---

# Photography

Photography is a hobby of mine — I haven't studied it formally, but I enjoy it as a way to see things differently. Below is a collection of my work.

<div class="photo-grid">
{% for photo in photos %}
  <a href="{{ photo.src | url }}" class="photo-grid-item" data-caption="{{ photo.caption | default: '' }}">
    <img src="{{ photo.src | url }}" alt="{{ photo.alt | default: photo.caption | default: 'Photograph' }}" loading="lazy">
  </a>
{% endfor %}
</div>

{% if photos.size == 0 %}
<p><em>No photos added yet — check back soon.</em></p>
{% endif %}

<div id="lightbox" class="lightbox" hidden>
  <button id="lightbox-close" class="lightbox-close" aria-label="Close">&times;</button>
  <img id="lightbox-img" src="" alt="">
  <p id="lightbox-caption" class="lightbox-caption"></p>
</div>

<script src="{{ '/js/lightbox.js' | url }}" defer></script>

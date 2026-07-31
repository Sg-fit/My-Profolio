---
layout: base.liquid
title: Music
description: Piano recordings and original scores
permalink: /music/
---

# Music

I play piano at a professional level and have a background in music theory. Below are recordings and scores of some of my work.

## Recordings

<div class="track-list">
{% for track in tracks %}
  <article class="track">
    <h3>{{ track.title }}</h3>
    {% if track.description %}<p>{{ track.description }}</p>{% endif %}
    <audio controls preload="none" src="{{ track.src | url }}">
      Your browser doesn't support embedded audio. <a href="{{ track.src | url }}">Download the file</a> instead.
    </audio>
  </article>
{% endfor %}
</div>

{% if tracks.size == 0 %}
<p><em>No recordings added yet — check back soon.</em></p>
{% endif %}

## Scores

<div class="score-list">
{% for score in scores %}
  <article class="score">
    <h3>{{ score.title }}</h3>
    {% if score.description %}<p>{{ score.description }}</p>{% endif %}
    <div class="score-render" data-score-src="{{ score.src | url }}"></div>
  </article>
{% endfor %}
</div>

{% if scores.size == 0 %}
<p><em>No scores added yet — check back soon.</em></p>
{% endif %}

<script src="https://cdn.jsdelivr.net/npm/opensheetmusicdisplay@1.8.6/build/opensheetmusicdisplay.min.js"></script>
<script src="{{ '/js/scores.js' | url }}" defer></script>

---
layout: about
title: Sai Kiran Sripada
seo:
    title: Sai Kiran Sripada
invisible: true
---

{% assign age = 'now' | date: '%Y' | minus: 1990 %}
{% assign current_month = 'now' | date: '%m' | to_integer %}
{% if current_month < 4 %}
    {% assign age = 'now' | date: '%Y' | minus: 1991 %}
{% endif %}

I'm a {{age}}-year-old software engineer based in Hyderabad, India. For the past **{{ 'now' | date: '%Y' | minus: 2012 }}+ years** I've been coding mostly in *Python*, *Ruby*, *Node.js*, *PHP*, *React* and *Vue* with a strong interest in back-end development.

I love writing code, listening to music and [playing games](https://steamcommunity.com/id/saikiransripada){:target="_blank"} on the computer.

This blog is a timeline of my life. I blog to document my ideas, research and personal feelings for future reference.

If you'd like to get in touch, please send an email to [hello@saikiransripada.com](mailto:hello@saikiransripada.com). If you'd like to talk securely, my PGP key is available on [Keybase](https://keybase.io/saikiransripada){:target="_blank"}.

All opinions are my own.

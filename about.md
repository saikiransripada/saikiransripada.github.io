---
layout: page
title: About
permalink: /about/
invisible: true
---

<div class = "page-wrapper" markdown="1">
{% assign age = 'now' | date: '%Y' | minus: 1990 %}
{% assign current_month = 'now' | date: '%m' | to_integer %}
{% if current_month < 4 %}
    {% assign age = 'now' | date: '%Y' | minus: 1991 %}
{% endif %}

I am a software engineer based in Hyderabad, India. Over the past 11+ years, I have been coding primarily in Python, Ruby, Node.js, PHP, React, and Vue, with a strong interest in data structures and algorithms as well as back-end development.

I enjoy writing code, [listening to music](https://www.last.fm/user/thephpguy){:target="_blank"} and [playing games](https://steamcommunity.com/id/saikiransripada){:target="_blank"} on the computer.

I blog to document my ideas and research for future reference. This blog serves as a timeline of my life.

If you'd like to get in touch, please send an email to [hello@saikiransripada.com](mailto:hello@saikiransripada.com). For secure communication, my PGP key is available on [Keybase](https://keybase.io/saikiransripada){:target="_blank"}.

All views are my own.
</div>
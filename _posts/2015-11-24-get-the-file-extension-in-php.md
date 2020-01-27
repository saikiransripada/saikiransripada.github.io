---
layout: post
title: Get the file extension in PHP
summary: A simple function to get the extension of a file. Meet pathinfo().
permalink: /get-the-file-extension-in-php/
date: 2015-11-24 18:01:27 +0100
categories: php
hide_summary: true
---

A simple function to get the extension of a file. Meet [pathinfo()](https://php.net/pathinfo){:target="_blank"}.

{% highlight php %}
<?php $extension = pathinfo($filename, PATHINFO_EXTENSION); ?>
{% endhighlight %}

---
layout:     post
title:      Get the file extension in PHP
date:       2015-11-24
summary:    A simple function to get the extension of a file. Meet pathinfo().
categories: php
permalink:  /get-the-file-extension-in-php/
---

A simple function to get the extension of a file. Meet [pathinfo()](https://php.net/pathinfo){:target="_blank"}.

{% highlight php %}
<?php $extension = pathinfo($filename, PATHINFO_EXTENSION); ?>
{% endhighlight %}

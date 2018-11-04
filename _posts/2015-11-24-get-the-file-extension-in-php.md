---
layout:     post
title:      Get the file extension in PHP
date:       2015-11-24
categories: php
---

A simple function to get the extension of a file. Meet [pathinfo()](http://php.net/pathinfo){:target="_blank"}.

{% highlight php %}
<?php $extension = pathinfo($filename, PATHINFO_EXTENSION); ?>
{% endhighlight %}
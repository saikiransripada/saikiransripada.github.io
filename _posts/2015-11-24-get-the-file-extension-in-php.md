---
title: "Get the file extension in PHP"
categories: [PHP]
---

A simple function to get the extension of a file. Meet <a href="http://php.net/pathinfo" target="_blank">pathinfo()</a>.

{% highlight php %}
<?php
  $extension = pathinfo($filename, PATHINFO_EXTENSION);
?>
{% endhighlight %}
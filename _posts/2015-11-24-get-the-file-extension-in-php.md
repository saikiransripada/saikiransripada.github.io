---
title: "Get the file extension in PHP"
categories: [PHP]
---

A simple function to get the extension of a file. Meet [pathinfo()](http://php.net/pathinfo){:target="_blank"}.

{% highlight php %}
<?php
  $extension = pathinfo($filename, PATHINFO_EXTENSION);
?>
{% endhighlight %}
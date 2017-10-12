---
title: "Check Ubuntu Version"
categories: [Linux, Ubuntu]
---

Command to find Ubuntu version.

{% highlight shell %}
lsb_release -d
{% endhighlight %}

OR

{% highlight shell %}
cat /etc/lsb-release
{% endhighlight %}

Using options `-c`, `-d`, `-r` displays codename, description (OS name &amp; release number) and release number respectively whereas `-a` option displays the information with `-cdr` combined.
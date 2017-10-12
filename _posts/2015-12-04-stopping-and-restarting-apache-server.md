---
title: "Stopping and restarting Apache server"
categories: [Apache, CentOS, Linux, Ubuntu]
---

Commands to start, stop, reload or restart an Apache 2 HTTP server.

## Ubuntu

{% highlight shell %}
sudo service apache2 restart
{% endhighlight %}

OR

{% highlight shell %}
sudo /etc/init.d/apache2 restart
{% endhighlight %}

## Cent OS 6

{% highlight shell %}
sudo service httpd restart
{% endhighlight %}

OR

{% highlight shell %}
sudo /etc/init.d/httpd restart
{% endhighlight %}

## Cent OS 7

{% highlight shell %}
sudo systemctl restart httpd
{% endhighlight %}

OR

{% highlight shell %}
sudo /bin/systemctl restart httpd.service
{% endhighlight %}

Use `sudo` when logged in as a non-root user.

Replace `restart` with `start`, `stop`, `reload` or `status` to start, stop, reload or check status of an Apache web server respectively. Use `reload` to restart the server without kicking off your website visitors.
---
layout: post
title: Font from origin has been blocked from loading by Cross-Origin Resource Sharing policy
summary: Custom web fonts via CDN requires CORS (Cross-Origin Resource Sharing) configuration to display fonts properly.
thumbnail: images/chris-yang-Ii0SqNV7e8I-unsplash.jpg
permalink: /font-from-origin-has-been-blocked-from-loading/
date: 2016-02-19 18:01:27 +0100
categories: apache
hide_summary: true
---

Custom web fonts via CDN requires CORS (Cross-Origin Resource Sharing) configuration to display fonts properly.

Add the below rule to your .htaccess

{% highlight apache %}
# Allow access from all domains for webfonts.
<IfModule mod_headers.c>
  <FilesMatch "\.(ttf|ttc|otf|eot|woff|font.css|css)$">
    Header add Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
{% endhighlight %}

Using a wildcard is potentially insecure as it opens the domain to JavaScript access from any domain. Instead, you can allow your domain or subdomain.

{% highlight apache %}
Header add Access-Control-Allow-Origin "your-domain.com"
{% endhighlight %}

When `add` is used, the response header will be added to the existing set of headers; Whereas with `set` the response header will be set, replacing any header with this name.
---
title: "List all views in a MySQL database"
categories: [Database, MySQL]
---

SQL command to display all views in a database.

{% highlight sql %}
SHOW FULL TABLES WHERE TABLE_TYPE = 'VIEW';
{% endhighlight %}

OR

{% highlight sql %}
SHOW FULL TABLES IN <database_name> WHERE TABLE_TYPE = 'VIEW';
{% endhighlight %}

You must have a database selected when using the first one. Use latter without selecting a database.
---
title: "Find the largest number in an array"
categories: [data-structures, arrays, basic-problems]
---

Find the largest number in an array using Python.

{% highlight python %}
# Find the largest number in an array
def largestElement(input):
    max = None

    for value in input:
        if value > max:
            max = value
    return max

# Driver code
input = [1, -20, 0, 5, -100]
result = largestElement(input)
print result
{% endhighlight %}
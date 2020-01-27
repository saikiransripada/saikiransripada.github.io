---
layout: post
title: Prevent CNAME file in Jekyll from being deleted during the build process
summary: In Jekyll, the "_site" folder gets deleted and rebuilt after every change or build execution.
permalink: /prevent-cname-file-in-jekyll-from-being-deleted-during-the-build-process/
categories: jekyll ruby
date: 2019-06-29 18:01:27 +0100
---

If you have a custom domain, you may have to copy the CNAME file after every Jekyll build.

You can use the `keep_files` option in `_config.yml` to prevent the CNAME file in the `_site` directory from being deleted during the build process.

{% highlight yaml %}
keep_files: ['CNAME']
{% endhighlight %}

If you are using Travis CI, you can copy the CNAME file to the `_site` directory after the build process. Here's a sample `.travis.yml` configuration that you can use:
{% highlight yaml %}
language: ruby
cache: bundler
branches:
  only:
  - dev
script:
  - JEKYLL_ENV=production bundle exec jekyll build --destination _site
  - cp CNAME ./_site/CNAME
deploy:
  provider: pages
  local-dir: ./_site
  target-branch: master
  email: deploy@travis-ci.org
  name: Deployment Bot
  skip-cleanup: true
  github-token: $GITHUB_TOKEN
  keep-history: true
  on:
    branch: dev
{% endhighlight %}

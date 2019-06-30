---
layout:     post
title:      Prevent CNAME file in Jekyll _site directory from being deleted during the build process
date:       2019-06-29
categories: jekyll
---

In Jekyll, the `_site` folder gets deleted and rebuilt after every change or build execution. If you have a custom domain, you may have to copy the CNAME file after every Jekyll build.

You can use `keep_files` option in `_config.yml` to prevent CNAME file in the `_site` directory from being deleted during the build process.

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

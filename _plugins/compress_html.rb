Jekyll::Hooks.register :posts, :post_render do |post|
    post.output = post.output.compress_html if post.output =~ /<\/html>/
end
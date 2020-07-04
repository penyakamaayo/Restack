module PostsHelper
    def join_tags(post)
        post.tags.map{ |t| t.name }.compact.join(", ")
    end
end

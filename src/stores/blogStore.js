// src/store/blogStore.js
import { defineStore } from 'pinia';

export const useBlogStore = defineStore('blogStore', {
  state: () => ({
    blogs: null,
    blog: null,
    loading: false,
    error: null,
  }),
  
  actions: {
    // Fetch all blogs
    async fetchBlogs() {
        const res = await fetch("api/posts");
        const data = await res.json();

        return data;
    },

    
    // Fetch a single blog by ID
    // async fetchBlog(id) {
    //   this.loading = true;
    //   try {
    //     const response = await fetch(`/api/posts/${id}`);
    //     this.blog = await response.json();
    //   } catch (error) {
    //     this.error = error;
    //   } finally {
    //     this.loading = false;
    //   }
    // },
    

     /******************* Create a post *******************/
     async createBlog(formData) {
        const res = await fetch("/api/posts", {
          method: "post",
          body: JSON.stringify(formData),
        });
  
        const data = await res.json();
  
        if (data.errors) {
          this.errors = data.errors;
        } else {
          this.router.push({ name: "blog" });
          this.errors = {}
        }
      },


    // Update an existing blog
    // async updateBlog(id, blogData) {
    //   try {
    //     const response = await fetch(`/api/posts/${id}`, {
    //       method: 'PUT',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify(blogData),
    //     });
    //     const updatedBlog = await response.json();
    //     this.blogs = this.blogs.map(blog => blog.id === id ? updatedBlog : blog); // Update the blog in the state
    //   } catch (error) {
    //     this.error = error;
    //   }
    // },
    
    // Delete a blog
    // async deleteBlog(id) {
    //   try {
    //     await fetch(`/api/posts/${id}`, {
    //       method: 'DELETE',
    //     });
    //     this.blogs = this.blogs.filter(blog => blog.id !== id);  // Remove the blog from the state
    //   } catch (error) {
    //     this.error = error;
    //   }
    // },
  },
});

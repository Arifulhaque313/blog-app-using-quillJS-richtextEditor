<script setup>
import { ref,onMounted, computed } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useBlogStore } from '@/stores/blogStore';
import Quill from 'quill';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css'; 

const blogStore = useBlogStore();
const { fetchBlogs } = blogStore;

const posts = ref([]);

onMounted(async () => posts.value = await fetchBlogs());

</script>

<template>
    <div class="max-w-7xl mx-auto p-6 lg:px-8">
      <h1>Blogs</h1>
   
        <div class="mt-4">
            <div v-for="post in posts.data" :key="post.id" class="border p-4 mb-3 rounded">
               <h1> <span class="text-bold">{{ post.id }}</span> {{ post.title }} </h1>
               <div v-html="post.body"></div>

               <div class="mt-4">
                    <quill-editor
                        theme="snow"
                        toolbar="full"
                        v-model:content="post.body"
                        placeholder="Enter your description"
                        contentType="html"
                        style="min-height: 250px"
                    ></quill-editor>
               </div>
            </div>
        </div>
      

      <div class="mt-4">
        <RouterLink to="/blogs/create" class="px-4 py-2 bg-violet-600 text-white rounded">create</RouterLink>
      </div>
    </div>
  </template>
  

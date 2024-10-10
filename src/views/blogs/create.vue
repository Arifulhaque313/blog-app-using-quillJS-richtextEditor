<script setup>
import { ref, reactive, computed } from 'vue';
import { useBlogStore } from '@/stores/blogStore';
import Quill from 'quill';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css'; 


const blogStore = useBlogStore();
const { createBlog } = blogStore;

const formData = reactive({
    title: "Laravel is ?",
    body: "<p>Laravel is </p><p>sdfsdf</p><p>sdfsdf</p><h1>sdfsdf</h1><ul><li>asdasda</li><li>sdfsd</li><li>sdfsd</li><li>sdfsd</li><li>sdfs</li><li><br></li></ul>"
});

</script>


<template>
    <div class="max-w-7xl mx-auto p-6 lg:px-8">
        <!-- <div class="border p-4">
            {{ formData.body }}
            <div v-html="htmlContent">

            </div>
        </div> -->
        <h1 class="mt-4 text-xl mb-2">Write a Blog</h1>

        <div>
            <form @submit.prevent="createBlog(formData)">

                <div class="mb-4">
                    <label for="title" class="text-xl font-bold">Title</label> <br>
                    <input v-model="formData.title" id="title" type="text" class="border w-full  px-4 py-2 b" placeholder="Enter post title" required />
                </div>

                <div>
                <label for="content" class="text-xl font-bold">Content</label>
                <quill-editor
                    theme="snow"
                    toolbar="full"
                    v-model:content="formData.body"
                    placeholder="Enter your description"
                    contentType="html"
                    style="min-height: 250px"
                ></quill-editor>
                    
                </div>

                <button type="submit" class="mt-6 px-4 py-2 bg-violet-600 text-white rounded">Create Post</button>
            </form>
        </div>
    </div>
  </template>
  
  
  <style>
   
   ul {
        @apply !pl-5 list-disc;
        padding-left: 60px !important;
    }
    ol {
        @apply !pl-5 list-decimal;
        padding-left: 60px !important;
    }

  </style>
  
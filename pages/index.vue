<template>
  <div class="flex flex-col flex-1 w-100 overflow-x-clip">
    <main class="min-h-screen my-10 mx-2">
      <motion.div
        :initial="{ x: 'calc(100vw - 100%)' }"
        :animate="{ x: '0' }"
        class="w-100"
      >
        <span class="font-black text-white text-4xl"
          >i'm
          <span class="text-red-400 text-shadow-lg/50 text-shadow-red-400"
            >Graham</span
          >, a developer and student</span
        >
      </motion.div>

      <motion.div class="prose prose-invert my-10">
        <h2>About me</h2>
        <p>
          I'm a student and developer working on open source technology and
          maintenance.
        </p>

        <h2>Projects</h2>
        <div class="flex flex-col gap-2">
          <Project
            title="FRCTools"
            link="https://frctools.com"
            description="Custom search engine and frontend for the FIRST Robotics Competition rules base utilizing LLM embeddings for accurate semantic search. Built with Nuxt and Tailwind."
          ></Project>
          <Project
            title="Lunch"
            link="https://lunch.grahamsh.com/lunch"
            description="Daily lunch information from reverse engineered provider API presented in an elegant interface. Built with Tailwind and Sveltekit."
          ></Project>
          <Project
            title="Special Dates"
            link="https://lunch.grahamsh.com/dates/special/all"
            description="Automated tracker of special school schedules. Built with Tailwind and Sveltekit."
          ></Project>
          <Project
            title="Dates"
            link="https://lunch.grahamsh.com/dates"
            description="Statistics about school schedule. Built with Tailwind and Sveltekit, pulling data from the Google Calendar API."
          ></Project>
          <Project
            title="Ejenda"
            link="https://ejenda.org"
            description="Smart assignment tracker built with students in mind. Built with Nuxt, Tailwind, Drizzle, and Postgres."
          ></Project>
        </div>
        <h2>Experience</h2>
        <div>
          <Technology v-for="technology of technologies" :key="technology">{{
            technology
          }}</Technology>
        </div>
      </motion.div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
const technologies = [
  'Vue',
  'Nuxt',
  'Svelte',
  'Tailwind',
  'Typescript',
  'Java',
  'Python',
]
</script>

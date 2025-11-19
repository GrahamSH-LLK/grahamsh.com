<template>
  <div class="flex flex-col flex-1 w-100 overflow-x-clip">
    <main class="min-h-screen my-10 mx-2">
      <motion.div :initial="{ x: 'calc(100vw - 100%)' }" :animate="{ x: '0' }" class="w-100">
        <span class="font-bold text-white text-4xl">i'm
          <span class="text-red-400 text-shadow-lg/50 text-shadow-red-400">Graham</span>, a developer and student</span>
      </motion.div>

      <motion.div class="prose prose-invert my-10">
        <h2>About me</h2>
        <p>
          I'm a student and developer working on open source technology and
          maintenance.
        </p>

        <h2>Projects</h2>
        <div class="flex flex-col gap-2">
          <Project title="FRCTools" image="frctools" link="https://frctools.com"
            description="Custom search engine and frontend for the FIRST Robotics Competition rules base utilizing LLM embeddings for accurate semantic search used by thousands yearly. Built with Nuxt and Tailwind.">
          </Project>
          <Project title="FRCTools Orders" image="orders" link="https://orders.frctools.com"
            description="Custom order tracking platform built for FIRST Robotics Comptetion teams with special integrations for FRC vendors and team permissions and management.">
          </Project>
          <Project title="Writing Center Scheduler" image="wctool"
            description="Fully integrated scheduler for school peer tutoring center for clients, tutors, and writing center directors. Built with Nuxt, Drizzle, and Cloudflare D1.">
          </Project>

          <Project title="Lunch" image="lunch" link="https://lunch.grahamsh.com/lunch"
            description="Daily lunch information from reverse engineered provider API presented in an elegant interface. Built with Tailwind and Sveltekit.">
          </Project>
          <Project title="Special Dates" image="special_dates" link="https://lunch.grahamsh.com/dates/special/all"
            description="Automated tracker of special school schedules. Built with Tailwind and Sveltekit."></Project>
          <Project title="Swambase" image="swambase" link="https://swambase.grahamsh.com/teams/1"
            description="Full stack swim team result and entry tracker built on reverse engineered exports from legacy team software." />
          <Project title="Dates" link="https://lunch.grahamsh.com/dates"
            description="Statistics about school schedule. Built with Tailwind and Sveltekit, pulling data from the Google Calendar API.">
          </Project>
          <Project title="Ejenda" image="ejenda"
            description="Smart assignment tracker built with students in mind. Built with Nuxt, Tailwind, Drizzle, and Postgres. Currently down for maintenance.">
          </Project>

        </div>
        <h2>Experience</h2>
        <div>
          <Technology v-for="technology of technologies" :key="technology">{{
            technology
            }}</Technology>
        </div>
        <div class="flex justify-center gap-2">
          <FriendGif site="https://varun.ch" imageUrl="https://varun.ch/image/88x31/varun.ch.png" />
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

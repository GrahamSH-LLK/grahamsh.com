<template>
  <div
    class="bg-blue-50 p-5 border border-blue-100 border-solid flex justify-between sticky top-0 backdrop-filter backdrop-blur-lg bg-opacity-75 z-20"
  >
    <nuxt-link to="/"
      ><span class="font-black text-3xl text-gray-800"
        >grahamsh<span class="text-blue-600">.</span></span
      ></nuxt-link
    >
    <div class="flex">
      <NavLink to="/blog"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          /></svg
      ></NavLink>
      <NavLink to="/contact"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          /></svg
      ></NavLink>
    </div>
  </div>
</template>

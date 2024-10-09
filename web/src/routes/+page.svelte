<script>
  import kaviyarsanStylish from "../assets/images/kaviyarsanStylish.jpg";
</script>

<section id="home" class="bg-gray-100 text-gray-800 py-10">
  <div class="intro text-center mb-12">
    <img
      src={kaviyarsanStylish}
      alt="Your Name"
      class="profile-pic rounded-full w-32 h-32 mx-auto mb-4 shadow-lg"
    />
    <h1 class="text-4xl font-bold mb-2">Hello, I'm KAVIYARASAN</h1>
    <p class="text-lg font-light">
      A passionate full stack developer with expertise in front-end and back-end
      development.
    </p>
  </div>

  <div class="skills-highlight text-center mb-12">
    <h2 class="text-3xl font-semibold mb-6">Popular Skills</h2>
    <ul class="flex justify-center space-x-8 text-xl">
      <li class="hover:text-indigo-600 transition duration-300">JavaScript</li>
      <li class="hover:text-indigo-600 transition duration-300">HTML/CSS</li>
      <li class="hover:text-indigo-600 transition duration-300">SvelteJS</li>
      <!-- Add icons or brief descriptions as needed -->
    </ul>
  </div>

  <div class="featured-projects">
    <h2 class="text-3xl font-semibold text-center mb-8">Featured Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="project bg-white shadow-md p-6 rounded-lg">
        <h3 class="text-2xl font-semibold mb-2">Project 1</h3>
        <p class="text-gray-600">Short description of the project...</p>
      </div>
      <div class="project bg-white shadow-md p-6 rounded-lg">
        <h3 class="text-2xl font-semibold mb-2">Project 2</h3>
        <p class="text-gray-600">Short description of the project...</p>
      </div>
      <!-- More projects as needed -->
    </div>
  </div>
</section>

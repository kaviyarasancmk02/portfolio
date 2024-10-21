<script lang="ts">
  let experiences = {
    sharpAbacus: {
      company: "Sharp Abacus",
      position: "Internship",
      duration: "6 months",
      role: "Front End Development",
      timePeriod: "July 2023 to Dec 2023",
      description: `Completed a six-month internship at Sharp Abacus, 
      focusing on front-end development. Learned and applied HTML, CSS, 
      JavaScript, Tailwind CSS, Svelte, and related technologies.`,
      color: "green",
    },
    genpact: {
      company: "Genpact",
      position: "Internship",
      duration: "6 months",
      role: "Low-Code Development",
      timePeriod: "Jan 2024 to June 2024",
      description: `Completed a six-month internship at Genpact, focusing on 
      low-code development. Learned and applied Generative AI, Power Apps, 
      Power Automate, Power Virtual Agent, and related technologies.`,
      color: "sky",
    },
  };
</script>

<section
  class="w-full p-6 md:p-8 lg:p-14 bg-gray-200 space-x-8 space-y-8 transition-all duration-300 ease-linear"
>
  <h1 class="text-4xl font-bold">Work Experience</h1>
  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-300 ease-linear"
  >
    <div
      class="space-y-2 p-2 m-2 group border border-transparent rounded-md transition-all duration-300 ease-linear hover:border-white hover:m-0 hover:shadow-md"
    >
      <div
        class="text-blue-800 group-hover:text-blue-600 transition-all duration-300 ease-linear"
      >
        <span class="text-2xl font-semibold">
          {experiences.genpact.company} |
        </span>
        <span class="text-xl font-medium">
          {experiences.genpact.position}
        </span>
      </div>
      <div
        class="space-y-2 bg-white p-4 rounded-lg group-hover:p-6 transition-all duration-300 ease-linear text-justify relative"
      >
        <h3
          class="text-gray-600 group-hover:text-blue-800 text-lg font-medium transition-all duration-300 ease-linear"
        >
          {experiences.genpact.role}
        </h3>
        <span
          class="text-gray-400 group-hover:text-teal-800 group-hover:font-semibold transition-all duration-300 ease-linear"
        >
          {experiences.genpact.timePeriod}
        </span>
        <p
          class="text-gray-500 group-hover:text-gray-600 group-hover:text-base group-hover:font-normal text-sm font-medium transition-all duration-300 ease-linear"
        >
          {experiences.genpact.description}
        </p>
        <div>
          <a
            href="https://drive.google.com/file/d/1X1awRip9ah8JBxBcaExt_fk0SQtIoYmC/view?usp=sharing"
            target="_blank"
            class="px-4 py-1 absolute bottom-0 right-0 text-white rounded-tl-2xl text-right bg-green-700"
            >View Certification</a
          >
        </div>
      </div>
    </div>
    <div
      class="space-y-2 p-2 m-2 group border border-transparent rounded-md transition-all duration-300 ease-linear hover:border-white hover:m-0 hover:shadow-md"
    >
      <div
        class="text-blue-800 group-hover:text-blue-600 transition-all duration-300 ease-linear"
      >
        <span class="text-2xl font-semibold">
          {experiences.sharpAbacus.company} |
        </span>
        <span class="text-xl font-medium">
          {experiences.sharpAbacus.position}
        </span>
      </div>
      <div
        class="space-y-2 bg-white p-4 rounded-lg group-hover:p-6 transition-all duration-300 ease-linear text-justify relative"
      >
        <h3
          class="text-gray-600 group-hover:text-blue-800 text-lg font-medium transition-all duration-300 ease-linear"
        >
          {experiences.sharpAbacus.role}
        </h3>
        <span
          class="text-gray-400 group-hover:text-teal-800 group-hover:font-semibold transition-all duration-300 ease-linear"
        >
          {experiences.sharpAbacus.timePeriod}
        </span>
        <p
          class="text-gray-500 group-hover:text-gray-600 group-hover:text-base group-hover:font-normal text-sm font-medium transition-all duration-300 ease-linear"
        >
          {experiences.sharpAbacus.description}
        </p>
        <div>
          <a
            href="https://sharpabacus.com/"
            target="_blank"
            class="px-4 py-1 absolute bottom-0 right-0 text-white rounded-tl-2xl text-right bg-green-700"
            >View Organization</a
          >
        </div>
      </div>
    </div>
  </div>
</section>

<script>
  import {userDetails} from "../../data/userDetails.js";
  const verticalLine =
    '<div class="hidden md:block rounded w-0.5 h-32 bg-gray-100 opacity-10"></div>';
  const horizontalLine =
    '<div class="hidden md:block rounded w-2/3 h-0.5 bg-gray-100 opacity-10"></div>';

  const socialMedia = {
    linkedin: {
      name: "LinkedIn",
      url: userDetails.linkedin,
    },
    github: {
      name: "HitHub",
      url: userDetails.github,
    },
    instagram: {
      name: "Instagram",
      url: userDetails.instagram,
    },
    facebook: {
      name: "FaceBook",
      url: userDetails.facebook,
    },
    youtube: {
      name: "YouTube",
      url: userDetails.youtube,
    },
  };
</script>

<footer
  class="bg-indigo-950 text-white p-6 flex flex-col items-center justify-between gap-4"
>
  <div
    class="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
  >
    <div class="">
      <span class="font-semibold text-lg text-gray-100"> Contact: </span>
      <ul class="text-sm p-2 space-y-1 text-gray-200">
        <li class="">Address: {userDetails.simpleAddress}</li>
        <li class="">Phone: {userDetails.phone}</li>
        <li class="">Whatsapp: {userDetails.whatsapp}</li>
        <li class="">Email: {userDetails.email}</li>
      </ul>
    </div>
    {@html verticalLine}
    <div class="">
      <span class="font-semibold text-lg text-gray-100"> Education </span>
      <ul class="text-sm p-2 space-y-1 text-gray-200">
        <li class="">
          {userDetails.education.msc.name} - {userDetails.education.msc
            .percentage}
        </li>
        <li class="">
          {userDetails.education.bsc.name} - {userDetails.education.bsc
            .percentage}
        </li>
        <li class="">
          {userDetails.education.hsc.name} - {userDetails.education.hsc
            .percentage}
        </li>
        <li class="">
          {userDetails.education.sslc.name} - {userDetails.education.sslc
            .percentage}
        </li>
      </ul>
    </div>
    {@html verticalLine}
    <div class="">
      <span class="font-semibold text-lg text-gray-100">
        Personal Details
      </span>
      <ul class="text-sm p-2 space-y-1 text-gray-200">
        <li class="">Name: {userDetails.fullName}</li>
        <li class="">Date of Birth: {userDetails.dateOfBirth}</li>
        <li class="">Marital Status: {userDetails.maritalStatus}</li>
        <li class="">Languages: {userDetails.languages}</li>
      </ul>
    </div>
  </div>
  {@html horizontalLine}
  <div class="flex items-center justify-center gap-6 flex-wrap p-4">
    {#each Object.entries(socialMedia) as [key, link]}
      <a
        href={link.url}
        target="_blank"
        class="relative group transition-all duration-300 ease-in-out"
        >{link.name}
        <span
          class="absolute bottom-0 left-0 h-0.5 rounded bg-gray-300 transition-all duration-300 ease-in-out w-0 group-hover:w-full"
        ></span>
      </a>
    {/each}
  </div>
</footer>

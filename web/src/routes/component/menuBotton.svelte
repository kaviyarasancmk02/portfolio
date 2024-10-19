<script>
  export let isMenuShow;
</script>

<div
  class={`${isMenuShow ? "border-indigo-500" : "border-fuchsia-500"} block md:hidden border w-8 h-10 rounded shadow p-0.5 transition-all duration-300 ease-in-out`}
>
  <div
    class={`${isMenuShow ? "bg-cyan-500" : "bg-blue-500"} w-6 h-1 rounded-sm m-0.5 transition-all duration-300 ease-in-out`}
  ></div>
  <div class="flex items-center justify-center">
    <div
      class={`${isMenuShow ? "w-4 bg-green-400" : "w-2 bg-red-300"} h-1 rounded-sm m-0.5 transition-all duration-300 ease-in-out`}
    ></div>
    <div
      class={`${isMenuShow ? "w-2 bg-green-500" : "w-4 bg-red-400"} h-1 rounded-sm m-0.5 transition-all duration-300 ease-in-out`}
    ></div>
  </div>
  <div class="flex items-center justify-center">
    <div
      class={`${isMenuShow ? "w-2 bg-green-700" : "w-4 bg-red-600"} h-1 rounded-sm m-0.5 transition-all duration-300 ease-in-out`}
    ></div>
    <div
      class={`${isMenuShow ? "w-4 bg-green-800" : "w-2 bg-red-700"} h-1 rounded-sm m-0.5 transition-all duration-300 ease-in-out`}
    ></div>
  </div>
  <div
    class={`${isMenuShow ? "bg-blue-500" : "bg-cyan-500"} w-6 h-1 rounded-sm m-0.5 transition-all duration-300 ease-in-out`}
  ></div>
  <div
    class={`${isMenuShow ? "border-indigo-500 rotate-[200deg]" : "border-fuchsia-500 rotate-0"} border bg-white absolute bottom-0 right-4 w-5 h-5 rounded-full m-0.5 transition-all duration-300 ease-in-out flex items-center justify-center p-1`}
  >
    <div
      class={`${isMenuShow ? "bg-indigo-500" : "bg-fuchsia-500"} w-0.5 h-3 bg-red-300 rounded-sm m-0.5`}
    ></div>
    <div
      class={`${isMenuShow ? "bg-indigo-500" : "bg-fuchsia-500"} top-0.5 left-1.5 rotate-45 w-0.5 h-2 bg-red-300 absolute rounded-sm`}
    ></div>
    <div
      class={`${isMenuShow ? "bg-indigo-500" : "bg-fuchsia-500"} top-0.5 right-1.5 -rotate-45 w-0.5 h-2 bg-red-300 absolute rounded-sm`}
    ></div>
  </div>
</div>

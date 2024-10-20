<script>
  export let color = "bg-blue-600";
  $: style = `${color} w-2 h-2 rounded-full transition-all duration-500`;
</script>

<div class="w-4 h-4 relative flex items-center justify-center">
  <div class={style}></div>
  <div class={`${style} animate-ping absolute`}></div>
</div>

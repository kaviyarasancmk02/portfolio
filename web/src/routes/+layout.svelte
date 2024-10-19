<script>
  import "../app.css";
  import Header from "./component/header.svelte";
  import Footer from "./component/footer.svelte";
</script>

<div class="min-h-screen flex flex-col w-full">
  <Header />

  <main class="flex-grow scroll-smooth">
    <slot />
  </main>

  <Footer />
</div>

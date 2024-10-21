<script>
  import "../app.css";
  import Header from "./component/header.svelte";
  import Footer from "./component/footer.svelte";
</script>

<div class="min-h-screen flex flex-col w-full">
  <section class="">
    <Header />
  </section>

  <main class="flex-grow">
    <slot />
  </main>

  <section class="">
    <Footer />
  </section>
</div>

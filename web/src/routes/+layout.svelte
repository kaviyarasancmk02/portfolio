<script>
	import '../app.css';
	import Header from './components/header.svelte';
	import Footer from './components/footer.svelte';
	import { gradientStyles } from '../lib/themes/layoutStyle.svelte';

	let { children } = $props();
</script>

<div class={`${gradientStyles.cyanLight} flex min-h-screen w-full flex-col`}>
	<section class="">
		<Header />
	</section>

	<main class="flex-grow">
		{@render children()}
	</main>

	<section class="">
		<Footer />
	</section>
</div>

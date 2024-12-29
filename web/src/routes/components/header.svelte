<script>
	import { flexStyles, gradientStyles } from '$lib/themes/layoutStyle.svelte';
	import profile from '../../assets/images/profile/profile.png';
</script>

<header
	class={`${flexStyles.centerBetween} sticky top-0 z-50 rounded-b-md p-2 px-6 font-medium text-stone-700 shadow-md md:rounded-br-3xl md:px-10 lg:px-16`}
>
	<a href="/" class={`${flexStyles.centerCenter} gap-4 md:items-center`}>
		<img
			src={profile}
			alt="profile"
			class="h-auto w-11 rounded-full border border-white shadow-md"
		/>
		<span class={`min-w-max text-lg lg:text-xl`}>
			<span class="text-xl lg:text-2xl"> C </span>Kaviyarasan
		</span>
	</a>
</header>

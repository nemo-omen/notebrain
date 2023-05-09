<script>
	import '$lib/style/pico/css/pico.min.css';
	import '$lib/style/main.css';
	import Header from '$lib/components/Header.svelte';
	export let data;
</script>

<Header {data} />

<main>
	<slot />
</main>

<footer>Footer</footer>

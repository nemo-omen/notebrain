<script>
	import '$lib/style/pico/css/pico.min.css';
	import '$lib/style/main.css';
	export let data;
</script>

<header>
	<nav>
		<ul>
			<li>
				<a href="/" class="brand">NB</a>
			</li>
		</ul>
		<ul>
			{#if !data.user}
				<li>
					<a href="/login" class="contrast" role="button">Sign In</a>
				</li>
				<li>
					<a href="/register" role="button">Register</a>
				</li>
			{:else}
				<li>
					<form action="/logout" method="post" style="margin: 0; padding: 0;">
						<button type="submit" style="margin: 0; padding: 0.5em">Sign Out</button>
					</form>
				</li>
			{/if}
		</ul>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>Footer</footer>

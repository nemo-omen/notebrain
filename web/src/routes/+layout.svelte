<script>
	import '../style/app.css';
	export let data;
</script>

<header>
	<nav>
		<ul>
			<li>
				<a href="/"><strong>NB</strong></a>
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
					<a href="/login" class="button">Sign In</a>
				</li>
			{/if}
		</ul>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>Footer</footer>

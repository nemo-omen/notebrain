<script>
	export let form;
</script>

<div class="container">
	<hgroup>
		<h2>Sign in to your account</h2>
		<p>or <a href="/register" class="">register</a> if you don't have an account</p>
	</hgroup>
	<form action="?/login" method="POST">
		<label for="email">Email</label>
		<input type="email" name="email" id="email" />
		<label for="password">Password</label>
		<input type="password" name="password" id="password" />
		<input type="submit" value="Sign In" />
		{#if form?.notVerified}
			<div class="alert error" role="alert">
				<p>You must verify your email before logging in.</p>
			</div>
		{/if}
	</form>
</div>

<style>
	.container h2,
	.container p {
		text-align: center;
		color: var(--contrast);
	}
</style>

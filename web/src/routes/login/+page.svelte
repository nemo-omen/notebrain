<script></script>

<div class="container">
	<hgroup>
		<h2>Sign in</h2>
		<p>or <a href="/register" class="">register</a> if you don't have an account</p>
	</hgroup>
	<form action="?/login" method="POST">
		<label for="email">Email</label>
		<input type="email" name="email" id="email" />
		<label for="password">Password</label>
		<input type="password" name="password" id="password" />
		<input type="submit" value="Sign In" />
	</form>
</div>

<style>
	.container h2,
	.container p {
		text-align: center;
	}
</style>

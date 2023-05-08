<script></script>

<div class="container">
	<hgroup>
		<h2>Register for an account</h2>
		<p>or <a href="/login" class="">sign in</a> if you already have an account</p>
	</hgroup>
	<form action="?/register" method="POST">
		<label for="name">Name</label>
		<input type="text" name="name" id="name" />
		<label for="email">Email</label>
		<input type="email" name="email" id="email" />
		<label for="password">Password</label>
		<input type="password" name="password" id="password" />
		<label for="password-confirm">Confirm Password</label>
		<input type="password" name="password-confirm" id="password-confirm" />
		<input type="submit" value="Register" />
	</form>
</div>

<style>
	.container h2,
	.container p {
		text-align: center;
	}
</style>

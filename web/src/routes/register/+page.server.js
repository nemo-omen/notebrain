import { error, redirect } from '@sveltejs/kit';
import { generateUsername } from '$lib/utils.js';

export const actions = {
	register: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());
		const username = generateUsername(body.name.split(' ').join('')).toLowerCase();
		const userData = { username, ...body };

		console.log({ userData });

		try {
			await locals.pb.collection('users').create(userData);
			await locals.pb.collection('users').requestVerification(userData.email);
		} catch (err) {
			console.error('Error: ', err);
			throw error(500, 'Something went wrong');
		}

		throw redirect(303, '/login');
	}
};

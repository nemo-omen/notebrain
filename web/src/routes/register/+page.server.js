import { generateUsername } from '$lib/utils.js';

export const actions = {
  registerAction: async({locals, request}) => {
    const body = Object.fromEntries(await request.formData());
    let userName = generateUsername(body.name.split(' ').join('')).toLowerCase();

    try {
      await locals.pb.collection('users').create({username, ...body});
      await locals.pb.collection('users').requestVerification(body.email);
    }catch(error) {
      console.error(error);
      throw error(500, 'Something went wrong');
    }

    throw redirect(303, '/login');
  }
}
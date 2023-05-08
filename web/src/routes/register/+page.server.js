export const actions = {
  registerAction: async({locals, request}) => {
    const body = Object.fromEntries(await request.formData());
  }
}
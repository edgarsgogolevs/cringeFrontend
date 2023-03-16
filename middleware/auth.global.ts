export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to.fullPath);
  console.log("suck balls");
  console.log(from.fullPath);
});

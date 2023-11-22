export default defineNuxtRouteMiddleware(() =>{
  const user = useSupabaseUser()
  console.log(navigator)
  if(!user.value) {
    console.log(user.value)
    return navigateTo("/login")
  }
})
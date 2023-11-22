<script setup>
definePageMeta({
  middleware: ["auth"]
})
const user = useSupabaseUser()
const client = useSupabaseClient()
const router = useRouter()

async function logoutHandler() {
  try{
    const { error } = await client.auth.signOut()
    if(error) throw error
    router.go('/login')
  }catch(error){
    console.log(error.message)
  }
}
</script>
<template>
  <div class="layout__dashboard">
    <DashboardNavbar width="250px" class="sidenav" />
    <div class="main">
      <DashboardHeader @logout="logoutHandler" />
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
<style lang="scss" scoped>
.layout__dashboard{
  position: relative;
  overflow-x: hidden;
}
.sidenav{
  position: fixed;
  left: 0;
  top: 0;
}
.main{
  position: relative;
  left: 250px;
  max-width: calc(100% - 250px);
  margin-top: 80px;
}
</style>
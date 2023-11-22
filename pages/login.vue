<script setup>
const { $swal } = useNuxtApp()
const client = useSupabaseClient()
const router = useRouter()

const email = ref('')
const pwd = ref(null)
const errMsg = ref('')
const successMsg = ref('')

async function loginHandler () {
  try{
    const { error } = await client.auth.signInWithPassword({
      email: email.value,
      password: pwd.value
    })
    if(error) throw error
    router.push('/dashboard')
    errMsg.value = ''
  }catch(error){
    errMsg.value = error.message
    $swal.fire({
      title: 'Failed',
      text: error.message,
      icon: 'error',
    })
  }
}
</script>

<template>
  <div class="container section__top_page" style="padding-bottom: 60px;">
    <form action="" @submit.prevent="loginHandler">
      <h2>Welcome Back!</h2>
      <div class="form-control">
        <label for="email">Email</label>
        <TextField v-model="email" id="email" type="email" placeholder="Enter your email" required></TextField>
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <TextField v-model="pwd" id="password" type="password" placeholder="Enter your password" required></TextField>
      </div>
      <Button class="full-width btn_login" type="submit">Login</Button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
h2{
  margin-bottom: 32px;
}
form{
  max-width: 400px;
  margin: 0 auto;
}
.form-control{
  margin: 24px 0;
}
.btn_login{
  margin-top: 40px;
}
</style>
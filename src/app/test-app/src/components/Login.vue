<template>
  <div class="form-container">
    <form>

      Email:
      <input type="email" id="email" name="email"/> <br>
      Password:
      <input type="Password" id="pass" name="pass"> <br>

      <div class="buttons">
        <input type="button" value="Submit" @click="submit()" />
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data(){
    return {
      foobar : null
    }
  },
  methods: {
    submit(){
      this.$router.push("/registration");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-container input {
  display: inline;
}
</style>

<template>
  <div class="form-container">
    <form>
      <div class="person">
        <label> Firstname </label>
        <input type="text" name="firstname" size="15" /> <br />
        <br />
        <label> Middlename: </label>
        <input type="text" name="middlename" size="15" /> <br />
        <br />
        <label> Lastname: </label>
        <input type="text" name="lastname" size="15" /> <br />
        <br />
      </div>
      <div class="course">
        <label>
          Course :
        </label>
        <select>
          <option value="Course">Course</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          <option value="B.Tech">B.Tech</option>
          <option value="MBA">MBA</option>
          <option value="MCA">MCA</option>
          <option value="M.Tech">M.Tech</option>
        </select>
      </div>
      <br />
      <br />
      <div class="gender">
        <label> Gender : </label><br />
        <input type="radio" name="male" /> Male <br />
        <input type="radio" name="female" /> Female <br />
        <input type="radio" name="other" /> Other
      </div>
      <br />
      <br />
      <div class="buttons">
        <input id="btn-submit" type="button" value="Submit" @click="submit()" />
      </div>
    </form>
    <div v-if="complete" class="complete">
      <h1>Complete!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      complete: false,
    };
  },
  methods: {
    submit() {
      this.complete = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-container input {
  display: inline;
}
</style>

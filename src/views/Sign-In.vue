<!-- 
	This is the sign in page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<template>
  <div class="sign-in">
    <a-row type="flex" :gutter="[24, 24]" justify="space-around" align="middle">
      <!-- Sign In Image Column -->
      <a-col
        :span="24"
        :md="12"
        :lg="{ span: 12, offset: 0 }"
        :xl="{ span: 6, offset: 2 }"
        class="col-img"
      >
        <!-- <img src="images/img-signin.jpg" alt="" /> -->
        <img src="images/img-login.png" alt="" />
      </a-col>
      <!-- Sign In Image Column -->

      <!-- Sign In Form Column -->
      <a-col :span="24" :md="12" :lg="12" :xl="12" class="col-form">
        <h1 class="mb-15">Sign In</h1>
        <h5 class="font-regular text-muted">
          Enter your email and password to sign in
        </h5>

        <!-- Sign In Form -->
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
          :hideRequiredMark="true"
        >
          <a-form-item class="mb-10" label="Email" :colon="false">
            <a-input
              v-decorator="[
                'email',
                {
                  rules: [
                    { required: true, message: 'Please input your email!' },
                  ],
                },
              ]"
              placeholder="Email"
            />
          </a-form-item>
          <a-form-item class="mb-5" label="Password" :colon="false">
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [
                    { required: true, message: 'Please input your password!' },
                  ],
                },
              ]"
              type="password"
              placeholder="Password"
            />
          </a-form-item>
          <a-form-item class="mb-10">
            <a-switch v-model="rememberMe" /> Remember Me
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              block
              html-type="submit"
              class="login-form-button"
            >
              SIGN IN
            </a-button>
          </a-form-item>
        </a-form>
        <!-- / Sign In Form -->

        <p class="font-semibold text-muted">
          Don't have an account?
          <router-link to="/sign-up" class="font-bold text-dark"
            >Sign Up</router-link
          >
        </p>
      </a-col>
      <!-- / Sign In Form Column -->
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Binded model property for "Sign In Form" switch button for "Remember Me" .
      rememberMe: true,
    };
  },
  beforeCreate() {
    // Creates the form and adds to it component's "form" property.
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    // Handles input validation after submission.
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (err) {
          console.log("err: ", err);
          return;
        }
        var data = {
          email: values.email,
          password: values.password,
        };
        this.$store
          .dispatch("login", data)
          .then((res) => {
            this.$router.replace({ name: "Home" });
          })
          .catch((err) => {
            console.log("err: ", err);
            return;
          });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: #ffffff;
  /deep/.col-form.ant-col.ant-col-24.ant-col-md-12.ant-col-lg-12.ant-col-xl-12 {
    padding: 12px 120px !important;
  }
}
</style>

<template>
  <div class="login-container" @keyup.enter="handleLogin">
    <div class="login-time">
      {{ time }}
    </div>
    <div class="login-weaper">
      <div class="login-left animate__animated animate__fadeInLeft">
        <img class="img" src="/img/logo.png" alt="" />
        <p class="title">{{ $t('login.info') }}</p>
      </div>
      <div class="login-border animate__animated animate__fadeInRight">
        <div class="login-main">
          <p class="login-title">
            {{ $t('login.title') }}{{ website.title }}
            <topLang />
          </p>
          <userLogin />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import userLogin from './userlogin.vue';
import topLang from '@/components/top-lang/top-lang.vue';
export default {
  name: 'login',
  components: {
    userLogin,
    topLang,
  },
  data() {
    return {
      time: '',
    };
  },
  created() {
    this.getTime();
    setInterval(() => {
      this.getTime();
    }, 1000);
  },
  mounted() {},
  props: [],
  methods: {
    getTime() {
      this.time = this.$dayjs().format('YYYY年MM月DD日 HH:mm:ss');
    },
  },
};
</script>

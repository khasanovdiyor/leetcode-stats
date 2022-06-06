<template>
  <div class="users-list">
    <a
      :href="`https://leetcode.com/${profile.username}`"
      target="blank"
      v-for="(profile, idx) in profiles"
      :key="idx"
    >
      <User :profile="profile" :order="idx + 1" />
    </a>
  </div>
</template>

<script>
import User from "./User.vue";
export default {
  name: "UsersList",
  components: {
    User,
  },
  data: () => {
    return {
      profile: null,
      usernames: process.env.VUE_APP_USERNAMES,
      profiles: [],
    };
  },
  methods: {
    async getUserProfile() {
      this.profiles = (
        await this.axios.get(`${process.env.VUE_APP_BASE_API}`)
      ).data;
    },
  },
  mounted() {
    this.getUserProfile();
  },
};
</script>

<style>
.users-list {
  margin: 2rem;
}

a {
  text-decoration: none;
}
</style>

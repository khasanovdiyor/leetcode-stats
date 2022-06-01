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
      this.usernames = this.usernames.split(", ");
      const promises = this.usernames.map((profile) => {
        return this.axios.get(
          `https://leetcode-stats-api.herokuapp.com/${profile}`
        );
      });

      const profiles = await Promise.all(promises);
      this.profiles = profiles.map((profile, idx) => {
        profile.data.username = this.usernames[idx];
        return profile.data;
      });
      this.profiles = this.profiles.sort(
        (b, a) => a.totalSolved - b.totalSolved
      );
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

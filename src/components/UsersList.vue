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
      usernames: [
        "khasanovdiyor",
        "mirjahonn",
        "akbarov_",
        "komiljon4457",
        "UmidMamasoliev",
        "azizbekhamidov11",
        "jasur-sh",
      ],
      profiles: [],
    };
  },
  methods: {
    async getUserProfile() {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.users-list {
  margin: 2rem;
}

a {
  text-decoration: none;
}
</style>

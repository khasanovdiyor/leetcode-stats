<template>
  <div class="user">
    <div class="username">{{ order }}. {{ profile.username }}</div>
    <div class="questions">
      <span
        :class="`question-type ${level.difficulty.toLowerCase()}`"
        v-for="(level, idx) of profile.submitStats.submissionNum"
        :key="idx"
        >{{ level.difficulty }}: {{ level.count }}</span
      >
    </div>
    <div class="missed-days">Missed Days: {{ profile.missedDaysCount }}</div>
  </div>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
    },
    order: {
      type: Number,
    },
  },
};
</script>

<style>
.user {
  display: flex;
  background: #fdf7be;
  padding: 1rem;
  border-radius: 5px;
  color: black;
  margin-bottom: 1rem;
}

.username {
  width: 20%;
  font-size: 1.5rem;
}

.questions {
  width: 60%;
}
.question-type {
  font-weight: bold;
  display: inline-block;
  width: 20%;
}

.missed-days {
  margin-left: auto;
}

.easy {
  color: #00974e;
}

.medium {
  color: #977f00;
}

.hard {
  color: #970000;
}
</style>
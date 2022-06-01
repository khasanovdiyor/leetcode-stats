<template>
  <header class="header">
    <div>Leetcode Challenge</div>
    <div>Day {{ day }}/60</div>
  </header>
</template>

<script>
export default {
  data: () => {
    return {
      today: new Date(),
      startDate: new Date("5/31/2022"),
    };
  },
  computed: {
    day() {
      return Math.ceil((this.today - this.startDate) / 8.64e7);
    },
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-size: 3rem;
}
</style>
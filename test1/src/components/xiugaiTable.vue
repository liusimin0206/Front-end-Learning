<template>
  <div>
    <div>{{ msg }}</div>
    <table class="table table-bordered table-hover table-striped">
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Ctime</th>
        <th>Operation</th>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.ctime }}</td>
          <td>
            <a href="">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "111",
      list: [
        {
          id: 1,
          name: "奔驰",
          ctime: new Date()
        },
        {
          id: 2,
          name: "宝马",
          ctime: new Date()
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
@import "../assets/mycss.css";
</style>

<template>
  <div class = "home">
    <div class="tasks-container" id = "tasklist">
      <h1>Archived or Completed</h1>

      <ul class = "task-list" >
        <li class = "task-list-item" v-for="archivedTask in archivedTasks" :key = "archivedTask">
          <label class = "task-list-item-label">
            <input type = "checkbox" checked disabled>
            <span>{{archivedTask.message}}</span>
          </label>
          <span class = "delete-archived-task-btn" title = "Delete Task" @click = "delTask"></span>
        </li>
      </ul>

    </div>
    <div class = "go-to-archived-btn">
      
      <div @click = "goBack" class = "go-to-archived-link">Go Back</div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArchivedPage',
  data() {
    return {
      archivedTasks: []
    }
  },
  created(){
    this.archivedTasks = JSON.parse(this.$route.params.data)
  },
  methods: {
    goBack: function (){
      this.$router.push({name: "home", params: {data: JSON.stringify(this.archivedTasks)}})
    },
    delTask: function (archivedTask) {
      this.archivedTasks.splice(this.archivedTasks.indexOf(archivedTask), 1)
    },
  }
}
</script>

<style>
.tasks-container{
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 480px;
  width: 100%;
  max-height: 100%;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 25px;
  overflow: auto;
  color: #222;
}
:root{
  --checkbox-color: rgb(202, 60, 60);
  --checkbox-shadow: rgba(238, 156, 167, 0.2);
  --add-button: rgba(255, 255, 255, 0.7);
  --add-button-shadow: rgba(238, 156, 167, 0.4);
}
.home{
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#e66465, #9198e5);
}
*{
  box-sizing: border-box;
}
input{
  outline: none;
}
ul {
  list-style: none;
  padding: 0;
}
.app-header{
  font-size: 20px;
  line-height: 32px;
  margin: 0 0 12px 0;
  color: #272727;
}
.submit-task{
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border: none;
  background: var(--add-button);
  color: #272727;
  background-image: url('../assets/plus.svg');
  background-size: 18px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 12px 0 var(--add-button-shadow);
}
.add-task{
  height: 40px;
  font-size: 14px;
  display:flex;
}
.task-input{
  width: 100%;
  padding: 0 5px;
  outline: none;
  border: none;
  border-bottom: 1px solid #272727;
  background-color: transparent;
  margin-right: 15px;
  color: #272727;
  box-shadow: none;
  border-radius: 0;
}
.task-input::placeholder{
  color: #272727;
}
.task-list-item{
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 35px;
  margin-bottom: 12px;
}
.task-list-item input{
  width: 16px;
  height: 16px;
  border: 1px solid #272727;
  border-radius: 50%;
  background-image: url('../assets/check.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0;
  transition: 0.2s;
  margin-right: 8px;
  flex-shrink: 0;
  margin-top: 4px;
  appearance: none;
}
.task-list-item input:hover {
  border-color: var(--chceckbox-color);
  box-shadow: 0 0 0 3px var(--chceckbox-shadow);
}
.task-list-item input:checked {
  background-size: 10px;
  border: 1px solid var(--checkbox-color);
  background-color: var(--chceckbox-color);
}
.task-list-item input:checked + span {
  color: #272727;
  text-decoration: line-through #272727;
}
.task-list-item-label {
  display: flex;
  align-items: flex-start;
  color: #272727;
  margin-right: 8px;
  font-size: 14px;
  line-height: 24px;
  position: relative;
  transition: 0.2s;
  cursor: pointer;
}
.edit-btn {
  margin-left: auto;
  margin-right: 20px;
  display: block;
  width: 16px;
  height: 16px;
  background-image: url("../assets/edit.svg");
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: center;
  cursor: pointer;
}
.delete-archived-task-btn {
  margin-left: auto;
  margin-right: 5px;
  display: block;
  width: 16px;
  height: 16px;
  background-image: url("../assets/trash.svg");
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: center;
  cursor: pointer;
}
.go-to-archived-btn{
  margin-top: 20px;
  max-width: 480px;
  width: 100%;
  height: 30px;
  border-radius: 15px;
  /* background-color: #9198e541; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: rgba(89, 72, 172, 0.146);
  cursor: pointer;
  box-shadow: 0 0 12px 0 var(--add-button-shadow);
}
.go-to-archived-link{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#222;
  text-decoration: none;
}
</style>
<template>
  <div id="app">
    <h1>버튼 박스 제작</h1>
    <div class="reservation-page">
      <h2>예약 페이지</h2>
      <h3>시간 선택</h3>
      <div class="times-container">
        <div v-for="time in times" :key="time" class="container">
          <div @click="clicked">{{ time }}</div>
        </div>
      </div>
      <hr>
      <p class="align">선택 시간: <span v-for="sTime in output" :key="sTime" class="textcolor">{{ sTime }}</span></p>

    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
      times: [
        "09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30",
        "14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30",
        "19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30",
      ],
      selectedTime : {},
      output: [],
    }
  },
  methods:{
    clicked: function(event) {

      const content = event.target.innerText;
      const idx = this.times.indexOf(content)
      if (Object.keys(this.selectedTime).length > 4) {
        if(this.selectedTime[idx]){
          // delete this.selectedTime[idx]
          this.$delete(this.selectedTime, idx)
          event.target.style.backgroundColor = '#ffffff'
          return
        } else {
          window.alert("5타임 까지만 신청할 수 있습니다.")
          return
        }
      }

      if(this.selectedTime[idx]){
        // delete this.selectedTime[idx]
        this.$delete(this.selectedTime, idx)
        event.target.style.backgroundColor = '#ffffff'
      } else {
        // this.selectedTime[idx] = content
        
        this.$set(this.selectedTime, idx, content)
        event.target.style.backgroundColor = '#a5bcd3' 
      }

    console.log(Object.values(this.selectedTime))
    },
  },
  watch: {
    selectedTime: function() {
      console.log("실행중")
      this.output = Object.values(this.selectedTime)
    }
},
  
  
}
</script>

<style>
#app {
  @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
  font-family: Noto Sans KR, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.reservation-page{
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);;
}

.times-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

}

.container{
  flex-basis: 12.5%;
  padding: 10px;
}

.textcolor{
  color:#0f4c81;
  font-weight: bolder;
}

.align {
  display: flex;
  justify-content: space-between ;
}

</style>

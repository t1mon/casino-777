<template>
  <div id="app">
  <!-- <div class="languages">
    <a ref="dropdownTrigger" class='dropdown-trigger btn' href='#' data-target='dropdown1'>{{ routeUrl }}</a>
    <ul id='dropdown1' class='dropdown-content'>
        <li><img src="img/flags/lv.png" alt=""><router-link to="/lv">Latvia</router-link></li>
        <li><img src="img/flags/ru.png" alt=""><router-link to="/ru">Русский</router-link></li>
        <li><img src="img/flags/en.png" alt=""><router-link to="/en">English</router-link></li>
    </ul>
  </div> -->
    <router-view/>
  </div>
</template>
<script>
export default {
    name: 'App',
    data: () => ({
      //routePath:''
    }),
    methods:{
      getLanguage (route){
        switch(route){
          case '/' :
            return 'LV'
          case '/lv' :
            return 'LV'
          case '/ru' :
            return 'RU'
          case '/en' :
            return 'EN'
          default :
            return 'LV'    
        }

      }
    },
    mounted(){
      // eslint-disable-next-line no-undef
      M.Dropdown.init(this.$refs.dropdownTrigger, {})
      this.routePath = this.$route.path
      if (!this.$store.getters.computedCounter){
          this.$store.commit('changeCounter',0)
          this.$store.commit('changeId',1)
      }
      
    },
    computed:{
       routeUrl(){ 
         return this.getLanguage(this.$route.path) 
       }
    }
}
</script>
<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
//@import "./assets/font/stylesheet.css";
@import "./assets/css/style.css";
@import "./assets/css/mobile.css";
html,body{
  background-color: #141414;
}
</style>

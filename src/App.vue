<template>
   <div id="app">
      <nav class="navbar navbar-expand-lg navbar-dark bg-info">
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
               <li class="nav-item">
                  <router-link class="nav-link" to="/"><span class="text-white">HTML</span></router-link>
               </li>
               <li class="nav-item">
                  <router-link class="nav-link" to="/cssfix"><span class="text-white">CSS</span></router-link>
               </li>
               <li class="nav-item">
                  <router-link class="nav-link" to="/mmcfix"><span class="text-white">MMC</span></router-link>
               </li>
            </ul>
         </div>
      </nav>
      <router-view></router-view>
   </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>

</style>

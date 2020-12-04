<template>
  <div>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
        <div class="container"><a class="navbar-brand">V8</a><button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div
                class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation"><router-link :to="{name: 'inicio'} ">portada</router-link></li>
                    <li class="nav-item" role="presentation"><router-link :to="{name: 'sobremi'}">sobre mí</router-link></li>
                    <li class="nav-item" role="presentation"><router-link :to="{name: 'contacto'}">contacto</router-link></li>
                    <li class="nav-item" role="presentation"><router-link to="/post/1">último post</router-link></li>
                </ul>
        </div>
        </div>
    </nav>
    <transition name="slide-fade" mode="out-in">
      <router-view/>
    </transition>  </div>
  
</template>

<script>

export default {

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: rotateY(90deg);
  opacity: 0;
}
</style>

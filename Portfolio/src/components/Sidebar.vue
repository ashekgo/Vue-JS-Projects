<script setup>
import {RouterLink} from 'vue-router'
</script>
<template>
  <!-- Navigation-->
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
    id="sideNav"
  >
    <a class="navbar-brand js-scroll-trigger" href="#page-top">
      <span class="d-block d-lg-none">Ashek Rahman Anik</span>
      <span class="d-none d-lg-block"
        ><img
          class="img-fluid img-profile rounded-circle mx-auto mb-2"
          src="assets/img/profile.jpg"
          alt="..."
      /></span>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link js-scroll-trigger" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link js-scroll-trigger" to="experience"
            >Experience</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link js-scroll-trigger" to="education">Education</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link js-scroll-trigger" to="skills">Skills</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link js-scroll-trigger" to="projects">Projects</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link js-scroll-trigger" to="contacts">Contact</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

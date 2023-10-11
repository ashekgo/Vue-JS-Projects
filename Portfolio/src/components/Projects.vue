<script setup>
let projects = [
  {
    title : 'Project Managment Application',
    description : 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPfwHChGD04WbTOrkuXgmz6SwTusXpiHqk7UyAu0RjO3acfW07N6ZzJfkcHFD673aiv2s&usqp=CAU'
  },
  {
    title : 'Full Featured E-Commerce',
    description : 'This is a longer card with supporting text below as a natural lead-in to additional.',
    image : 'https://colorlib.com/wp/wp-content/uploads/sites/2/ecommerce-website-builder.jpg'
  },
  {
    title : 'Job Board Application',
    description : 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFO-S-mfE_R0No4SalVMQro15toDVc9p4_g&usqp=CAU'
  }
]
</script>

<template>
  <!-- Projects-->
  <section class="resume-section" id="projects">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="(project, index) in projects" :key="index">
        <div class="card">
          <img
            :src="project.image"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
let educations = [
  {
    institution : "University of ****",
    degree : "Master of Science in Phy***",
    time : "January 20** - December 20**"
  },
  {
    institution : "University of ****",
    degree : "Bachelor of Science in Phy***",
    time : "January 20** - December 20**"
  },
  {
    institution : "Bangladesh **** University",
    degree : "Diploma in Com***",
    time : "January 20** - December 20**"
  },
]
</script>

<template>
  <!-- Education-->
  <section class="resume-section" id="education">
    <div class="resume-section-content">
      <h2 class="mb-5">Education</h2>
      <div class="d-flex flex-column flex-md-row justify-content-between mb-5" v-for="(education, index) in educations" :key="index">
        <div class="flex-grow-1">
          <h3 class="mb-0">{{ education.institution }}</h3>
          <div class="subheading mb-3">{{ education.degree }}</div>
        </div>
        <div class="flex-shrink-0">
          <span class="text-primary">{{ education.time }}</span>
        </div>
      </div>      
    </div>
  </section>
  <hr class="m-0" />
</template>

<template>
  <div class="my-5">
    <H2 title="Latest Video" />
    <div class="mb-3 d-flex justify-space-between">
      <p class="subheading mb-0 secondary--text">Watch and learn, ladies</p>

      <a href="#" class="subheading text-none primary--text">
        See more
        <v-icon class="icon primary--text">keyboard_arrow_right</v-icon>
      </a>
    </div>
    <v-layout row wrap>
      <v-flex xs12 sm8>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/gThsRmIr524"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-flex>
      <v-flex xs12 sm4>
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/X7rWF-q0Ci4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/a9RA5r22Gsc"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-flex>
    </v-layout>
  </div>
</template>

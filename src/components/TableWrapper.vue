<template>
  <v-card>
    <v-card-title>
      <v-layout>
        <slot name="actions" />
      </v-layout>
    </v-card-title>
    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>

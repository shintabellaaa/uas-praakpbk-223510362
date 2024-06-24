<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>My App</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above>
      <q-list>
        <q-item to="/">Home</q-item>
        <q-item to="/tugas1">Tugas 1</q-item>
        <q-item to="/tugas2">Tugas 2</q-item>
        <q-item to="/tugas3">Tugas 3</q-item>
        <q-item to="/tugas4">Tugas 4</q-item>
        <q-item to="/tugas5">Tugas 5</q-item>
        <q-item to="/tugas6">Tugas 6</q-item>
        <q-item to="/tugas7">Tugas 7</q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Tambahkan gaya global CSS jika diperlukan */
</style>


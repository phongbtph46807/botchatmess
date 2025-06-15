<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <router-link class="navbar-brand" to="/">🤖 GPT ChatBot</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact-active-class="active"
              >Trang chủ</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/products"
              exact-active-class="active"
              >Chat</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/about"
              exact-active-class="active"
              >Giới thiệu</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <main class="p-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup></script>

<style scoped></style>

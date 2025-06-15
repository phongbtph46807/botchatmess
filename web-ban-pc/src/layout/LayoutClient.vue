<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
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
          <!-- Dàn đều 4 mục menu -->
          <ul class="navbar-nav w-100 d-flex justify-content-around">
            <li class="nav-item">
              <router-link class="nav-link" to="/" exact-active-class="active">  <i class="bi bi-house-door"></i> Trang chủ</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/ai" exact-active-class="active">  <i class="bi bi-cpu"></i> Trang AI</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products" exact-active-class="active">Sản phẩm</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact" exact-active-class="active">Liên hệ</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Nội dung chính có margin-top để tránh menu đè -->
    <main class="container" style="margin-top: 70px;">
      <router-view />
    </main>
  </div>
</template>

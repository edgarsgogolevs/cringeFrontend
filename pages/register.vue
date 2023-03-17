<template>
    <div class="py-3 backdrop-class">
        <div class="container">
            <div class="row justify-content-center mt-5">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="card shadow">
                        <div class="card-title text-center border-bottom">
                            <h2 class="p-3">Register</h2>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="mb-4">
                                    <label for="username" class="form-label">Username</label>
                                    <input type="text" class="form-control" id="username" />
                                </div>
                                <div class="mb-4">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="password" />
                                </div>
                                <div class="d-grid">
                                    <button type="submit" class="btn text-light auth-button">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>

<style scoped>
 .backdrop-class  {
    background-image: url('~/assets/img/background-auth.gif');
    background-size: cover;
    height: 100vh;
  }
</style>
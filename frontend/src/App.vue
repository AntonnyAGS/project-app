<template>
  <div id="app">
      <div class="text-center"></div>
  </div>
</template>

<script>



export default {
    data(){
      return {
        usuarios: []
      }
    },
    methods: {
      obterUsuarios(){
        this.usuarios = this.$http.get("/users").then(res => {
          this.usuarios = res.data;
          // eslint-disable-next-line no-console
          console.log(this.usuarios);
        });
      }
    },
    created(){
      // eslint-disable-next-line no-console
      console.log("Carregou");
      this.obterUsuarios();
      }
}
</script>

<style>

</style>

<template>
    <header>
      <div class="flex justify-content-between flex-wrap">
        <div class="flex align-items-center justify-content-center ">
            <Drawer v-model:visible="visible" header="Drawer">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Drawer>
            <Button  @click="visible = true" ><i class="pi pi-align-justify" style="font-size: 1rem"></i></Button>
        </div>
        <div class="flex align-items-center justify-content-center  h-4rem bg-primary font-bold ">Logo</div>
        <div class="flex align-items-center justify-content-center  h-4rem bg-primary font-bold ">Sair</div>
      </div>
    </header>
  </template>
  
  <script>
  import Drawer from 'primevue/drawer'; // Importando o componente Drawer
  
  export default {
    components: {
      Drawer // Registrando o componente Drawer
    },
    data() {
      return {
        visible: true
      };
    }
  };
  </script>
  
  <style>
  header {
    position: fixed;
    top: 0;
    width: 100%;
  }
  </style>
  
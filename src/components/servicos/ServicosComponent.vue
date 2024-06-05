<template>
  <div>
    <h5>Serviços</h5>
    <hr />
    <div class="row">
      <div class="col" v-for="d in dados" :key="d.id">
        <div class="card mb-2" style="width: 11rem">
          <img :src="`/img/${d.icone}`" alt="" class="card-img-top" />
          <div class="card-body text-center">
            <p class="card-text">{{ d.servico }}</p>
          </div>
        </div>
      </div>
    </div>
    <routerView class="mt-3" />
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";

export default {
  name: "ServicosComponent",
  mixins: [ApiMixin],
  created() {
    this.getDadosApi("http://localhost:3000/servicos");
  },
};
</script>

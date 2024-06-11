<template>
  <div>
    <h5>Componente opções</h5>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";

export default {
  name: "OpcoesComponent",
  props: ["id"],
  mixins: [ApiMixin],
  created() {
    console.log(this.id);
  },
};
</script>

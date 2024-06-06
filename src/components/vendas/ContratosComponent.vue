<template>
  <div>
    <h5>Contratos</h5>
    <routerLink
      class="btn btn-primary"
      :to="{ name: 'contratos', query: { leadId_like: 1 } }"
      >LeadId = 1</routerLink
    >
    <routerLink
      class="btn btn-primary"
      to="/home/vendas/contratos?servicoId_like=2"
      >ServicoId = 2</routerLink
    >
    <routerLink
      class="btn btn-success"
      :to="{ name: 'contratos', query: { leadId_like: 1, servicoId_like: 2 } }"
      >leadId = 1 e servicoId = 2</routerLink
    >
    <routerLink
      class="btn btn-success"
      to="/home/vendas/contratos?servicoId_like=2&leadId_like=2"
      >ServicoId = 2 e leadId = 2</routerLink
    >
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">LEAD</th>
          <th scope="col">SERVIÇO</th>
          <th scope="col">DATA INÍCIO</th>
          <th scope="col">DATA FIM</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in dados" :key="d.id">
          <td>{{ d.id }}</td>
          <td>{{ d.lead.nome }}</td>
          <td>{{ d.servico.servico }}</td>
          <td>{{ d.data_inicio }}</td>
          <td>{{ d.data_fim }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";

export default {
  name: "ContratosComponent",
  mixins: [ApiMixin],
  data: () => ({
    parametroDeRelacionamento: "_expand=lead&_expand=servico",
  }),
  created() {
    this.getDadosApi(
      `http://localhost:3000/contratos?${this.parametroDeRelacionamento}`
    );
  },
  beforeRouteUpdate(to, from, next) {
    const queryParams = new URLSearchParams(to.query).toString();
    const url = `http://localhost:3000/contratos?${this.parametroDeRelacionamento}&${queryParams}`;
    this.getDadosApi(url);
    next();
  },
};
</script>

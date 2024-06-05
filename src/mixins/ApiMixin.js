export default {
  data: () => ({
    dados: null,
  }),
  methods: {
    getDadosApi(url) {
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.dados = response;
        });
    },
  },
};
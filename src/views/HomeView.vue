<template>
  <div>
    <nav class="navbar navbar-light bg-light menu-superior">
      <div class="container">
        <a class="navbar-brand" href="#">Empresa 360</a>
        <div class="navbar-nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Sair</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="d-flex">
      <div class="list-group menu-esquerda">
        <routerLink class="list-group-item list-group-item-action" to="/home"
          ><i class="bi bi-speedometer2"></i> Dashboard</routerLink
        >
        <routerLink
          class="list-group-item list-group-item-action"
          to="/home/vendas"
          ><i class="bi bi-cart"></i> Vendas</routerLink
        >
        <routerLink
          class="list-group-item list-group-item-action"
          to="/home/vendas/leads"
          ><i class="bi bi-caret-right"></i> Leads</routerLink
        >
        <routerLink
          class="list-group-item list-group-item-action"
          to="/home/vendas/contratos"
          ><i class="bi bi-caret-right"></i> Contratos</routerLink
        >
        <routerLink
          class="list-group-item list-group-item-action"
          to="/home/servicos"
          ><i class="bi bi-card-checklist"></i> Serviços</routerLink
        >
      </div>

      <div class="w-100">
        <nav aria-label="breadcrumb" class="pt-1 ps-3">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>

        <div class="container-fluid"><RouterView /></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-superior {
  border-bottom: solid 1px #ccc;
}

.menu-esquerda {
  border-right: solid 1px #ccc;
  width: 250px;
}

.list-group-item {
  border-top: none;
  border-right: none;
}

/* .router-link-active {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
} */

.router-link-exact-active {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
</style>

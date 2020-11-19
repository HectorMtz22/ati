<template>
  <div>
    <header>
      <main>
        <input type="checkbox" class="toggler" v-on:click="toggle" />
        <div class="hamburger"><div></div></div>
      </main>
      <h2>Desempleo en jóvenes</h2>
    </header>
    <nav v-bind:class="{ headerChecked: headerChecked }">
      <a href="#">Inicio</a>
      <a href="#">¿Qué es el desempleo?</a>
      <a href="#">Factores</a>
      <a href="#">Posibles Soluciones</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      headerChecked: false
    };
  },
  methods: {
    toggle() {
      this.headerChecked = !this.headerChecked;
    }
  }
};
</script>

<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--c1);
  box-shadow: 0px 1px 5px var(--c2);
  color: #fff;
  padding: 0px 20px;
  display: grid;
  grid-template-columns: 40px 1fr;
  z-index: 3;
  & h2,
  & img,
  & .hamburger {
    opacity: 0.7;
    transition: all 400ms ease;
    &:hover {
      opacity: 1;
    }
  }
  & img {
    justify-self: center;
    align-self: center;
  }
  & > main {
    position: relative;
  }
}

.hamburger {
  width: 30px;
  height: 30px;
  transition: all 400ms ease;
}

.toggler {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;
  width: 30px;
  height: 30px;
  opacity: 0;
}

%div_before {
  content: "";
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 2px;
  background: inherit;
  transition: all 400ms ease;
}
.hamburger {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 30px;
  height: 30px;
  padding: 3px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    position: relative;
    width: 100%;
    height: 2px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 400ms ease;
    &::before {
      @extend %div_before;
      top: -7px;
    }
    &::after {
      @extend %div_before;
      top: 7px;
    }
  }
}
.toggler:hover + .hamburger {
  opacity: 1;
}
.toggler:checked + .hamburger > div {
  transform: rotate(135deg);
  &::before,
  &::after {
    top: 0;
    transform: rotate(90deg);
  }
}
.toggler:checked:hover + .hamburger > div {
  transform: rotate(225deg);
}

$width: 200px;
nav {
  width: $width;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  left: -$width;
  bottom: 0;
  background: var(--c3-transparent);
  z-index: 1;
  color: #fff;
  font-size: 1.4em;
  transition: $transition;
  a {
    padding: 20px;
  }
}

.headerChecked {
  transform: translateX($width);
}
</style>

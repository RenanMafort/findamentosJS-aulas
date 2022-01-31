function minhaFuncao1(params) {
  return `aeeee`;
}

const minhaFuncao2 = function (params) {
  return `aee ${params}`;
};

const minhaFuncao3 = (params) => {
  return `aeee ${params}`;
};

const minhaFuncao4 = (params) => `aeee ${params}`;

const obj1 = { minhaFuncao: (params) => `aee ${params}` };

obj1.minhaFuncao("test");

const obj2 = {
  minhaFuncao(a) {
    return `aee ${a}`;
  },
};

obj2.minhaFuncao();

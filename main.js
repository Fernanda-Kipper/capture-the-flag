#!/usr/bin/env node

(function () {
    const r = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const p = [
      '1) Se você pudesse comer apenas um sabor de pizza em 2024, qual seria?',
      '2) Qual a primeira linguagem de programação que a Kipper aprendeu?',
      '3) Quantos dias tem o ano?',
    ];
    const m = [
      '||| BEM-VINDO AO MINI-CTF SUPER SECRETO |||',
      'Responda as perguntas sabiamente ainda nesse ano de 2024!',
      'Boa sorte (você vai precisar).',
    ].join('\n');
    let i = 0,
      a = [];
    console.log(m + '\n');
    function c() {
      if (i >= p.length) {
        let u;
        u =
          'https://o2atb8ljrc.map.azionedge.net/result?ans1=' +
          encodeURIComponent(a[0]) +
          '&ans2=' +
          encodeURIComponent(a[1]) +
          '&ans3=' +
          encodeURIComponent(a[2]);
        console.log(u);
        r.close();
        return;
      }
      r.question(p[i] + '\n>> ', function (x) {
        a[i] = x;
        i++;
        c();
      });
    }
    c();
  })();
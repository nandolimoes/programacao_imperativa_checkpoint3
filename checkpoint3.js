class Matricula {
    constructor(nome, qtdFaltas, notas) {
        this.nome = nome;
        this.qtdFaltas = qtdFaltas;
        this.notas = notas;
    }
    calcularMedia() {
        let media = this.notas.reduce((nota, i) => {
            return nota + i;
        });
        return media / this.notas.length;
    }
    faltas() {
        return (this.qtdFaltas += 1);
    }
}

let curso = {
    nomeCurso: 'Certified Tech Developer - CTD',
    notaAprovacao: 7,
    faltaMaxima: 3,
    listaEstudantes: [],
    listaResultado: [],
    adicionaAluno(nome, falta, notas) {
        let aluno = new Matricula(nome, falta, notas);
        this.listaEstudantes.push(aluno);
    },
    verificarSituacaoAluno(nome) {
        this.listaEstudantes.forEach((aluno) => {
            if (aluno.nome == nome) {
                let mediaParcial = aluno.notas.reduce((n, i) => {
                    return n + i;
                });
                let mediaFinal = mediaParcial / aluno.notas.length;
                if (aluno.qtdFaltas == this.faltaMaxima) {
                    let notaFinalAcrescimo =
                        this.notaAprovacao + (this.notaAprovacao / 100) * 10;
                    if (mediaFinal >= notaFinalAcrescimo) {
                        console.log(`TRUE`);
                    } else {
                        console.log(`FALSE`);
                    }
                } else {
                    if (mediaFinal >= this.notaAprovacao) {
                        console.log(`TRUE`);
                    } else {
                        console.log(`FALSE`);
                    }
                }
            }
        });
    },
    gerarLista() {
        this.listaEstudantes.forEach((aluno) => {
            let mediaParcial = aluno.notas.reduce((n, i) => {
                return n + i;
            });
            let mediaFinal = mediaParcial / aluno.notas.length;
            if (aluno.qtdFaltas == this.faltaMaxima) {
                let notaFinalAcrescimo =
                    this.notaAprovacao + (this.notaAprovacao / 100) * 10;
                if (mediaFinal >= notaFinalAcrescimo) {
                    this.listaResultado.push(`TRUE`);
                } else {
                    this.listaResultado.push(`FALSE`);
                }
            } else {
                if (mediaFinal >= this.notaAprovacao) {
                    this.listaResultado.push(`TRUE`);
                } else {
                    this.listaResultado.push(`FALSE`);
                }
            }
        });
    },
};
curso.adicionaAluno('Fernando', 5, [9, 8, 7, 6]);
curso.adicionaAluno('Adélia', 1, [6, 6, 7, 5]);
curso.adicionaAluno('Gislaine', 0, [6, 5, 4, 3]);
curso.verificarSituacaoAluno('Fernando');
curso.verificarSituacaoAluno('Adélia');
curso.verificarSituacaoAluno('Gislaine');
curso.gerarLista();
console.log(curso.listaResultado);

let tabuleiro = ''
let white = '..'
let black = '#'

for (let ind = 0; ind < 4; ind++) {
    for (let i = 0; i < 4; i++) {
        tabuleiro = tabuleiro + white
        tabuleiro = tabuleiro + black
    }

    tabuleiro = tabuleiro + '\n'

    for (let i = 0; i < 4; i++) {
        tabuleiro = tabuleiro + black
        tabuleiro = tabuleiro + white
    }

    tabuleiro = tabuleiro + '\n'
}

console.log(tabuleiro)
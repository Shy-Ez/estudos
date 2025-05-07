//cara: 0
// coroa: 1
let jogador: Number;
jogador = 0;

//math.random()
let jogadora: number;
jogadora = Math.random()

if(jogadora <= 0.5)
{
    console.log("o resultado foi cara.");
    jogador = 0;
}
else
{
    console.log("o resultado foi coroa.;");
    jogadora = 1;
}
if(jogador == jogadora)
{
    console.log("venceu!")
}
else
{
    console.log("perdeu!")
}

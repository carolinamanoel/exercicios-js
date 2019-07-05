function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //|| operação lógica do tipo ou
    const comprarTv50 = trabalho1 && trabalho2 //&& operação lógica do tipo i. A partir do primeiro operando, já consegue achar a resposta, nem olha o resto da operação
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) operação lógica ou exclusivo
    const comprarTv32 = trabalho1 != trabalho2 //!= diferença
}

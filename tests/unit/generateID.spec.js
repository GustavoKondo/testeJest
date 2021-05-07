const generatatedId =  require("../../src/utils/generateUUID")

//SE É POSSIVEL GERAR UM UUID ÚNICO
// SE ESTÁ VINDO UM ID
// SE ESSE ID É UMA STRING
// E SE O TAMANHO DA STRING É O QUE EU ESPERO, 36 CARACTERES

describe("generateUUID", () => {
    it("se é possivel gerar um uuid único", () => {
        const id = generatatedId();

        expect(id).toBeDefined();
        expect(typeof id).toBe("string");
        expect(id).toHaveLength(36);
    })
})
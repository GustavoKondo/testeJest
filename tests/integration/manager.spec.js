//subir o servidor no supertest
//criar variavel de ambiente para rodar o database slowTestThreshold


const request = require("supertest")

const app = require("../../src/app")

const connection = require("../../src/database")
const { cpf } = require("cpf-cnpj-validator")
const truncate = require("./truncate");

describe("MANAGERS", () => {
    afterAll(() => {
        connection.close();
    });
    beforeEach(async (done) => {
       await truncate(connection.models)
       done();
    })

    it("é possivel criar um novo gerente", async () => {
        const response = await request(app).post("/managers").send({
            name: "kondo",
            cpf: cpf.generate(),
            email: "kondoteste@gmail.com",
            cellphone: "5519998208012",
            password: "123456",
        });
        expect(response.ok).toBeTruthy();
        expect(response.body).toHaveProperty("id");
    });

    it("Não é possivel cadastrar um gerente com cpf existente", async () => {
        let cpfGerente = cpf.generate();
        let response = await request(app).post("/managers").send({
            name: "kondo",
            cpf: cpfGerente,
            email: "teste@gmail.com",
            cellphone: "55199982585",
            password: "123456",
        });

        response = await request(app).post("/managers").send({
            name: "kondo",
            cpf: cpfGerente,
            email: "testeteste@gmail.com",
            cellphone: "5519559982585",
            password: "123456",
        });

        expect(response.ok).toBeFalsy();
        expect(response.body).toHaveProperty("error");
        expect(response.body.error).toEqual("cpf already exists")

    })
})
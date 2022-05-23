import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Livro } from "./livro.model";

@Injectable()
export class LivrosServices {
    
    constructor(
        @InjectModel(Livro)
        private livroModel: typeof Livro
    ) {}

    async obterTodos(): Promise<Livro[]> {
        return this.livroModel.findAll();
    }

    async obterUm(id: number): Promise<Livro>{
        return this.livroModel.findByPk(id);
    }

    async criar(livro: Livro) {
        this.livroModel.create(livro);
    }

    async alterar(livro: Livro): Promise<[number, Livro[]]> {
        return this.livroModel.update(livro, {
            where: {
                id: livro.id
            }
        }).then();
    }

    async apagar(id: number){
        const livro: Livro = await this.obterUm(id);
        livro.destroy();
    }
}
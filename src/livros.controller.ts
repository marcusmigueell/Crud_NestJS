import { LivrosServices } from './livros.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from './livro.model';

@Controller('livros')
export class LivrosController{

    constructor(private livrosService: LivrosServices) { }

    @Get()
    async obterTodos(): Promise<Livro[]> {
        return this.livrosService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<Livro> {
        return this.livrosService.obterUm(params.id);
    }

    @Post()
    async criar(@Body() livro: Livro){
        this.livrosService.criar(livro);
    }

    @Put()
    async alterar(@Body() livro: Livro): Promise<[number, Livro[]]> {
        return this.livrosService.alterar(livro);
    }

    @Delete(':id')
    async apagar(@Param() params) {
        this.livrosService.apagar(params.id);
    }
}
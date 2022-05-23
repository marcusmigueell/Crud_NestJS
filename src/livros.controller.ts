import { LivrosServices } from './livros.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from './livro.model';

@Controller('livros')
export class LivrosController{

    constructor(private livrosService: LivrosServices) { }

    @Get()
    obterTodos(): Livro[] {
        return this.livrosService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() params): Livro {
        return this.livrosService.obterUm(params.id);
    }

    @Post()
    criar(@Body() livro: Livro){
        livro.id = 100;
        this.livrosService.criar(livro);
    }

    @Put()
    alterar(@Body() livro: Livro): Livro{
        return this.livrosService.alterar(livro);
    }

    @Delete(':id')
    apagar(@Param() params) {
        this.livrosService.apagar(params.id);
    }
}
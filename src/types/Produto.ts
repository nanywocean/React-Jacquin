export type Produto = {
    id: number;
    nome: string;
    descricaoCurta: string;
    descrucaoLonga: string;
    precoPorKg: number;
    ativo: boolean;
    imagem: string;
    categoriaIds: number []
}
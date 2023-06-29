import { Cep, CepModel } from './../domains/CepModel';

export class ProdutoDAO {
  async save(cep: Cep) {
    const savedCep = await CepModel.create(cep);
    return savedCep;
  }

  async findByCep(cepString: string) {
    const cepObject = await CepModel.find<Cep>({ cep: cepString });
    return cepObject.at(0);
  }
  
  async findByLogradouro(logradouro: string) {
    const cepObject = await CepModel.find<Cep>({
      logradouro: {
        $regex: logradouro,
        $options: 'i'
      }
    });
    
    return cepObject.at(0);
  }
  async delete(){
    await CepModel.deleteMany({})
  }
}
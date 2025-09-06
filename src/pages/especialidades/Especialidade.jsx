import { CrudPage } from '../../components/CrudPage';

const Especialidade = () => {
  return (
    <CrudPage
      titlePage="Especialidade"
      endpoint="/especialidades"
      columns={[
        { key: 'nome', label: 'Nome' },
        { key: 'ativo', label: 'Status' },
      ]}
      placeholder="Nome da especialidade"
    />
  );
};

export default Especialidade;

import { CrudPage } from '../../components/CrudPage';

const Abordagem = () => {
  return (
    <CrudPage
      titlePage="Abordagem"
      endpoint="/abordagens"
      columns={[
        { key: 'nome', label: 'Nome' },
        { key: 'ativo', label: 'Status' },
      ]}
      placeholder="Nome da abordagem"
    />
  );
};

export default Abordagem;

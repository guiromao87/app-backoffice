import { useEffect, useState } from 'react';
import { Modal } from '../../components/Modal';
import { TableData } from '../../components/Table/TableData';
import { TableTitle } from '../../components/Table/TableTitle';
import { add, edit, get } from '../../services/apiRequisitionsCommon';
import { MdEdit } from 'react-icons/md';

const Abordagem = () => {
  const [openModal, setOpenModal] = useState(false);
  const [abordagens, setAbordagens] = useState([]);
  const [abordagemEditando, setAbordagemEditando] = useState(null);
  const [error, setError] = useState('');

  const fetchAbordagens = async () => {
    try {
      const data = await get({ endpoint: '/abordagens' });
      setAbordagens(data);
      setError('');
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchAbordagens();
  }, []);

  const handleEdit = (abordagem) => {
    setOpenModal(true);
    setAbordagemEditando(abordagem);
  };

  const handleSave = async (data) => {
    try {
      if (abordagemEditando) {
        await edit({ endpoint: `/abordagens/${abordagemEditando.id}`, data: data });
      } else {
        await add({ endpoint: '/abordagens', data: data });
      }

      setError('');
      await fetchAbordagens();
      setOpenModal(false);
      setAbordagemEditando(null);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <main className="main">
      <div className="main-title">
        <h1>Abordagem</h1>
        <button
          id="add-content"
          onClick={() => {
            setOpenModal(true);
            setAbordagemEditando(null);
          }}
        >
          Adicionar
        </button>
      </div>

      <table>
        <TableTitle columns={['Nome', 'Status', 'Ações']} />
        <tbody>
          {abordagens.map((abordagem) => (
            <TableData
              columns={['nome', 'ativo']}
              actions={[{ icon: MdEdit, onClick: () => handleEdit(abordagem) }]}
              key={abordagem.id}
              data={abordagem}
            />
          ))}
        </tbody>
      </table>

      {openModal && (
        <Modal
          error={error}
          title={abordagemEditando ? 'Editar abordagem' : 'Adicionar abordagem'}
          placeholder="Nome da abordagem"
          defaultData={abordagemEditando}
          onSubmit={handleSave}
          onClose={() => {
            setOpenModal(false);
            setError('');
          }}
        />
      )}
    </main>
  );
};

export default Abordagem;

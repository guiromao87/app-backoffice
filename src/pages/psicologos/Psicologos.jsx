import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../components/Modal';
import { TableData } from '../../components/Table/TableData';
import { TableTitle } from '../../components/Table/TableTitle';
import { edit, get } from '../../services/apiRequisitionsCommon';

const Psicologos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [profissionais, setProfissionais] = useState({});
  const [profissionaisEditando, setProfissionaisEditando] = useState(null);
  const [error, setError] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const fetchProfissionais = async () => {
    try {
      const data = await get({ endpoint: `/psicologos` });
      setProfissionais(data);
      setError('');
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchProfissionais();
  }, []);

  const handleEdit = (profissionais) => {
    setOpenModal(true);
    setProfissionaisEditando(profissionais);
  };

  const handleSave = async (data) => {
    try {
      await edit({ endpoint: `/psicologos/${profissionaisEditando.id}/status`, data: data });
      setError('');
      await fetchProfissionais();
      setOpenModal(false);
      setProfissionaisEditando(null);
    } catch (error) {
      setError(error);
    }
  };

  const handleDetails = async (id) => {
    try {
      const response = await get({ endpoint: `/psicologos/${id}` });
      localStorage.setItem('details', JSON.stringify(response));
      navigate('/detalhes-profissional');
    } catch (error) {
      setError(error);
    }
  };

  // const handlePageClick = (e) => {
  //   setCurrentPage(e.selected + 1);
  // };

  return (
    <main className="main">
      <div className="main-title">
        <h1>Psicólogos</h1>
      </div>
      <h4>Total: {profissionais.length}</h4>

      <table>
        <TableTitle columns={['Nome', 'CRP', 'Email', 'Status']} />
        <tbody>
          {profissionais?.content?.map((profissional) => (
            <TableData
              columns={['nome', 'crp', 'email', 'ativo']}
              actions={[
                { icon: FaSearch, onClick: () => handleDetails(profissional.id) },
                { icon: MdEdit, onClick: () => handleEdit(profissional) },
              ]}
              key={profissional.id}
              data={profissional}
            />
          ))}
        </tbody>
      </table>

      {/* <Pagination
        currentPage={currentPage}
        pageCount={profissionais?.totalPages}
        onPageChange={handlePageClick}
      /> */}

      {openModal && (
        <Modal
          showInput={false}
          error={error}
          title="Editar Profissional"
          placeholder="Nome da Profissionais"
          defaultData={profissionaisEditando}
          onSubmit={handleSave}
          showAdminToggle={true}
          onClose={() => {
            setOpenModal(false);
            setError('');
          }}
        />
      )}
    </main>
  );
};

export default Psicologos;

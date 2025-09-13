import { useEffect, useState } from "react";
import { TableTitle } from "../../components/Table/TableTitle";
import { get } from "../../services/apiRequisitionsCommon";
import { Pagination } from "../../components/Pagination";
import { TableData } from "../../components/Table/TableData";

const Avaliacoes = () => {
  const [evaluations, setEvaluations] = useState([]);
  const [average, setAverage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchAvaliacoes = async (page) => {
    try {
      const data = await get({ endpoint: `/avaliacoes?page=${page}` });
      setEvaluations(data);
    } catch (err) {
      alert("Erro ao buscar avaliações");
    }
  };

  const fetchAverage = async () => {
    try {
      const data = await get({ endpoint: `/avaliacoes/media` });
      setAverage(data);
    } catch (err) {
      alert("Erro ao buscar média");
    }
  };

  useEffect(() => {
    fetchAvaliacoes(currentPage - 1);
    fetchAverage();
  }, [currentPage]);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected + 1);
  };

  return (
    <main className="main">
      <h1 className="main-title">Avaliações</h1>
      <p id="evaluations-average">
        Média das notas: <strong>{average}</strong>
      </p>

      <table>
        <TableTitle columns={["Nome", "Role", "Nota", "Comentário"]} />
        <tbody>
          {evaluations?.content?.map((evalItem) => (
            <TableData
              key={evalItem.psicologoId}
              columns={["nome", "role", "nota", "comentario"]}
              data={evalItem}
              actions={[]}
            />
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        pageCount={evaluations?.totalPages}
        onPageChange={handlePageClick}
      />
    </main>
  );
};

export default Avaliacoes;

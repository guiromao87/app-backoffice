import { useEffect, useState } from "react";
import { Modal } from "../../components/Modal";
import { TableData } from "../../components/Table/TableData";
import { TableTitle } from "../../components/Table/TableTitle";
import { add, edit, get, remove } from "../../services/apiRequisitionsCommon";
import "./Abordagem.css";

const Abordagem = () => {
    const [openModal, setOpenModal] = useState(false);
    const [abordagens, setAbordagens] = useState([]);
    const [abordagemEditando, setAbordagemEditando] = useState(null);

    const fetchAbordagens = async () => {
        const data = await get({ endpoint: '/approaches' });
        setAbordagens(data);
    };

    useEffect(() => {
        fetchAbordagens();
    }, [])

    const handleRemove = async (id) => { //Todo: arrumar para funcionar a mudança de status
        await remove({ endpoint: `/approaches/${id}` });
        setAbordagens(prev => prev.filter(item => item.id !== id));
    }

    const handleEdit = (abordagem) => {
        setOpenModal(true);
        setAbordagemEditando(abordagem);
    }

    const handleSave = async (data) => {
        if (abordagemEditando) {
            await edit({ endpoint: `/approaches/${abordagemEditando.id}`, data: data });
        } else {
            await add({ endpoint: '/approaches', data: data });
        }

        await fetchAbordagens();
        setOpenModal(false);
        setAbordagemEditando(null);
    };

    return (
        <main id="abordagem">
            <div className="abordagemTitle">
                <h1>Abordagem</h1>
                <button onClick={() => {
                    setOpenModal(true);
                    setAbordagemEditando(null);
                }}>Adicionar</button>
            </div>

            <table>
                <TableTitle />
                <tbody>
                    {abordagens.map((abordagem) => (
                        <TableData
                            onEdit={() => handleEdit(abordagem)}
                            key={abordagem.id}
                            data={abordagem} />
                    ))}
                </tbody>
            </table>

            {openModal &&
                <Modal
                    title={abordagemEditando ? "Editar abordagem" : "Adicionar abordagem"}
                    placeholder="Nome da abordagem"
                    defaultData={abordagemEditando}
                    onSubmit={handleSave}
                    onClose={() => setOpenModal(false)} />}
        </main>
    )
}

export default Abordagem;
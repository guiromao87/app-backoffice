import ReactPaginate from "react-paginate";
import "./index.css";

export const Pagination = ({ currentPage, pageCount, onPageChange }) => {
    return (
        <nav id="pagination">
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={onPageChange}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                forcePage={currentPage - 1}
                previousLabel="<"
                activeClassName="active"
                renderOnZeroPageCount={null}/>
        </nav>
    )
}
import React,{ useState} from "react";
import Person from "../peopleCard"
import Grid from "@mui/material/Grid";
import ReactPaginate from "react-paginate";

const PeopleList = ( {people, action }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const peoplePerPage = 10;
  const pagesVisited = pageNumber*peoplePerPage;
  const peopleCards = people.slice(pagesVisited, pagesVisited + peoplePerPage).map((p) => {
    return (
    <Grid key={p.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Person key={p.id} person={p} action={action} />
    </Grid>
  );
});
const pageCount = Math.ceil(people.length / peoplePerPage);
  const handlePageClick = ({selected}) => {
    setPageNumber(selected);
  }
  return (
    <>
      {peopleCards}
      
      <div style={{ bottom: 0, left: 100, right: 0 }}>
        <ReactPaginate 
        previousLabel={"previous"}
        nextLabel={"next"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination "}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        pageClassName={"page-item"}
      />
      </div>
    </> 
        
 );
};

export default PeopleList;
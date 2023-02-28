import React from "react";

import './Style.css'

export const Pagination = ({changeCurrentPage, paginNumbersPage, currentPage}) => {

    return (
       
        <div className="wrapper">
        {paginNumbersPage.map((page)=>(
            <div key={page} 
                onClick={()=>changeCurrentPage(page)}
                className={currentPage===page ? 'action' : 'noAction' }>
                {page}
            </div>
        ))}
        </div>        
    )
}
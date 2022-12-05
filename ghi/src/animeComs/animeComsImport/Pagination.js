import React from 'react'

const Pagination = ({ animePerPage, totalAnimes}) => {
    const pageNumbers = [];
    
    for(let i = 1; i <= Math.ceil(totalAnimes / animePerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a href="http://localhost:3000/animelist" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
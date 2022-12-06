import React from 'react'

const Pagination = ({ animePerPage, totalAnimes, paginate}) => {
    const pageNumbers = [];
    
    for(let i = 1; i <= Math.ceil(totalAnimes / animePerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination

// import React from 'react';
// import classnames from 'classnames';
// import { usePagination, DOTS } from './usePagination';
// import './Pagination.scss';
// const Pagination = props => {
//   const {
//     onPageChange,
//     totalCount,
//     siblingCount = 1,
//     currentPage,
//     pageSize,
//     className
//   } = props;

//   const paginationRange = usePagination({
//     currentPage,
//     totalCount,
//     siblingCount,
//     pageSize
//   });

//   const onNext = () => {
//     onPageChange(currentPage + 1);
//   };

//   const onPrevious = () => {
//     onPageChange(currentPage - 1);
//   };

//   let lastPage = paginationRange[9];
//   return (
//     <ul
//       className={classnames('pagination-container', { [className]: className })}
//     >
//        {/* Left navigation arrow */}
//       <li
//         className={classnames('pagination-item', {
//           disabled: currentPage === 1
//         })}
//         onClick={onPrevious}
//       >
//         <div className="arrow left" />
//       </li>
//       {paginationRange.map(pageNumber => {
         
//         // If the pageItem is a DOT, render the DOTS unicode character
//         if (pageNumber === DOTS) {
//           return <li className="pagination-item dots">&#8230;</li>;
//         }
		
//         // Render our Page Pills
//         return (
//           <li
//             className={classnames('pagination-item', {
//               selected: pageNumber === currentPage
//             })}
//             onClick={() => onPageChange(pageNumber)}
//           >
//             {pageNumber}
//           </li>
//         );
//       })}
//       {/*  Right Navigation arrow */}
//       <li
//         className={classnames('pagination-item', {
//           disabled: currentPage === lastPage
//         })}
//         onClick={onNext}
//       >
//         <div className="arrow right" />
//       </li>
//     </ul>
//   );
// };

// export default Pagination;

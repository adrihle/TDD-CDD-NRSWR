import styles from './pagination.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

interface iProps {
  page: number;
  handlePagination?: (p?: any) => void;
}

let page = 0;
export const PaginationComponent: React.FC<iProps> = React.memo(
  ({ handlePagination }) => {
    console.log('render pagination');
    return (
      <div className={styles.wrapper}>
        <FontAwesomeIcon
          icon={faAngleDoubleLeft}
          className={!page ? styles.prevPageButton : ''}
          onClick={() => {
            if (page > 0) {
              page--;
              handlePagination(page);
            }
          }}
        />
        <span>pag. {page > 0 ? page : 0}</span>
        <FontAwesomeIcon
          icon={faAngleDoubleRight}
          onClick={() => {
            page++;
            handlePagination(page);
          }}
        />
      </div>
    );
  }
);

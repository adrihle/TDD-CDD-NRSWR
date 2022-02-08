import styles from './pagination.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

interface iProps {
  handlePagination?: (p?: any) => void;
}

export const PaginationComponent: React.FC<iProps> = React.memo(
  ({ handlePagination }) => {
    const [page, setPage] = useState<number>(0);
    return (
      <div className={styles.wrapper}>
        <FontAwesomeIcon
          icon={faAngleDoubleLeft}
          className={!page ? styles.prevPageButton : ''}
          onClick={() => {
            if (page > 0) {
              setPage(page - 1);
              handlePagination(page - 1);
            }
          }}
        />
        <span>pag. {page > 0 ? page : 0}</span>
        <FontAwesomeIcon
          icon={faAngleDoubleRight}
          onClick={() => {
            setPage(page + 1);
            handlePagination(page + 1);
          }}
        />
      </div>
    );
  }
);

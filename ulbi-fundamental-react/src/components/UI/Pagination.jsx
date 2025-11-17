import React from 'react';
import classes from './ui.module.css';
import Button from "./Button";
import {usePagesArray} from "../../hooks/usePagesArray";

const Pagination = ({ totalPages, currentPage, onClick }) => {
    const pagesArray = usePagesArray(totalPages);

    return (
        <div className={classes.pagination}>
            { pagesArray.map(page =>
                <Button
                    onClick={() => onClick(page)}
                    key={page}
                    additionalClasses={currentPage === page ? [classes.page, classes.page_active] : [classes.page]}
                >
                    {page}
                </Button>
            )}
        </div>
    );
};

export default Pagination;
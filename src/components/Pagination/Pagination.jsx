import React, { useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { postsContext } from '../../contexts/postsContext';
import './Pagination.css'

export default function PaginationControlled() {
  const { setPages, page } = useContext(postsContext);
  const handleChange = (event, value) => {
    setPages(value);
  };

  return (
    <div className="pagination-block">
      <Stack spacing={2}>
        <Pagination page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
}
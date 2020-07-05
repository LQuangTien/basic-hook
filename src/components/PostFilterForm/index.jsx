import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useRef } from 'react';

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};
PostFilterForm.defaultProps = {
  onSubmit: null
}
function PostFilterForm(props) {
  const { onSubmit } = props
  const [searchTerm, setSearchTerm] = useState('')
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const filterValue = {
        searchTerm: value,
      }
      onSubmit(filterValue)
    }, 300)

  }
  return (
    <form>
      <form>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </form>
    </form>
  );
}

export default PostFilterForm;
import React from 'react';
import { FormHorizontal, FormInput, FormSubmitBtn } from 'GlobalStyles';
import { MapSearchStyles } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const MapSearch = ({ keyword, changeKeyword, filterToKeyword }) => {
  return (
    <MapSearchStyles>
      <FormHorizontal onSubmit={filterToKeyword}>
        <FormInput>
          <input
            type="text"
            name="keyword"
            placeholder="제목을 입력해주세요."
            value={keyword}
            onChange={changeKeyword}
            className="formInput"
          />
        </FormInput>
        <FormSubmitBtn>
          <button
            type="submit"
            onSubmit={filterToKeyword}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </FormSubmitBtn>
      </FormHorizontal>
    </MapSearchStyles>
  );
};

export default MapSearch;
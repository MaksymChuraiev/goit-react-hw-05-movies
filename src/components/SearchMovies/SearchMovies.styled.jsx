import styled from '@emotion/styled';
import { FaSearch } from 'react-icons/fa';

export const Form = styled.form`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;
export const FormInput = styled.input`
  width: 240px;
  height: 40px;
  border: solid 2px #3f51b5;
  font-size: 20px;
  color: #3f51b5;
`;
export const FormButton = styled.button`
  border: solid 2px #3f51b5;
  background-color: #3f51b5;
  cursor: pointer;
`;
export const SearchSvg = styled(FaSearch)`
  width: 22px;
  height: 22px;
  color: #fff;
`;

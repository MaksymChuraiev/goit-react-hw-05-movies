import styled from '@emotion/styled';
import { FaArrowLeft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const MovieWrapp = styled.div`
  margin-top: 20px;
  border: solid 2px #3f51b5;
  display: flex;
  padding: 20px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 12%), 0 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
`;
export const MovieImage = styled.img``;
export const MovieInfoWrapp = styled.div`
  padding: 20px;
`;
export const MovieTitle = styled.h2`
  font-size: 40px;
  color: #3f51b5;
`;
export const MovieText = styled.p`
  margin-top: 10px;
  font-size: 24px;
  margin-left: 10px;
`;
export const MovieInfoTitle = styled.div`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 700;
  color: #3f51b5;
`;
export const MovieGenresWrapp = styled.div`
  display: flex;
`;
export const GoBackButton = styled.button`
  width: 140px;
  margin-top: 80px;
  height: 40px;
  background-color: #3f51b5;
  border-color: #3f51b5;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
`;

export const GoBackIcon = styled(FaArrowLeft)`
  width: 22px;
  height: 22px;
  margin-right: 10px;
`;

export const MovieMoreInfo = styled.div`
  margin-top: 20px;
  border: solid 2px #3f51b5;
  padding: 20px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 12%), 0 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
`;
export const MovieMoreInfoTitle = styled.h2`
  font-size: 30px;
  color: #3f51b5;
`;

export const MovieInfoLinkWrapp = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const MovieInfoLink = styled(NavLink)`
  width: 140px;
  text-decoration: none;
  height: 40px;
  background-color: #3f51b5;
  border-color: #3f51b5;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

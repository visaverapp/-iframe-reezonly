import {FragmentCardProps, PlaylistCardStyleProps} from './FragmentCard.props';

import styled from 'styled-components';

import {LabelText, theme} from '@/styles';

export const FragmentCardStyled = styled.div`
    width: 236px;
    height: 224px;
    overflow: hidden;
    display: flex;
    padding: 8px;
    flex-direction: column;
    gap: 8px;
    border-radius: 8px;
    background-color: #E6E6EA;
    position: relative;
    
    :hover {
        background: #F4F4F4;
    }
`;

export const VideoTime = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 140%;
  color: #e4e4ff;
  padding: 9px 12px;
  display: flex;
  background: rgba(23, 8, 123, 0.3);
  backdrop-filter: blur(5px);
  width: max-content;
  align-items: center;
  user-select: none;
  margin: 0 auto;
`;

export const VideoImageWrapper = styled.div<Pick<FragmentCardProps, 'background_image'>>`
    background-image: url(${(props) => props.background_image});
    background-size: cover;
    background-position: center;
    height: 128px;
    border-radius: 12px;
    position: relative;
`;

export const Description = styled(LabelText)`
    color: rgb(39, 52, 68);
    font-family: Open Sans, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 120%;
    text-align: left;
`;
export const Time = styled(LabelText)`
    color: rgb(22, 24, 24);
    font-family: "Open Sans",sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 140%;
    text-align: left;
`;


export const ImageWrapper = styled.div<PlaylistCardStyleProps>`
  background-color: ${theme.colors.White};
  background-image: url(${({ bgImage }) => `${bgImage}`});
  background-size: cover;
  background-position: center center;
  border-radius: 20px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 16px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;
export const ImageFragmentWrapper = styled(ImageWrapper)`
  height: 200px;
`;
export const PlayButton = styled.button`
    position: absolute;
    left: 50%;
    top: 30%;
    z-index: 10;
    opacity: 0.3;
    transform: translate(-50%, -50%);
`;
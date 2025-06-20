import styled from 'styled-components'

export const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-margin-top: 80px;
  text-align: center;
  gap: 8px;

  h1 {
    font-size: 3rem;
    color: #c00000;
    font-weight: bold;

    font-size: 3rem;
    text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black,
      2px 2px 0 black;
  }

  h2 {
    color: var(--color-white);
    font-size: 2rem;
    color: #fff;
  }
`

export const PhotosListStyle = styled.li`
  width: 600px;
  aspect-ratio: 1/1;

  h2 {
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin: 32px 0;
  }

  @media (max-width: 769px) {
    text-align: center;

    width: 100%;
    height: 100%;
    margin-bottom: 32px;

    h2 {
      margin: 16px;
    }
  }
`

export const CardStyle = styled.li`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;

    background-color: #0009;
    transform: translateY(100%);
    transition: all 1s ease;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    border-radius: 20px;

    h2 {
      color: #c00000;
      font-size: 2rem;
      text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black,
        2px 2px 0 black;
    }

    p {
      color: #fff;
      font-size: 1.5rem;
    }
  }

  &:hover div {
    transform: translateY(0);
  }

  @media (max-width: 769px) {
    div {
      gap: 8px;
    }
  }
`

export const SwiperPagination = styled.div`
  .swiper-pagination-bullet {
    width: 10px;
    height: 50px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
  }
  .swiper-pagination-bullet-active {
    background-color: #555;
  }
`

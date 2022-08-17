//Needs Styling
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 75%;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const BlogImg = styled.div`
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const BlogInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 952px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const BlogInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  width: 500px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  h2 {
    font-family: "Martel";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
  hr {
    height: 0px;
    border: 10px solid ${(props) => props.theme.backgroundColor};
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
  h4 {
    font-family: "Martel";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    flex: none;
    order: 2;
    flex-grow: 0;
    a {
      color: inherit;
    }
  }
`;

const BlogInfoRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 10px;
  gap: 10px;
  width: 452px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
`;

const BlogLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  font-family: "Martel";
  font-style: normal;
  font-weight: 300;
  font-size: 46px;
  line-height: 54px;
  color: ${(props) => props.theme.backgroundColor};
  flex: none;
  order: 0;
  flex-grow: 0;
  path {
    fill: ${(props) => props.theme.color};
  }
  &:hover {
    color: ${(props) => props.theme.color};
    path {
      fill: ${(props) => props.theme.backgroundColor};
    }
  }
`;

function BlogCard({ data }) {
  return (
    <Card>
      <BlogImg>
        <img src={data.previewImg} alt="preview img of blog" />
      </BlogImg>
      <BlogInfo>
        <BlogInfoLeft>
          <h2>{data.name}</h2>
          <hr />
          <h4>
            Published: {data.date}
            <br />
            Description: {data.description}
          </h4>
        </BlogInfoLeft>
        <BlogInfoRight>
          <BlogLink href={data.url}>
            Go to Post{" "}
            <svg
              width="58"
              height="56"
              viewBox="0 0 58 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M49.375 28C49.375 39.0291 40.2696 48 29 48V50C41.3406 50 51.375 40.1669 51.375 28H49.375ZM29 48C17.7304 48 8.625 39.0291 8.625 28H6.625C6.625 40.1669 16.6594 50 29 50V48ZM8.625 28C8.625 16.9709 17.7304 8 29 8V6C16.6594 6 6.625 15.8331 6.625 28H8.625ZM29 8C40.2696 8 49.375 16.9709 49.375 28H51.375C51.375 15.8331 41.3406 6 29 6V8Z" />
              <path d="M30.6742 34.2867C30.2802 34.6737 30.2746 35.3069 30.6617 35.7008C31.0487 36.0948 31.6819 36.1004 32.0758 35.7133L30.6742 34.2867ZM38.5 28L39.2008 28.7133C39.3922 28.5253 39.5 28.2683 39.5 28C39.5 27.7317 39.3922 27.4747 39.2008 27.2867L38.5 28ZM32.0758 20.2867C31.6819 19.8996 31.0487 19.9052 30.6617 20.2992C30.2746 20.6931 30.2802 21.3263 30.6742 21.7133L32.0758 20.2867ZM19.5 27C18.9477 27 18.5 27.4477 18.5 28C18.5 28.5523 18.9477 29 19.5 29L19.5 27ZM32.0758 35.7133L39.2008 28.7133L37.7992 27.2867L30.6742 34.2867L32.0758 35.7133ZM39.2008 27.2867L32.0758 20.2867L30.6742 21.7133L37.7992 28.7133L39.2008 27.2867ZM19.5 29L38.5 29L38.5 27L19.5 27L19.5 29Z" />
            </svg>
          </BlogLink>
        </BlogInfoRight>
      </BlogInfo>
    </Card>
  );
}

export default BlogCard;

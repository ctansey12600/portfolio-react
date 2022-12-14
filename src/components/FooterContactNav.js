//About routing to favorite/most recent project
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 20px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 32px 8px 24px;
  gap: 8px;

  background: ${(props) => props.theme.infoTitle};
  border-radius: 8px;
  flex: none;
  flex-grow: 0;
  font-family: "Martel";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: ${(props) => props.theme.infoBody};
  &:hover {
    background: var(--green);
  }
  path {
    fill: ${(props) => props.theme.infoBody};
    stroke: ${(props) => props.theme.infoBody};
  }
`;

function FooterContactNav() {
  return (
    <Wrapper>
      <Button as={Link} to="/contact">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.50289 2.25722L6.57441 2.62861V2.62861L7.50289 2.25722ZM8.55715 4.89288L9.48563 4.52149V4.52149L8.55715 4.89288ZM8.23664 6.91603L9.00486 7.55621V7.55621L8.23664 6.91603ZM7.66925 7.5969L8.43747 8.23708L7.66925 7.5969ZM7.79148 10.2915L7.08437 10.9986L7.79148 10.2915ZM9.70852 12.2085L10.4156 11.5014L9.70852 12.2085ZM12.4031 12.3307L11.7629 11.5625L12.4031 12.3307ZM13.084 11.7634L13.7242 12.5316L13.7242 12.5316L13.084 11.7634ZM15.1071 11.4428L14.7357 12.3713L15.1071 11.4428ZM17.7428 12.4971L18.1142 11.5686L17.7428 12.4971ZM2.89474 2H5.64593V0H2.89474V2ZM6.57441 2.62861L7.62867 5.26427L9.48563 4.52149L8.43136 1.88583L6.57441 2.62861ZM7.46842 6.27585L6.90103 6.95672L8.43747 8.23708L9.00486 7.55621L7.46842 6.27585ZM7.08437 10.9986L9.00141 12.9156L10.4156 11.5014L8.49859 9.58437L7.08437 10.9986ZM13.0433 13.099L13.7242 12.5316L12.4438 10.9951L11.7629 11.5625L13.0433 13.099ZM14.7357 12.3713L17.3714 13.4256L18.1142 11.5686L15.4785 10.5144L14.7357 12.3713ZM18 14.3541V17.1053H20V14.3541H18ZM17.1053 18C8.76286 18 2 11.2371 2 2.89474H0C0 12.3417 7.65829 20 17.1053 20V18ZM18 17.1053C18 17.5994 17.5994 18 17.1053 18V20C18.704 20 20 18.704 20 17.1053H18ZM17.3714 13.4256C17.751 13.5775 18 13.9452 18 14.3541H20C20 13.1274 19.2531 12.0242 18.1142 11.5686L17.3714 13.4256ZM13.7242 12.5316C14.0063 12.2964 14.3947 12.2349 14.7357 12.3713L15.4785 10.5144C14.4554 10.1051 13.2903 10.2897 12.4438 10.9951L13.7242 12.5316ZM9.00141 12.9156C10.0986 14.0128 11.8513 14.0923 13.0433 13.099L11.7629 11.5625C11.3656 11.8936 10.7813 11.8671 10.4156 11.5014L9.00141 12.9156ZM6.90103 6.95672C5.90771 8.1487 5.98722 9.90143 7.08437 10.9986L8.49859 9.58437C8.13287 9.21866 8.10637 8.63441 8.43747 8.23708L6.90103 6.95672ZM7.62867 5.26427C7.76509 5.6053 7.70356 5.99367 7.46842 6.27585L9.00486 7.55621C9.71029 6.7097 9.89487 5.54459 9.48563 4.52149L7.62867 5.26427ZM5.64593 2C6.05484 2 6.42255 2.24895 6.57441 2.62861L8.43136 1.88583C7.97577 0.746853 6.87265 0 5.64593 0V2ZM2.89474 0C1.29602 0 0 1.29602 0 2.89474H2C2 2.40059 2.40059 2 2.89474 2V0Z"
            fill="#215623"
          />
        </svg>{" "}
        Contact Me
      </Button>
      <Button as={Link} to="/contact">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.68497 19.605L8.2207 18.7606C7.96683 18.5996 7.65397 18.5613 7.36874 18.6563L7.68497 19.605ZM3.5 21L2.55132 20.6838C2.43154 21.0431 2.52506 21.4393 2.79289 21.7071C3.06073 21.9749 3.45689 22.0685 3.81623 21.9487L3.5 21ZM4.89499 16.815L5.84367 17.1313C5.93875 16.846 5.90045 16.5332 5.73938 16.2793L4.89499 16.815ZM12.5 22C18.0228 22 22.5 17.5228 22.5 12H20.5C20.5 16.4183 16.9183 20 12.5 20V22ZM7.14923 20.4494C8.69708 21.4315 10.5337 22 12.5 22V20C10.9242 20 9.45764 19.5454 8.2207 18.7606L7.14923 20.4494ZM7.36874 18.6563L3.18377 20.0513L3.81623 21.9487L8.0012 20.5537L7.36874 18.6563ZM4.44868 21.3162L5.84367 17.1313L3.94631 16.4988L2.55132 20.6838L4.44868 21.3162ZM2.5 12C2.5 13.9663 3.06855 15.8029 4.0506 17.3508L5.73938 16.2793C4.95458 15.0424 4.5 13.5758 4.5 12H2.5ZM12.5 2C6.97715 2 2.5 6.47715 2.5 12H4.5C4.5 7.58172 8.08172 4 12.5 4V2ZM22.5 12C22.5 6.47715 18.0228 2 12.5 2V4C16.9183 4 20.5 7.58172 20.5 12H22.5Z"
            fill="#215623"
          />
          <path
            d="M16.5 12H16.502V12.002H16.5V12Z"
            stroke="#215623"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 12H12.502V12.002H12.5V12Z"
            stroke="#215623"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 12H8.502V12.002H8.5V12Z"
            stroke="#215623"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>{" "}
        Questions?
      </Button>
    </Wrapper>
  );
}

export default FooterContactNav;

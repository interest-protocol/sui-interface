import { FC } from 'react';

import { SVGProps } from '../svg.types';

const CelerBTCETH: FC<SVGProps & { filled?: boolean }> = ({
  maxWidth,
  maxHeight,
  filled,
  ...props
}) =>
  filled ? (
    <svg
      style={{ maxWidth, maxHeight }}
      viewBox="0 0 55 49"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8C4 5.79086 5.79086 4 8 4H40C42.2091 4 44 5.79086 44 8V25.0411C43.6703 25.0139 43.3368 25 43 25C36.3726 25 31 30.3726 31 37C31 39.6124 31.8348 42.0298 33.2521 44H8C5.79086 44 4 42.2091 4 40V8Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.006 20.8988C29.7666 18.7833 27.9256 18.1033 25.6128 17.9393L25.5639 15L23.7744 15.03L23.822 17.8918C23.3521 17.8996 22.8715 17.9168 22.394 17.9343L22.3464 15.0535L20.5583 15.0832L20.6064 18.0216C20.2192 18.036 19.8389 18.0495 19.468 18.0559L19.4676 18.0468L17 18.0869L17.0322 19.9977C17.0322 19.9977 18.3529 19.9506 18.3314 19.9753C19.0561 19.9635 19.2994 20.3802 19.3736 20.7422L19.4293 24.0907C19.4793 24.0901 19.5446 24.0911 19.6186 24.1L19.4301 24.1032L19.5071 28.7942C19.4791 29.0228 19.351 29.3887 18.8447 29.398C18.868 29.4179 17.5442 29.4192 17.5442 29.4192L17.2243 31.5623L19.5531 31.5234C19.816 31.5194 20.0764 31.5179 20.3339 31.5164C20.5007 31.5154 20.6665 31.5145 20.8309 31.5128L20.8811 34.486L22.6683 34.4567L22.6199 31.5152C23.1103 31.5173 23.5853 31.5133 24.0489 31.5052L24.0967 34.433L25.8858 34.4031L25.8371 31.4356C28.8421 31.2131 30.9352 30.4202 31.1489 27.592C31.3222 25.3141 30.236 24.3169 28.5216 23.9348C29.5499 23.3884 30.1834 22.4468 30.006 20.8988ZM27.6081 27.297C27.6425 29.336 24.438 29.3443 22.9731 29.348C22.8419 29.3484 22.7247 29.3487 22.6249 29.3504L22.56 25.4117C22.6819 25.4097 22.8299 25.4037 22.9975 25.397C24.4979 25.3366 27.5723 25.2131 27.6081 27.297ZM22.8241 23.6074C24.0471 23.6071 26.7131 23.6065 26.6829 21.7539C26.6516 19.8588 24.0886 19.9695 22.8369 20.0235C22.6962 20.0296 22.572 20.035 22.4699 20.0367L22.5291 23.6089C22.6134 23.6075 22.7128 23.6075 22.8241 23.6074Z"
        fill="#1B1B1F"
      />
      <path
        d="M53 37C53 31.4772 48.5228 27 43 27C37.4772 27 33 31.4772 33 37C33 42.5228 37.4772 47 43 47C48.5228 47 53 42.5228 53 37Z"
        fill="#627EEA"
      />
      <path
        d="M43.4747 29L43.377 29.3323V38.9743L43.4747 39.0718L47.9504 36.4263L43.4747 29Z"
        fill="white"
      />
      <path
        d="M43.4757 29L39 36.4263L43.4757 39.0719V34.392V29Z"
        fill="white"
      />
      <path
        d="M43.475 40.5271L43.4199 40.5942V44.0289L43.475 44.1898L47.9534 37.8828L43.475 40.5271Z"
        fill="white"
      />
      <path
        d="M43.4757 44.1898V40.5271L39 37.8828L43.4757 44.1898Z"
        fill="white"
      />
      <path
        d="M43.4766 39.0724L47.9522 36.4269L43.4766 34.3926V39.0724Z"
        fill="white"
      />
      <path d="M39 36.4269L43.4757 39.0725V34.3926L39 36.4269Z" fill="white" />
    </svg>
  ) : (
    <svg
      style={{ maxWidth, maxHeight }}
      viewBox="0 0 55 49"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.7054 16.8061C35.2322 12.572 31.5936 11.2111 27.0226 10.8828L26.9259 5L23.3891 5.06004L23.4832 10.7878C22.5544 10.8034 21.6046 10.8378 20.6608 10.8728L20.5668 5.10708L17.0327 5.16652L17.1278 11.0475C16.3625 11.0764 15.6109 11.1034 14.8778 11.1162L14.877 11.098L10 11.1782L10.0636 15.0026C10.0636 15.0026 12.6739 14.9083 12.6314 14.9578C14.0637 14.9341 14.5446 15.7681 14.6912 16.4927L14.8013 23.1945C14.9002 23.1933 15.0292 23.1953 15.1755 23.2131L14.8029 23.2195L14.9551 32.6082C14.8998 33.0658 14.6466 33.7981 13.6459 33.8167C13.692 33.8565 11.0756 33.8591 11.0756 33.8591L10.4433 38.1484L15.046 38.0705C15.5656 38.0625 16.0803 38.0595 16.5892 38.0565C16.9189 38.0545 17.2466 38.0527 17.5715 38.0493L17.6707 44L21.203 43.9414L21.1073 38.0541C22.0765 38.0583 23.0154 38.0503 23.9316 38.0341L24.0261 43.8939L27.5621 43.8341L27.4659 37.8948C33.405 37.4495 37.5419 35.8626 37.9642 30.2021C38.3068 25.643 36.16 23.6472 32.7716 22.8824C34.8039 21.7889 36.056 19.9043 35.7054 16.8061ZM30.9661 29.6117C31.0341 33.6926 24.7006 33.7092 21.8054 33.7166C21.5461 33.7174 21.3144 33.718 21.1172 33.7214L20.9889 25.8384C21.2299 25.8344 21.5224 25.8224 21.8536 25.8089C24.819 25.6881 30.8954 25.4409 30.9661 29.6117ZM21.5109 22.2272C23.9281 22.2266 29.1972 22.2254 29.1375 18.5175C29.0757 14.7246 24.0101 14.9461 21.5362 15.0542C21.2581 15.0664 21.0126 15.0772 20.8108 15.0806L20.9279 22.2302C21.0945 22.2274 21.2909 22.2274 21.5109 22.2272Z"
        fill="currentColor"
      />
      <path
        d="M53 37C53 31.4772 48.5228 27 43 27C37.4772 27 33 31.4772 33 37C33 42.5228 37.4772 47 43 47C48.5228 47 53 42.5228 53 37Z"
        fill="#627EEA"
      />
      <path
        d="M43.4747 29L43.377 29.3323V38.9743L43.4747 39.0718L47.9504 36.4263L43.4747 29Z"
        fill="white"
      />
      <path
        d="M43.4757 29L39 36.4263L43.4757 39.0719V34.392V29Z"
        fill="white"
      />
      <path
        d="M43.475 40.5271L43.4199 40.5942V44.0289L43.475 44.1898L47.9534 37.8828L43.475 40.5271Z"
        fill="white"
      />
      <path
        d="M43.4757 44.1898V40.5271L39 37.8828L43.4757 44.1898Z"
        fill="white"
      />
      <path
        d="M43.4766 39.0724L47.9522 36.4269L43.4766 34.3926V39.0724Z"
        fill="white"
      />
      <path d="M39 36.4269L43.4757 39.0725V34.3926L39 36.4269Z" fill="white" />
    </svg>
  );

export default CelerBTCETH;
